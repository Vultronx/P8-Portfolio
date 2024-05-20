const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
    fname: { type: String, required: true },
    lname: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    object: { type: String, required: true },
    message: { type: String, required: true }
});

module.exports = mongoose.model('Contact', contactSchema);