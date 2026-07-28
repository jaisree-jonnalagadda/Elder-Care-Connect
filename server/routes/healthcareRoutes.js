const express = require("express");

const router = express.Router();


const {
    getHealthcare
}=require("../controllers/healthcareController");



router.get("/",getHealthcare);



module.exports = router;