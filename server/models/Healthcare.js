const mongoose = require("mongoose");


const healthcareSchema = new mongoose.Schema({

    hospitalName:{
        type:String,
        required:true
    },

    location:{
        type:String,
        required:true
    },

    services:{
        type:String,
        required:true
    },

    contact:{
        type:String,
        required:true
    },

    emergency:{
        type:Boolean,
        default:false
    }

});


module.exports = mongoose.model(
    "Healthcare",
    healthcareSchema
);