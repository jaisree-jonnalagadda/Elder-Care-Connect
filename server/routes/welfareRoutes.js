const express = require("express");

const router = express.Router();

const {
    getWelfareSchemes
} = require("../controllers/welfareController");


router.get("/", getWelfareSchemes);


module.exports = router;