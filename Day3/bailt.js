function Submit() {
    let name = document.getElementById("name").value;
    let masv = document.getElementById("msv").value;
    let quequan = document.getElementById("qq").value;
    let  ngaysinh = document.getElementById("datemin").value;
    let gioitinh ="" ;
    if(document.getElementById("boy").checked){
        gioitinh = document.getElementById("boy").value;
    }
    else if (document.getElementById("girl").checked){
        gioitinh = document.getElementById("girl").value;
    }
    
    if(name && masv && quequan && ngaysinh && gioitinh){
        let students = localStorage.getItem('students') ? JSON.parse(localStorage.getItem('students')) :[];
        students.push({
            name: name,
            masv: masv,
            quequan: quequan,
            ngaysinh: ngaysinh ,
            gioitinh: gioitinh ,

        });
       localStorage.setItem('students', JSON.stringify(students));
       this.LLstoregate();
           
       
    }
}
function LLstoregate(){
    let students = localStorage.getItem('students') ? JSON.parse(localStorage.getItem('students')) :[];
    
    if(students.length === 0){
        document.getElementById("danhsachsv").style.display = 'none';
        return false;
        
    }
    document.getElementById("danhsachsv").style.display = 'block';
    let tablecontent=`
    <tr>
            <td style="width: 5%;">STT</td>
            <td>Họ Và Tên</td>
            <td>Mã Sinh Viên</td>
            <td>Quê Quán</td>
            <td>Ngày Sinh</td>
            <td>Giới Tính</td>
        </tr>`;
        students.forEach((student, index)=>{
            index++;
            let studentId = index;
            tablecontent +=`
            <tr>
            <td style="width: 5%;">${index}</td></td>
            <td>${student.name}</td>
            <td>${student.masv}</td>
            <td>${student.quequan}</td>
            <td>${student.ngaysinh}</td>
            <td>${student.gioitinh}</td>
            <td>
               <a href="#">Edit</a>|<a onclick="Deletesv(${studentId})" href="#">Delete</a></td>
        </tr>`;
        })
        document.getElementById('list-sv').innerHTML=tablecontent;
    

}
function Deletesv(Id){
    let students = localStorage.getItem('students') ? JSON.parse(localStorage.getItem('students')) :[];
    students.splice(Id,1);
    localStorage.setItem('students', JSON.stringify(students));
    LLstoregate()
    
}