import React, { useState } from 'react';
import './ToDoList.css';
import ToDoItem from './ToDoItem';

const ToDoList = ({ tasks, addTask, deleteTask, updateTodo }) => {
  const [newTask, setNewTask] = useState({ title: '', description: '', dueDate: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTask({ ...newTask, [name]: value });
  };

  const handleAddTask = () => {
    if (newTask.title && newTask.dueDate && newTask.description) {
      addTask(newTask);
      setNewTask({ title: '', description: '', dueDate: '' });
    } else {
      alert("Vui lòng điền đầy đủ thông tin.");
    }
  };

  return (
    <div className="ToDoList">
      <h1>Danh Sách Công Việc</h1>
      {tasks.length === 0 ? (
        <p>Không có công việc nào. Hãy thêm công việc mới!</p>
      ) : (
        tasks.map((item) => (
          <ToDoItem 
            key={item.id} 
            id={item.id} 
            title={item.title} 
            description={item.description}  
            dueDate={item.dueDate} 
            deleteTask={() => deleteTask(item.id)} 
            updateTodo={updateTodo}  // Chuyển hàm updateTodo xuống ToDoItem
          />
        ))
      )}
      
      <div>
        <input
          type="text"
          name="title"
          placeholder="Tên công việc"
          value={newTask.title}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="description"
          placeholder="Mô tả công việc"
          value={newTask.description}  
          onChange={handleInputChange}
        />
        <input
          type="date"
          name="dueDate"
          value={newTask.dueDate}
          onChange={handleInputChange}
        />
        <button onClick={handleAddTask}>+ Thêm Công Việc</button>
      </div>
    </div>
  );
};

export default ToDoList;
