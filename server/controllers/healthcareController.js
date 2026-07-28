const Healthcare = require("../models/Healthcare");


const getHealthcare = async (req,res)=>{


    try{


        const healthcare = await Healthcare.find();


        res.status(200).json(healthcare);


    }
    catch(error){


        res.status(500).json({

            message:error.message

        });


    }


};



module.exports = {

    getHealthcare

};