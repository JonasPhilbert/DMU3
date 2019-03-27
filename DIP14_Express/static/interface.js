const api = "http://localhost:1337/messages";

let latestMessage = -1;

let domAlert = document.querySelector("#alert");
let domMessageInput = document.querySelector("#messageInput");
let domMessageList = document.querySelector("#messageList");

document.querySelector("#postMessage").addEventListener("click", e => {
    fetch(api, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ message: domMessageInput.value })
    }).then(res => {
        domMessageInput.value = "";
        return res.json();
    }).then(rep => {
        domAlert.innerText = `${rep.status}`;
    }).catch(err => {
        domAlert.className = "alert alert-danger";
        domAlert.innerText = `[${err}]`;
    });
});

function editMessage(element) {
    let id = element.data_id;
    fetch(api + "/" + id, {
        method: "put",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ message: domMessageInput.value })
    }).then(reply => reply.json()).then(res => {
        domAlert.innerText = res.status;
        reset();
    }).catch(err => {
        domAlert.className = "alert alert-danger";
        domAlert.innerText = `[${err}]`;
    });
}

function reset() {
    getMessages().then(messages => {
        domMessageList.innerHTML = "";
        for (let message of messages) {
            addMessage(message.id, message.message);
        }
        latestMessage = messages[messages.length - 1].id;
    });
}

function getMessages() {
    return fetch(api).then(rep => rep.json());
}

function updateMessages() {
    getMessages().then(res => {
        for (let message of res) {
            if (message.id > latestMessage) {
                addMessage(message.id, message.message);
                latestMessage = message.id;
            }
        }

        setTimeout(updateMessages, 500);
    })
}

function addMessage(id, message) {
    let domMessage = document.createElement("li");
    domMessage.innerText = message;
    domMessage.data_id = id;
    domMessage.className = "list-group-item";
    domMessageList.append(domMessage);

    domMessage.addEventListener("click", e => {
        editMessage(e.target);
    })
}

updateMessages();