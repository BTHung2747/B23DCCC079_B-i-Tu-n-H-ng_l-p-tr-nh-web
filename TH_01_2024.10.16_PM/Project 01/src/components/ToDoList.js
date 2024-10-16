import React, { useState } from 'react';
import './ToDoList.css';  
import ToDoItem from './ToDoItem';

const ToDoList = ({ tasks, addTask, deleteTask }) => {
  const [newTask, setNewTask] = useState({ task: '', dueDate: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTask({ ...newTask, [name]: value });
  };

  const handleAddTask = () => {
    if (newTask.task && newTask.dueDate) {
      addTask(newTask);
      setNewTask({ task: '', dueDate: '' });
    }
  };

  return (
    <div className="ToDoList">
      <h1>My Work</h1>
      {tasks.map((item, index) => (
        <ToDoItem 
          key={index} 
          task={item.task} 
          dueDate={item.dueDate} 
          deleteTask={() => deleteTask(item.id)}  // Thêm hàm xóa
        />
      ))}
      <div>
        <input
          type="text"
          name="task"
          placeholder="New task"
          value={newTask.task}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="dueDate"
          placeholder="Due date"
          value={newTask.dueDate}
          onChange={handleInputChange}
        />
        <button onClick={handleAddTask}>+ Add Task</button>
      </div>
    </div>
  );
};

export default ToDoList;
