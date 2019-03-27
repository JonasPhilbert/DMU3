const express = require("express");
const app = express();

const port = process.env.port || "1337";

app.use(express.static("static"));

app.all("/", (req, res) => {
    res.send("Hello Plain!");
});

app.listen(port);

console.log("Server running on http://localhost:%d", port);