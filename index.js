const express = require("express");
const dbConnection = require("./config/dbConnection");
const app = express();
const userRoutes = require("./routes/UserRoutes");
const bookRoutes = require("./routes/BookRoutes");
const cors = require("cors")


let port = 8081;

app.use(cors());
app.use(express.json());
app.use(bookRoutes);
app.use(userRoutes);


dbConnection();
app.listen(port, ()=>{
    console.log(`server running on ${port}`);
})