const mongoose = require("mongoose");

async function dbConnection(){
    try{
        await mongoose.connect("mongodb+srv://deepak01122003abc_db_user:Deepak1973@deepak.hyuy3bo.mongodb.net/?retryWrites=true&w=majority&appName=Deepak" ,{
            ssl:true,
            tlsAllowInvalidCertificates:false
        });
        console.log("Data connection established");


    }catch(err){
        console.error(err);

    }
}
module.exports =dbConnection;