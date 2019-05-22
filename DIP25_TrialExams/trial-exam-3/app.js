const express = require("express");
const app = express();
const hbs = require("hbs");

app.set("view engine", "hbs");
app.set("views", "templates");

app.use(express.static("filer"));
app.use(express.json());

const users = [
    { id: 0, name: "John", phone: "12345678", address: "Illumsvej 2" },
    { id: 1, name: "Doe", phone: "87654321", address: "Langegade 55" },
    { id: 2, name: "Jane", phone: "09876543", address: "Janesboulevard 8A" }
];

app.get("/", function(req, res) {
    res.render("index", { users });
});

app.get("/:nr", function(req, res) {
    const user = users.find(e => e.id == req.params.nr);
    if (user) {
        res.send({ address: user.address });
    } else {
        res.status(400).send({ err: `No such user with id: ${req.params.nr}` });
    }
});

app.listen(8080);

console.log("Lytter på port 8080 ...");
