//This will connect our project to MongoDB database
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

module.exports = connectDB;


// old code

// const connectDB = async () => {
//     try {
//         const connect = await mongoose.connect(process.env.MONGO_URI) 
//             console.log(`MongoDB connected`) 
//     } catch (error) {
//         console.log(error)
//         process.exit(1)
//     } 
// };


// Theis will connect our project  to MongoDB database

// const mongoose = require ('mongoose');

// const connectDB = async () => {
//     try {
//         const connect = await mongoose.connect(process.env.MONGO_URI) 
//             console.log(`MongoDB Connected: ${connect.connection.host}`)
//     } catch(error) {
//         console.log(error)
//         process.exit(1)
//     }
// };

// module.exports = connectDB

// Install mongoose: npm i mongoose

/* 
Step 1: Install dependencies from package.json.
Step 2: Set up environment variables using .env.
Step 3: Ignore unnecessary files using .gitignore.
Step 4: Connect to the database via connectDB.js.
Step 5: Define the data structure in taskModel.js.
Step 6: Create logic for handling tasks in taskController.js.
Step 7: Map API routes in taskRoute.js.
Step 8: Start the backend using server.js.
*/
