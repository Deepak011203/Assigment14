const mongoose = require("mongoose");

async function dbConnection(){
    try{
        await mongoose.connect("mongodb+srv://rameshmuthu01996:ramesh1996@tasks.tyecyah.mongodb.net/?retryWrites=true&w=majority&appName=tasks" ,{
            ssl:true,
            tlsAllowInvalidCertificates:false
        });
        console.log("Data connection established");


    }catch(err){
        console.error(err);

    }
}
module.exports =dbConnection;