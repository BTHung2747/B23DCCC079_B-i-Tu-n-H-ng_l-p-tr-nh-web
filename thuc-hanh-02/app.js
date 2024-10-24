const express= require('express')
const fs = require('fs');
const app =express();
const PORT = 4000;



app.use(express.json());  // Để xử lý dữ liệu JSON trong body của request


const filevideo ='/video.txt';
// GET
app.get('/', (req, res) => {
  res.send('Trang chủ của API videos');
});

app.get('/api/videos', (req,res) =>{
    const content = fs.readdirSync(filevideo, 'utf8');
    res.send(content);
});
// post
app.post('/api/videos', (req,res)  =>{
    const newContent= req.body.content;
    fs.writeFileSync(filevideo,newContent);
    res.send('đã thêm nội dung mới ');
});
  //put
app.put('/api/video',(req,res)=> {
    const updateContent = req.body.content;
    fs.writeFileSync(filevideo,updateContent);
    res.send('đã cập nhật')

});
//deleter
app.delete('/api/videos', (req, res) => {
    fs.writeFileSync(filePath, '');
    res.send('Đã xóa nội dung video.txt');
  });
// Khởi động server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });