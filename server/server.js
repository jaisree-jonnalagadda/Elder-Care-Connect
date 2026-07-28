// =====================================
// Elder Care Connect Backend Server
// =====================================


const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();



// Import Routes

const contactRoutes = require("./routes/contactRoutes");
const welfareRoutes = require("./routes/welfareRoutes");
const healthcareRoutes = require("./routes/healthcareRoutes");



// Create App

const app = express();



// Middleware

app.use(cors());

app.use(express.json());




// Home Test Route

app.get("/", (req, res) => {

    res.send("Elder Care Connect API is Running");

});





// API Routes


app.use("/api/contact", contactRoutes);


app.use("/api/welfare", welfareRoutes);


app.use("/api/healthcare", healthcareRoutes);






// MongoDB Connection


mongoose.connect(process.env.MONGODB_URI)

.then(()=>{

    console.log("✅ MongoDB Connected Successfully");

})

.catch((error)=>{

    console.log("❌ MongoDB Connection Error");

    console.log(error.message);

});






// Port


const PORT = process.env.PORT || 5000;




// Start Server


app.listen(PORT,()=>{

    console.log(`🚀 Server is running on http://localhost:${PORT}`);

});