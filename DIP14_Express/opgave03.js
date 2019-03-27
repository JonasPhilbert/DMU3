const express = require("express");
const fetch = require("node-fetch");
const fs = require("fs").promises;
const app = express();

const port = process.env.port || 1337;

const usersUrl = "https://jsonplaceholder.typicode.com/users";

app.use(express.static("filer"));

app.get("/", (req, res) => {
    fs.readdir("filer").then((files) => {
        let html = "<ol>";
        for (let file of files) {
            html += `<li><a href="${file}">${file}</a></li>`;
        }
        res.send(html + "</ol>");
    });
});

app.get("/dias", (req, res) => {
    fs.readdir("filer").then((files) => {
        let html = "";
        for (let file of files) {
            if (/.+\.jpg/.test(file)) {
                html += `<img src="${file}"><br>`;
            }
        }
        res.send(html);
    });
});

app.listen(port);
console.log("Server running at http://localhost:%d", port);
