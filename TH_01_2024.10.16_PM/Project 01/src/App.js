import React, { useState } from 'react';
import './App.css';  
import ToDoList from './components/ToDoList';

function App() {
  const [tasks, setTasks] = useState([
    { id: '1', task: 'Học lập trình web với React', dueDate: 'Tomorrow' },
    { id: '2', task: 'Gửi email nộp bài tập về nhà', dueDate: 'Saturday' },
    { id: '3', task: 'Học từ vựng tiếng anh mỗi ngày', dueDate: 'Monday' },
    { id: '4', task: 'Viết luận môn Triết học', dueDate: 'Today' },
  ]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return (
    <div className="App">
      <ToDoList tasks={tasks} addTask={addTask} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
