
const mongoose = require('mongoose'); // import mongoose


const taskSchema = new mongoose.Schema(
    {
        name: {
        type: String,
        required: [true, 'please add a task'],
    },
    completed: {
        type: Boolean,
        required: true,
        default: false,
    },


},
{
    timestamps: true, //automatically adds createdAt and updated fields

}
);

const Task = mongoose.model('Task', taskSchema);  //export task module

module.exports = Task;


// const mongoose = require('mongoose'); // Import mongoose

// const taskSchema = new mongoose.Schema(
//     {
//         name: {
//             type: String,
//             required: [true, 'Please add a name'],
//         },
//         age: {
//             type: Number,
//             required: [true, 'Please add an age'],
//         },
//         gender: {
//             type: String,
//             enum: ['Male', 'Female', 'Other'], // Restricts values to these options
//             required: [true, 'Please specify gender'],
//         },
//         education: {
//             type: String,
//             required: [true, 'Please add education level'],
//         },
//         homeAddress: {
//             type: String,
//             required: [true, 'Please add home address'],
//         },
//         telephone: {
//             type: String,
//             required: [true, 'Please add a telephone number'],
//             match: [/^\d{10,15}$/, 'Please enter a valid telephone number'], // Ensures valid phone format
//         },
//         completed: {
//             type: Boolean,
//             required: true,
//             default: false,
//         }
//     },
//     {
//         timestamps: true, // Automatically adds createdAt and updatedAt fields
//     }
// );

// const Task = mongoose.model('Task', taskSchema); // Export Task model

// module.exports = Task;
