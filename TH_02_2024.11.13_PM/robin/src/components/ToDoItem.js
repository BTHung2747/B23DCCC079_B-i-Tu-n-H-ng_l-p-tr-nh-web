import React, { useState } from 'react';
import './ToDoItem.css';

const ToDoItem = ({ title, description, dueDate, deleteTask, updateTodo, id }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTask, setUpdatedTask] = useState({
    title: title,
    description: description,
    dueDate: dueDate
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedTask({ ...updatedTask, [name]: value });
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    updateTodo(id, updatedTask);
    setIsEditing(false);
  };

  const handleCancelClick = () => {
    setUpdatedTask({ title, description, dueDate });
    setIsEditing(false);
  };

  return (
    <div className="ToDoItem">
      <input type="checkbox" />
      
      {/* Khi ở chế độ chỉnh sửa, hiển thị ô nhập liệu */}
      {isEditing ? (
        <>
          <input
            type="text"
            name="title"
            value={updatedTask.title}
            onChange={handleInputChange}
            placeholder="Title"
          />
          <input
            type="text"
            name="description"
            value={updatedTask.description}
            onChange={handleInputChange}
            placeholder="Description"
          />
          <input
            type="date"
            name="dueDate"
            value={updatedTask.dueDate}
            onChange={handleInputChange}
          />
        </>
      ) : (
        <>
          <span>{updatedTask.title}</span>
          <span>{updatedTask.description}</span>
          <span>{updatedTask.dueDate}</span>
        </>
      )}

      <div className="button-group">
        {isEditing ? (
          <>
            <button onClick={handleSaveClick} className="save-button">Lưu</button>
            <button onClick={handleCancelClick} className="cancel-button">Hủy</button>
          </>
        ) : (
          <>
            <button onClick={handleEditClick} className="edit-button">Sửa</button>
            <button onClick={deleteTask} className="delete-button">Xóa</button>
          </>
        )}
      </div>
    </div>
  );
};

export default ToDoItem;
