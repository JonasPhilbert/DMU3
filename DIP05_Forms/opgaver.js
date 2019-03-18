// opgaver.js

// 5.1
window.addEventListener("load", () => {
    // 4.1
    for (let h of document.querySelectorAll("p")) {
        h.className = "red"; // Baseret på css, virker ikke hvis css ikke har defineret farven for .red elementer.
        // OR
        // h.style.color = "red";
    }

    // 4.2
    for (let h of document.querySelectorAll("h1")) {
        let targetSibling = h.nextElementSibling.nextElementSibling;
        if (targetSibling) {
            targetSibling.style.color = "brown";
        }
    }

    // 4.3
    let listElements = document.querySelector("ul").children;
    for (let i = 0; i < listElements.length;i += 2) {
        listElements[i].style.backgroundColor = "lightgrey";
    }

    // 4.4
    for (let h of document.querySelectorAll("h1")) {
        let target = h.nextElementSibling;
        while (target.tagName != "P") {
            target = target.nextElementSibling;
        }

        let newHeader = h.insertAdjacentElement("afterEnd", document.createElement("h2"));
        newHeader.innerHTML = target.innerHTML;
        target.remove();
    }

    // 4.5
    let toc = document.body.insertAdjacentElement("afterBegin", document.createElement("ol"));
    let i = 0;
    for (let h of document.querySelectorAll("h1")) {
        h.id = "header" + i++;

        let a = document.createElement("a");
        a.innerHTML = h.innerHTML;
        a.href = "#" + h.id;

        let li = document.createElement("li");
        li.appendChild(a);
        toc.appendChild(li);
    }

    // 5.2
    let btn = document.createElement("button");
    btn.innerText = "Skjul liste";
    let toggle = false;
    btn.addEventListener("click", () => {
        document.querySelector("ol").style.display = toggle ? "none" : "block";
        btn.innerText = toggle ? "Vis liste" : "Skjul liste";
        toggle = !toggle;
    });
    document.body.prepend(btn);
});