const WelfareScheme = require("../models/WelfareScheme");


const getWelfareSchemes = async (req, res) => {

    try {

        const schemes = await WelfareScheme.find();

        res.status(200).json(schemes);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};


module.exports = {
    getWelfareSchemes
};