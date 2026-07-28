const mongoose = require("mongoose");
require("dotenv").config();

const Healthcare = require("./models/Healthcare");


mongoose.connect(process.env.MONGODB_URI)
.then(async()=>{


    await Healthcare.deleteMany();


    await Healthcare.insertMany([

        {
            hospitalName: "Government General Hospital",
            services: "Free consultations, medicines, emergency care and senior citizen health services",
            contact: "108 Emergency Service",
            location: "Bhimavaram, Andhra Pradesh"
        },


        {
            hospitalName: "Primary Health Centre",
            services: "Basic treatment, health checkups and vaccination facilities",
            contact: "104 Health Helpline",
            location: "Andhra Pradesh"
        },


        {
            hospitalName: "Ayushman Bharat Healthcare Services",
            services: "Cashless medical treatment for eligible citizens",
            contact: "14555 Ayushman Bharat Helpline",
            location: "India"
        },


        {
            hospitalName: "Senior Citizen Health Centre",
            services: "Regular health checkups and geriatric healthcare support",
            contact: "0863-2345678",
            location: "Andhra Pradesh"
        }

    ]);


    console.log("✅ Healthcare services added successfully");


    mongoose.connection.close();


})
.catch((error)=>{

    console.log(error);

});
