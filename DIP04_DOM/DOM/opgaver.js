// opgaver.js
// Tilføj kode for opgave 4.1 - 4.5 her!

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
for (let i = 0; i < listElements.length; i += 2) {
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

// 4.6
let mountains = [
    {name: "Kilimanjaro", height: 5895, place: "Tanzania"},
    {name: "Everest", height: 8848, place: "Nepal"},
    {name: "Mount Fuji", height: 3776, place: "Japan"},
    {name: "Vaalserberg", height: 323, place: "Netherlands"},
    {name: "Denali", height: 6168, place: "United States"},
    {name: "Popocatepetl", height: 5465, place: "Mexico"},
    {name: "Mont Blanc", height: 4808, place: "Italy/France"}
]

let mountainHeader = document.body.appendChild(document.createElement("h1"));
mountainHeader.style.color = "red";
mountainHeader.innerText = "Mountains";

let table = document.body.appendChild(document.createElement("table"));
table.style.border = "solid blud";
table.style.borderCollapse = "collapse";

let tableHeaderRow = document.createElement("tr");
tableHeaderRow.style.border = "solid blue";
tableHeaderRow.style.borderCollapse = "collapse";
table.appendChild(tableHeaderRow);

for (let k in mountains[0]) {
    let th = document.createElement("th");
    th.innerHTML = k;
    tableHeaderRow.appendChild(th);
}

for (let mountain of mountains) {
    let tr = document.createElement("tr");

    let tdName = document.createElement("td");
    tdName.innerHTML = mountain.name;
    tdName.style.border = "blue solid";
    tdName.style.borderCollapse = "collapse";
    tr.appendChild(tdName);

    let tdHeight = document.createElement("td");
    tdHeight.style.border = "blue solid";
    tdHeight.style.borderCollapse = "collapse";
    tdHeight.style.textAlign = "right";
    tdHeight.innerHTML = mountain.height;
    tr.appendChild(tdHeight);

    let tdPlace = document.createElement("td");
    tdPlace.style.border = "blue solid";
    tdPlace.style.borderCollapse = "collapse";
    tdPlace.innerHTML = mountain.place;
    tr.appendChild(tdPlace);

    table.appendChild(tr);
}