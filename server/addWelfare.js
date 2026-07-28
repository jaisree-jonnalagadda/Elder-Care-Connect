const mongoose = require("mongoose");
require("dotenv").config();

const WelfareScheme = require("./models/WelfareScheme");


mongoose.connect(process.env.MONGODB_URI)
.then(async()=>{


await WelfareScheme.deleteMany();


await WelfareScheme.insertMany([

{
schemeName:"YSR Pension Kanuka",
category:"Pension Scheme",
eligibility:"Senior citizens above 60 years",
benefits:"Monthly pension assistance and financial security",
applyLink:"https://sspensions.ap.gov.in/"
},


{
schemeName:"Ayushman Bharat",
category:"Healthcare Support",
eligibility:"Eligible senior citizens and low income families",
benefits:"Free medical treatment coverage",
applyLink:"https://pmjay.gov.in/"
},


{
schemeName:"Senior Citizen Savings Scheme",
category:"Financial Security",
eligibility:"Citizens above 60 years",
benefits:"Safe investment with regular income",
applyLink:"https://www.indiapost.gov.in/"
},


{
schemeName:"Andhra Pradesh Old Age Pension",
category:"Government Pension",
eligibility:"Senior citizens requiring financial support",
benefits:"Monthly government pension support",
applyLink:"https://gsws-nbm.ap.gov.in/"
}


]);


console.log("✅ Welfare schemes added successfully");


mongoose.connection.close();


})
.catch((err)=>{

console.log(err);

});