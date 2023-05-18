const mongoose = require('mongoose');

const payloadSchema = new mongoose.Schema({
    productId: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number, 
        required: true
    }
},{
    timestamps: true
});

const Payload = mongoose.model('Payload', payloadSchema);


module.exports = Payload;