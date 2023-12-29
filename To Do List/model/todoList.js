const mongoose = require('mongoose');
const todoListSchema = new mongoose.Schema({
    description : {
        type: String,
        required: true
    },
    category : {
        type: String,
        required: true
    },dueDate : {
        type: String,
        required: true
    }
});
const ToDoList = mongoose.model('ToDoList', todoListSchema);
module.exports = ToDoList;