const express = require("express");
const app = express();
const fs = require("fs").promises;

const port = process.env.port || 8080;

app.use(express.static("public"));

app.get("/files", (req, res) => {
    fs.readdir("files").then(files => {
        res.send(files);
    });
});

app.get("/", (req, res) => {
    res.sendStatus(404);
});

app.listen(port);

console.log("Listening on http://localhost:" + port);
