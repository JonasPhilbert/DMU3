const express = require("express");
const messages = require("./messages");
const chalk = require("chalk");
const app = express();

const port = process.env.port || 1337;

app.use(express.json());

app.get("/messages", (req, res) => {
    messages.getAll().then(result => {
        res.send(result);
    });
});

app.get("/messages/:id", (req, res) => {
    let message = messages.filter(e => e.id == req.params.id);
    if (message.length > 0) {
        res.send(message);
    } else {
        res.status(404).send({
            status: `No such message with id: ${req.params.id}`
        });
        //res.sendStatus(418); // I'm a teapot.
    }
});

app.post("/messages", (req, res) => {
    if (!req.body.message || req.body.message === "")
        return res
            .status(400)
            .send({ status: "Empty messages are not allowed." });

    messages.addMessage(req.body.message, m => {
        return res.send({
            status: `Message ${m.serial} added with content: ${m.message}`
        });
    });
});

app.put("/messages/:id", (req, res) => {
    if (!req.body.message || req.body.message === "")
        return res
            .status(400)
            .send({ status: "Empty messages are not allowed." });

    let msg = messages.find(e => e.id == req.params.id);
    if (!msg)
        return res
            .status(400)
            .send({ status: `No such message with id: ${req.params.id}` });

    msg.message = req.body.message;
    return res.send({
        status: `Message ${msg.id} updated with text: ${msg.message}`
    });
});

app.delete("/messages/:id", (req, res) => {
    for (let i = 0; i < messages.length; i++) {
        if (messages[i].id == req.params.id) {
            let msg = messages[i];
            messages.splice(i, 1);
            return res.send({
                status: `Removed message ${msg.id} with text: ${msg.message}`
            });
        }
    }

    res.status(400).send({
        message: `No such message with id: ${req.params.id}`
    });
});

app.listen(port);

console.log(
    "Server running at: " + chalk.blue.bold(`http://localhost:${port}`)
);
