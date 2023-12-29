// const fs = require('fs');
// const http = require('http');
const path = require('path');
const port = 8000;
var contactList = {
    name: "Dev",
    phone: "23441"
}
const db = require('./config/mongoose');
const ToDoList =  require('./model/todoList');
const express = require('express');
app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded());
app.use(express.static("assets"));
app.post('/create-task', function(req, res){
    // contactList.push({
    //     name : req.body.name,
    //     phone: req.body.phone
    // });
    ToDoList.create({
        description : req.body.description,
        category: req.body.category,
        dueDate : req.body.duedate
    }).then((newTask) =>{
        // if(err){
        //     console.log("error occured :", err);
        // }
        console.log(newTask);
        res.redirect("/");
    })
});

app.get('/delete-tasks/:id', function(req,res){
    console.log(req.params);
    if(req.params.id == 1)
        return res.redirect("/");
    else
    {
        let ids = req.params.id.split("&");
        for(id of ids){
            ToDoList.findByIdAndDelete(id).then((result) =>{
                console.log(result);
            }
            )
        }
        console.log(ids);
        return res.redirect("/");
    }
})
app.get('/', function(req, res){
    ToDoList.find({}).then(function(result) {
        return res.render("home", {title: "MyTODO App",
        todo_list : result});
    }
    )
//     Contact.find({}).then(function(result){
        
// });
});
app.listen(port, function(err){
    if(err)
        console.log("error running server " , err);
    console.log("server is running");
});
