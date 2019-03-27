const fetch = require("node-fetch");

const url = "http://localhost:1337/messages";

const body = {
    message: "TestMessage"
};

fetch(url, {
    method: "post",
    body: JSON.stringify(body),
    header: { "Content-Type": "application/json" }
})
    .then(res => res.json())
    .then(json => console.log(json));