const express = require("express");
const chalk = require("chalk");
const Message = require("./Message");
const app = express();

const port = process.env.port || 1337;

let messages = [
    new Message("Hello World!"),
    new Message("Hey Jeff."),
    new Message("My name is not Jeff :/"),
    new Message("That's what you think..."),
    new Message("D:")
];

app.use(express.json());

app.use(express.static("static"));

app.get("/messages", (req, res) => {
    res.send(messages);
});

app.get("/messages/:id", (req, res) => {
    let message = messages.filter(e => e.id == req.params.id);
    if (message.length > 0) {
        res.send(message);
    } else {
        res.status(404).send({ status: `No such message with id: ${req.params.id}` });
        //res.sendStatus(418); // I'm a teapot.
    }
});

app.post("/messages", (req, res) => {
    if (!req.body.message || req.body.message === "")
        return res.status(400).send({ status: "Empty messages are not allowed." });

    let msg = new Message(req.body.message);
    messages.push(msg);
    return res.send({ status: `Message ${msg.id} added with content: ${msg.message}` });
});

app.put("/messages/:id", (req, res) => {
    if (!req.body.message || req.body.message === "")
        return res.status(400).send({ status: "Empty messages are not allowed." });

    let msg = messages.find(e => e.id == req.params.id);
    if (!msg) return res.status(400).send({ status: `No such message with id: ${req.params.id}` });

    msg.message = req.body.message;
    return res.send({ status: `Message ${msg.id} updated with text: ${msg.message}` });
});

app.delete("/messages/:id", (req, res) => {
    for (let i = 0; i < messages.length; i++) {
        if (messages[i].id == req.params.id) {
            let msg = messages[i];
            messages.splice(i, 1);
            return res.send({ status: `Removed message ${msg.id} with text: ${msg.message}` });
        }
    }

    res.status(400).send({ message: `No such message with id: ${req.params.id}` });
});

app.listen(port);

console.log("Server running at: " + chalk.blue.bold(`http://localhost:${port}`));
