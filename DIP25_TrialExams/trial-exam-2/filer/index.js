// index.js

const numbers = [];
for (let i = 0; i < 20; i++) {
    numbers.push(Math.round((Math.random() - 0.5) * 10));
}

function numberAction(e) {
    document.getElementById("list").removeChild(e.target);
    updateSum();
}

function updateSum() {
    let sum = 0;
    document.getElementById("list").childNodes.forEach(e => (sum += parseInt(e.innerText) || 0));
    document.getElementById("sum").innerText = `SUM: ${sum}`;
}

window.addEventListener("load", async () => {
    const res = await fetch("/index.hbs");
    const text = await res.text();

    // Set our body from template.
    document.body.innerHTML = Handlebars.compile(text)({ numbers });

    // Make negative numbers red & Add even listeners.
    document.querySelectorAll("li").forEach(e => {
        if (e.innerText.substr(0, 1) === "-") e.style.color = "red";
        e.addEventListener("click", numberAction);
    });

    // Initial sum update.
    updateSum();
});
