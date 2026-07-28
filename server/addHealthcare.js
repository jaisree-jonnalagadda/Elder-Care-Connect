const mongoose = require("mongoose");
require("dotenv").config();

const Healthcare = require("./models/Healthcare");


const healthcareData = [

    {
        hospitalName: "Government General Hospital",
        location: "Bhimavaram, Andhra Pradesh",
        services: "Emergency care, OPD, General Medicine",
        contact: "08816-223456",
        emergency: true
    },


    {
        hospitalName: "Area Hospital",
        location: "Tanuku, Andhra Pradesh",
        services: "Free health checkups, Surgery, Pharmacy",
        contact: "08819-222333",
        emergency: true
    },


    {
        hospitalName: "Primary Health Centre",
        location: "Andhra Pradesh Villages",
        services: "Basic treatment, Vaccination, Health camps",
        contact: "104",
        emergency: false
    }

];


mongoose.connect(process.env.MONGODB_URI)
.then(async()=>{

    await Healthcare.insertMany(healthcareData);

    console.log("Healthcare data added successfully");

    mongoose.connection.close();

})
.catch((error)=>{

    console.log(error);

});