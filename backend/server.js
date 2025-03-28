// importing the default or master objects/methods/js files
/* server.js - Main entry point for the backend server */

const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const cors = require("cors");
// const Task = require("./models/taskModel");  //commented out included in ceo code
const taskRoutes = require("./routes/taskRoute");
// const connectDB = require('./config/connectDB');

// initialize the server method
const app = express(); // Initialize Express application

// Middleware or take you to the next level
app.use(express.json()); // Parse JSON request bodies
app.use(express.urlencoded({ extended: false })); // Parse URL-encoded data
app.use(cors({
    origin: ['http://localhost:3000', "https://rhotelhub-backend-app.onrender.com"],
})
); // Enable CORS for frontend-backend communication
app.use("/api/tasks", taskRoutes); //Routes


// Simple route to handle GET requests at the root URL (/)
// Default rout
app.get("/", (req, res) => {
    res.send("<h1>Welcome to the Task Manager API</h1>");
});

// Connect to MongoDB and start the server
const PORT = process.env.PORT || 4000;

mongoose
.connect(process.env.MONGO_URI)
.then(()=>{
   app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
})
.catch((err)=> console.log(err));


// install "npm i cors" before bringing information

//link frontend and backend 
// app.use(cors({
//     origin: ['http://localhost3000', " "], 
// }));

// const logger = (req, res, next) =>{
//     console.log('Middleware is implemented');
//     console.log(req.method);
//     next();
// };


// ------------------------------------------------------------------------------------------------------------------------------
// mongodb+srv://Dave126:<db_password>@dave126cluster.h0iaxfi.mongodb.net/?retryWrites=true&w=majority&appName=Dave126Cluster

// // const mongoose = require ('mongoose');

// const dotenv = require('dotenv').config();

// //1. Declaration of the server
// const express = require('express'); //import express

// const connectDB = require('./config/connectDB');

// // 2. create an instance of the express application.
// const app = express(); //create an express instance

// connectDB();

// // Define a Port Number: this is intermediary
// const PORT = process.env.PORT || 5000; //choose your prefee port


// // 3. create a route for pages/Define a simple route
// // Create a Route(GET /), handles requests to the home page ('/')
// app.get('/',  (req, res) => {
//     res.send('<h1>Welcome to the home page </h1> ');
// });

// app.get('/tasks',  (req, res) => {
//     res.send('Welcome to our product page');
// });

// //4. Define API endpoints
// // Start the server  
// // with app.listen () ensure the server runs on the defined port
// // console log with template literals (using backtick)displays the correct url dynamically
// app.listen(PORT, () => {
//     console.log(`Server started on port ${PORT}`);
// });

// // mongodb+srv://maxwellsbnimely:<db_password>@max78cluster0.nlmhf.mongodb.net/?retryWrites=true&w=majority&appName=Max78Cluster0

// Important Notes:
//1. npm init -y   to iniatilized node, -y agree (yes) to all 
//2. npm i express  to install express
//node backend/server.js to run the app

// function startServer() {} //porpoer function
// const startServer = () => {} //arrow function
// for automatic update installl "npm i nodemon -D"
// install express 'npm i express'
// npm install -g nodemon for global installation
//git source control

// -------------------------------------------------------------------------------------------------------------------
