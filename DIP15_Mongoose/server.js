const express = require("express");
const messages = require("./messages");
const chalk = require("chalk");
const app = express();

const port = process.env.port || 1337;

app.use(express.json());

app.get("/messages", (req, res) => {
    messages.getAll().then(result => {
        res.send({ message: "Got all messages.", data: result });
    });
});

app.get("/messages/:id", (req, res) => {
    messages.getAll().then(result => {
        let message = result.filter(e => e.id == req.params.id);
        if (message) {
            res.send({
                message: `Got message with id ${req.params.id}`,
                data: message
            });
        } else {
            res.status(404).send({
                message: `No such message with id: ${req.params.id}`
            });
        }
    });
});

app.post("/messages", (req, res) => {
    if (!req.body.message || req.body.message === "")
        return res
            .status(400)
            .send({ message: "Empty messages are not allowed." });

    messages.addMessage(req.body.message, m => {
        return res.send({
            message: `Message ${m.serial} added with content: ${m.message}`
        });
    });
});

// TODO: Fix everything. "Serial" vs "ID", "message" vs "status" ???

app.put("/messages/:id", (req, res) => {
    if (!req.body.message || req.body.message === "")
        return res
            .status(400)
            .send({ message: "Empty messages are not allowed." });

    messages.getAll().then(result => {
        let message = result.find(e => e.serial == req.params.id);
        if (message) {
            messages.updateMessage(message, req.body.message, function(m) {
                res.send({ message: `Message ${m.serial}` });
            });
        } else {
            return res
                .status(400)
                .send({ message: `No such message with id: ${req.params.id}` });
        }
    });

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
