const srcMessages = "https://dip-chat-server.herokuapp.com/api/messages/";

let messageSerial = 0;
let safeUpdate;

let domChat = document.querySelector("#chat");
let domName = document.querySelector("#inputName");
let domRoom = document.querySelector("#inputRoom");
let domMessage = document.querySelector("#inputMessage");

domRoom.addEventListener("input", e => {
    messageSerial = 0;
    domChat.value = "";
    safeUpdate = false;
});

domMessage.addEventListener("keypress", e => {
    if (e.code === "Enter") {
        sendChatMessage(domName.value, domRoom.value, domMessage.value);
        domMessage.value = "";
    }
})

function getChatMessages(room) {
    return fetch(srcMessages + room).then(response => response.json())
}

function updateChat() {
    safeUpdate = true;

    getChatMessages(domRoom.value).then(messages => {
        if (safeUpdate) {
            for (let message of messages) {
                if (message.serial > messageSerial) {
                    let room = domRoom.value == "" && message.roomName + "/" || "";
                    domChat.value += `\n[${room}${message.name}]: ${message.text}`;
                    domChat.scrollTop = domChat.scrollHeight;
                    messageSerial = message.serial;
                }
            }
        }
    }).then(() => {updateChat()});
}

function sendChatMessage(name, room, text) {
    let message = {
        name: name,
        roomName: room,
        text: text,
    }

    return fetch(srcMessages, {
        method: "post",
        body: JSON.stringify(message),
        headers: { 'Content-Type': 'application/json' },
    })
}

updateChat();