const express=require('express');
const app=express();


app.use(express.json());

const students=[];

class Student{
    'name';
    'grade';
    showDetails(){
        console.log(`Name:${this.name},Grade:${this.grade}`)
    }
}

app.post('/students',(req,res)=>{
    const newStudent=new Student();
    newStudent.name=req.body.name;
    newStudent.grade=req.body.grade;

    students.push(newStudent);
    res.status(201).json(newStudent);
     console.log(newStudent.showDetails()) 
})

app.get('/students',(req,res)=>{

res.status(201).json(students);
})

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
})