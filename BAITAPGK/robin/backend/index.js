//Entry point của ứng dụng
const express = require('express');
const bodyParser = require('body-parser');
const todoRoutes = require('./routes/todoRoutes');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors()); // Đảm bảo frontend có thể gọi API từ backend
app.use(bodyParser.json()); // Giúp parse dữ liệu JSON
app.use('/api', todoRoutes); // Sử dụng các route đã định nghĩa

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
