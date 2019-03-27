const express = require("express");
const fetch = require("node-fetch");
const app = express();

const port = process.env.port || 1337;

const usersUrl = "https://jsonplaceholder.typicode.com/users";

app.get("/", (req, res) => {
    let html = "<ol>";
    fetch(usersUrl).then((resonse) => resonse.json()).then((result) => {
        for (let user of result) {
            html += `<li>${user.name}</li>`;
        }
        res.send(html + "</ol>");
    });
});

app.listen(port);

console.log("Server running at http://localhost:%d", port);
