const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    item_name : {
        type : String,
        required: true
    },
    description : {
        type: String,
        required: true
    },
    quantity: {
        type: String,
        required: true
    },
    unit_price: {
        type: String,
        required: true
    }
})

const Itemdb = mongoose.model('itemdb', schema);

module.exports = Itemdb;