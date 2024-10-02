import React from 'react';
import Counter from './Counter'; // Đảm bảo đường dẫn đúng

function App() {
  return (
    <div className="App">
      <h1>Bộ đếm số</h1>
      <Counter /> {/* Gọi component Counter */}
    </div>
  );
}

export default App;
