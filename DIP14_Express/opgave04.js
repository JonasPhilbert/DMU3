const express = require("express");
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

app.get("/", (req, res) => {
    res.send("DIP14 Message Server");
});

app.get("/messages", (req, res) => {
    res.send(messages);
});

app.get("/messages/:id", (req, res) => {
    let message = messages.filter((e) => e.id == req.params.id);
    if (message.length > 0) {
        res.send(message);
    } else {
        res.status(404).send({
            message: `No such message with id: ${req.params.id}`
        });
        //res.sendStatus(418); // I'm a teapot.
    }
});

app.post("/messages", (req, res) => {
    if (!req.body.message) {
        return res.status(400).send({ message: "A message must be provided." });
    }

    if (req.body.message === "") {
        return res
            .status(400)
            .send({ message: "Empty messages are not allowed." });
    }

    let msg = new Message(req.body.message);
    messages.push(msg);
    return res.send({
        message: `Message ${msg.id} added with content: ${msg.message}`
    });
});

app.put("/messages/:id", (req, res) => {
    // Update message.
});

app.put("/messages/:id", (req, res) => {
    // Delete message.
});

app.listen(port);

console.log("Server running at http://localhost:%d", port);
