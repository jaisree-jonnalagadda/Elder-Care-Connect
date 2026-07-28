const mongoose = require("mongoose");


const welfareSchema = new mongoose.Schema({

    schemeName: {
        type: String,
        required: true
    },

    category: {
        type: String,
        required: true
    },

    eligibility: {
        type: String,
        required: true
    },

    benefits: {
        type: String,
        required: true
    },

    applyLink: {
        type: String,
        required: true
    }

});


module.exports = mongoose.model(
    "WelfareScheme",
    welfareSchema
);