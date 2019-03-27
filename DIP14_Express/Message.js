class Message {
    constructor(message) {
        this.id = Message.count;
        this.message = message;

        Message.count++;
    }
}

Message.count = 0;

module.exports = Message;
