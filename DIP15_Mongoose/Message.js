const mongoose = require("mongoose");

let messageSchema = new mongoose.Schema({
    serial: Number,
    message: String
});

module.exports = mongoose.model("Message", messageSchema);
