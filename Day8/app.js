const express = require('express');
const app = express();
const PORT = 2000;
app.use(express.json());

let tasks = [
  { id: 1, task: 'thu 2' },
  { id: 2, task: 'thu 3' }
];

// Lấy danh sách công việc
app.get('/api/tasks', (req, res) => {
  res.json(tasks);
});

// Thêm mới công việc
app.post('/api/tasks', (req, res) => {
  const newTask = req.body;
  tasks.push(newTask); // Thêm công việc mới vào danh sách
  res.status(201).json({ message: 'Công việc mới đã được tạo', task: newTask });
});

// Xóa công việc theo ID
app.delete('/api/tasks/:id', (req, res) => {
  const taskId = parseInt(req.params.id);
  const taskIndex = tasks.findIndex(t => t.id === taskId);
  
  if (taskIndex !== -1) {
    tasks.splice(taskIndex, 1); // Xóa công việc khỏi danh sách
    res.json({ message: `Công việc có ID ${taskId} đã bị xóa` });
  } else {
    res.status(404).json({ message: `Không tìm thấy công việc với ID ${taskId}` });
  }
});

// Khởi động server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
