const express = require("express");
const app = express();
const hbs = require("hbs");
const fs = require("fs").promises;

const port = process.env.port || 8080;

app.set("view engine", "hbs");
app.set("views", "templates");
hbs.registerPartials("templates");

app.get("/", (req, res) => {
    fs.readdir("files").then(files => {
        console.log(files);
        res.render("list", { files });
    });
});

app.listen(port);

console.log("Listening on http://localhost:" + port);
