import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import ToDoList from './components/ToDoList';

function App() {
  const [todos, setTodos] = useState([]);

  // Hàm lấy danh sách công việc từ API
  const fetchTodos = () => {
    axios.get('http://localhost:3000/api/todos')
      .then(response => setTodos(response.data))
      .catch(error => console.error("Lỗi khi tải dữ liệu:", error));
  };

  // Gọi API để lấy danh sách công việc khi ứng dụng khởi động
  useEffect(() => {
    fetchTodos();
  }, []);

  // Thêm công việc mới vào danh sách và API
  const addTask = (newTask) => {
    axios.post('http://localhost:3000/api/todos', newTask)
      .then(response => {
        if (response.status === 201) {
          setTodos([...todos, response.data]);
        }
      })
      .catch(error => console.error("Lỗi khi thêm công việc:", error));
  };

  // Xóa công việc từ danh sách và API
  const deleteTask = (taskId) => {
    axios.delete(`http://localhost:3000/api/todos/${taskId}`)
      .then(() => {
        setTodos(todos.filter(task => task.id !== taskId));
      })
      .catch(error => console.error("Lỗi khi xóa công việc:", error));
  };

  // Cập nhật công việc từ danh sách và API
  const updateTodo = (id, updatedData) => {
    axios.put(`http://localhost:3000/api/todos/${id}`, updatedData)
      .then(response => {
        setTodos(todos.map(todo => (todo.id === id ? response.data : todo)));
      })
      .catch(error => console.error("Lỗi khi cập nhật dữ liệu:", error));
  };

  return (
    <div className="App">
      <ToDoList tasks={todos} addTask={addTask} deleteTask={deleteTask} updateTodo={updateTodo} />
    </div>
  );
}

export default App;
