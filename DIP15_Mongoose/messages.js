let messages = {};

const Message = require("./Message");
const mongoose = require("mongoose");

mongoose.connect(
    "mongodb+srv://jonas:1234@dmu3-4gzrm.mongodb.net/dip15?retryWrites=true",
    { useNewUrlParser: true }
);

let db = mongoose.connection;
messages.serial = 0;

db.once("open", () => {
    console.log("Database connected.");
    Message.findOne()
        .sort("-serial")
        .exec()
        .then(result => {
            messages.serial = result.serial;
            console.log(`Serial set to max id: ${messages.serial}`);
        });
});

messages.addMessage = function(text, callback) {
    let message = new Message({ serial: ++messages.serial, message: text });
    message.save((err, m) => {
        if (err) return console.log("Message.save error: " + err);
        console.log(`Added message ${m.serial}: ${m.message}`);
        callback(m);
    });
};

messages.getAll = function() {
    return Message.find().exec();
};

module.exports = messages;
