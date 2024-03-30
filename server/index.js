// import packages
const express = require('express');
const mongoose = require('mongoose');

//import from other files
const authRouter = require("./routes/auth");

// initialize
const PORT = 3000;
const app = express();
const DB = "mongodb+srv://emmanuelbajan0:emmanmongodb00@cluster0.sa7woqu.mongodb.net/amzclone?retryWrites=true&w=majority&appName=Cluster0";


// middleware
app.use(express.json());
app.use(authRouter);

// connections
mongoose
.connect(DB)
.then(() => {
    console.log("Connected successfully");
})
.catch((e) => {
    console.log(e);
});

app.listen(PORT, "0.0.0.0", () =>{
console.log(`connected at port ${PORT}`);
});