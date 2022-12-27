const mongoose =  require( "mongoose")
const express = require( "express")
const userRoutes = require("./routers/User")
const noteRoutes = require("./routers/Notes")
const app = express();

app.use("/api/auth", userRoutes);
app.use("/api/notes", noteRoutes);


app.listen(80);
