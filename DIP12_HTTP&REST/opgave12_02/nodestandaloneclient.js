const fetch = require('node-fetch');
const readline = require('readline');

const srcApi = "https://dip-chat-server.herokuapp.com/api/";
const srcMessages = srcApi + "messages/";

let messageSerial = 0;
let room;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function getMessages() {
    return fetch(srcMessages + room).then(response => response.json())
}

function refreshMessages() {
    if (room) {
        getMessages().then(messages => {
            for (let message of messages) {
                if (message.serial > messageSerial) {
                    console.log(`[${message.name}]: ${message.text}`);
                    messageSerial = message.serial;
                }
            }
        }).then(() => {refreshMessages()});
    }
}

function postMessage(text) {
    let message = {
        name: "Jones",
        roomName: room,
        text: text,
    }

    return fetch(srcMessages, {
        method: "post",
        body: JSON.stringify(message),
        headers: { 'Content-Type': 'application/json' },
    })
}

rl.on("line", input => {
    if (room) {
        postMessage(input)
    } else {
        room = input;
        console.log(`Connecting to "${room}" chat room...`);
        refreshMessages();
    }
});

console.log("Enter room name: ");