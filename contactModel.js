//contactmodels.js

var mongoose = require('mongoose');

// setup schema 
var contactSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    gender: String,
    phone: String,
    Create_date: {
        type:Date,
        default:Date.now
    }
});

// export contact model 
var Contact = module.exports = mongoose.model('contact', contactSchema);

module.exports.get = function (callback, limit) {
    Contact.find(callback).limit(limit);
}