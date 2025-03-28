const express = require('express');
const router = express.Router();
const { 
    createTask, 
    getTasks, 
    getTask,
    deleteTask, 
    updateTask
} = require('../controllers/taskController');

// New routes
router.route("/").get(getTasks).post(createTask); // Fetch all tasks & create task
router.route("/:id").get(getTask).delete(deleteTask).put(updateTask); // Handle single task

module.exports = router;

// router.route( "/").get(getTask).post(createTask);
// router.route("/):id").get(getTask).delete(deleteTask).put(updateTask);


// old routes
// router.post('', createTask); // Create Task route
// router.get('', getTasks); // Get all Tasks
// // router.get('/:id', getTask); // Get a single Task
// router.delete('/:id', deleteTask); // Delete Task
// router.put('/:id', updateTask); // Update Task

// first method
// router.post('/api/tasks', createTask); // Create Task route
// router.get('/api/tasks', getTasks); // Get all Tasks
// router.get('/api/tasks/:id', getTask); // Get a single Task
// router.delete('/api/tasks/:id', deleteTask); // Delete Task
// router.put('/api/tasks/:id', updateTask); // Update Task
// // router.patch('/api/tasks/:id', updateTask); // Update Task
