const mongoose = require("mongoose");
const express = require("express");

const app = express();
require("dotenv").config();


// db
const PORT =8000

try{
    mongoose.connect(process.env.MONGO_URL);
    console.log("successfully conntect to database");
    app.listen(PORT, () => {
        console.log(`Server is active`);
    });

}
catch(err){
    console.log(err);
}


// mw

// routes

