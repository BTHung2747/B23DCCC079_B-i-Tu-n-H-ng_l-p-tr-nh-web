import React from 'react';
import './ToDoItem.css';

const ToDoItem = ({ title,description , dueDate, deleteTask }) => { 
  return (
    <div className="ToDoItem">
      <input type="checkbox" />
      <span>{title}</span> 
      <span>{description}</span>
      <span>{dueDate}</span>
      <button onClick={deleteTask} className="delete-button">Xóa</button>
    </div>
  );
};

export default ToDoItem