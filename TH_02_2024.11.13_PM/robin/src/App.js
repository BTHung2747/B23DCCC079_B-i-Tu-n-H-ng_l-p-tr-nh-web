import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import ToDoList from './components/ToDoList';

function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Hàm lấy danh sách công việc từ API
  const fetchTodos = () => {
    setLoading(true);  // Đặt trạng thái loading là true khi đang tải dữ liệu
    axios.get('http://localhost:3000/api/todos')
      .then(response => {
        setTodos(response.data);
        setLoading(false);  // Đặt trạng thái loading là false khi tải dữ liệu thành công
      })
      .catch(error => {
        setError("Lỗi khi tải dữ liệu.");
        setLoading(false);  // Đặt trạng thái loading là false nếu có lỗi
      });
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
          setTodos(prevTodos => [...prevTodos, response.data]);  // Sử dụng prevTodos để cập nhật state chính xác hơn
        }
      })
      .catch(error => {
        setError("Lỗi khi thêm công việc.");
        console.error("Lỗi khi thêm công việc:", error);
      });
  };

  // Xóa công việc từ danh sách và API
  const deleteTask = (taskId) => {
    axios.delete(`http://localhost:3000/api/todos/${taskId}`)
      .then(() => {
        setTodos(prevTodos => prevTodos.filter(task => task.id !== taskId));  // Sử dụng prevTodos để tránh các vấn đề đồng bộ
      })
      .catch(error => {
        setError("Lỗi khi xóa công việc.");
        console.error("Lỗi khi xóa công việc:", error);
      });
  };

  // Cập nhật công việc trong danh sách và API
  const updateTodo = (id, updatedData) => {
    axios.put(`http://localhost:3000/api/todos/${id}`, updatedData)
      .then(response => {
        setTodos(prevTodos => prevTodos.map(todo => (todo.id === id ? response.data : todo)));  // Cập nhật chính xác công việc đã sửa
      })
      .catch(error => {
        setError("Lỗi khi cập nhật dữ liệu.");
        console.error("Lỗi khi cập nhật dữ liệu:", error);
      });
  };

  return (
    <div className="App">
     
      {loading && <p>Đang tải dữ liệu...</p>}  {/* Hiển thị thông báo khi đang tải dữ liệu */}
      {error && <p style={{ color: 'red' }}>{error}</p>}  {/* Hiển thị thông báo lỗi nếu có lỗi */}

      <ToDoList tasks={todos} addTask={addTask} deleteTask={deleteTask} updateTodo={updateTodo} />
    </div>
  );
}

export default App;
