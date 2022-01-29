const express=require('express')
const app= express();
var port =5000;
 
app.use(express.static('public'))

app.get('/home',(req,res)=>{
res.sendFile(__dirname+"/home.html")
})

app.get('/process',(req,res)=>
{
 var name=req.query.txt1;
 var age=req.query.txt2;
 var msg="my name is "+name+ " and age is "+age+"  ";
 
 res.send(msg);
})

app.get('/contact',(req,res)=>{
    res.sendFile(__dirname+"/contact.html")
    })
app.get('/about',(req,res)=>{
    res.sendFile(__dirname+"/about.html")
    })


app.listen(port,()=>{console.log(
    "serveer started ")})