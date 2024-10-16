import React from 'react';
import './ToDoItem.css';  

const ToDoItem = ({ task, dueDate, deleteTask }) => {
  return (
    <div className="ToDoItem">
      <input type="checkbox" />
      <span>{task}</span>
      <span>{dueDate}</span>
      <but  onClick={deleteTask} className="delete-button">Xóa</but> {/* Nút xóa */}
    </div>
  );
};

export default ToDoItem;
