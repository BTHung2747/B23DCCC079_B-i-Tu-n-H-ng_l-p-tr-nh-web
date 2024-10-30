// src/app.js
const express = require('express');
const bodyParser = require('body-parser');
const todosRouter = require('./routes/todos'); // Đảm bảo đường dẫn này đúng
const db = require('./configs/database'); // Đảm bảo đường dẫn này đúng

const app = express();
const PORT = 3000;

// Middleware để parse JSON body
app.use(bodyParser.json());

// Kết nối router vào ứng dụng
app.use('/todos', todosRouter);

// Lắng nghe kết nối
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

// Kết nối CSDL (nếu chưa được thực hiện ở nơi khác)
db.connect(err => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to MySQL database.');
});
