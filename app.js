const express=require('express');
const date=require(__dirname + "/date.js");
console.log(date.getDate());
console.log(date.getDay());
const app=express();
let items=["Buy Food","Cook Food","Eat Food"];
let workItem=[];
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static("public"));
app.get("/",function(req,res){
  const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const d = new Date();
const option={
  weekday: 'long',
  month: 'long',
  day: 'numeric'
};
let day=d.toLocaleString('en-US',option);
 res.render('list', {KindOfDay:day , newListItems:items});
})
app.get("/work",function(req,res){
   res.render('list', {KindOfDay:'WorkList' , newListItems:workItem});
})
app.get("/about",function(req,res){
  res.render('about');
})
app.post("/work",function(req,res){
  workItem.push(req.body.newList);
  res.redirect("/work");
})
app.post("/",function(req,res){
  if(req.body.List==='WorkList')
  {
    workItem.push(req.body.newList);
    res.redirect("/work");
  }
  else{
    let item=req.body.newList;
    items.push(item);
    res.redirect("/");
  }
})
app.listen(3000,function(){
  console.log("Server is running on port 3000.");
})
