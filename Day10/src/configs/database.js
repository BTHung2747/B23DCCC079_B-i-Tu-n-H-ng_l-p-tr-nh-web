const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',        // Địa chỉ của cơ sở dữ liệu
    user: 'root',             // Tên người dùng
    password: 'Hung350132@', // Mật khẩu của bạn
    database: 'todolist_app'  // Tên cơ sở dữ liệu
});

db.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err.stack);
        return;
    }
    console.log('Connected to MySQL database.');
});

module.exports = db;
