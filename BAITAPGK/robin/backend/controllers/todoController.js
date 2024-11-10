// # # Logic điều khiển cho To-do List
const Todo = require('../models/todo.js');

exports.getAllTodos = (req, res) => {
    Todo.getAll((err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(200).json(results);
    });
};

exports.createTodo = (req, res) => {
    const { title, description, due_date } = req.body;
    if (!title) {
        return res.status(400).json({ error: 'Title is required' });
    }

    Todo.create(title, description, due_date, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ message: 'Todo created successfully', id: result.insertId });
    });
};

exports.updateTodo = (req, res) => {
    const { id } = req.params;
    const { title, description, due_date, completed } = req.body;
    if (!title) {
        return res.status(400).json({ error: 'Title is required' });
    }

    Todo.update(id, title, description, due_date, completed, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(200).json({ message: 'Todo updated successfully' });
    });
};

exports.deleteTodo = (req, res) => {
    const { id } = req.params;
    Todo.delete(id, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(200).json({ message: 'Todo deleted successfully' });
    });
};

exports.getTodoById = (req, res) => {
    const { id } = req.params;
    Todo.getById(id, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        if (result.length === 0) return res.status(404).json({ message: 'Todo not found' });
        res.status(200).json(result[0]);
    });
};
