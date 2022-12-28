const connectToDB = require("./Database/connect");
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const userRoutes = require("./routers/Users");
const noteRoutes = require("./routers/Notes");

// TODO: it's stored in .env file
const MONGOURI = `mongodb+srv://HamzaJavedShaikh:1212@cluster0.blo8xq3.mongodb.net/test`;

// * Connecting To DB
connectToDB(MONGOURI);

app.use(express.json()); 
app.use(express.urlencoded({extended:true}));

// * Models, Used To Perform Operations On [Related-Collections] in database 
 




// * All-API-Routes (Used-By-Client)
app.use("/api/auth", userRoutes);
app.use("/api/notes", noteRoutes);
 



// * listening 
app.listen(80);
