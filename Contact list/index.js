// const fs = require('fs');
// const http = require('http');
const path = require('path');
const port = 8000;

const db = require('./config/mongoose');
const Contact =  require('./model/contact');

const express = require('express');
var contactList;


app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded());
app.use(express.static("assets"));
app.post('/create-contact', function(req, res){
    // contactList.push({
    //     name : req.body.name,
    //     phone: req.body.phone
    // });
    Contact.create({
        name : req.body.name,
        phone: req.body.phone
    }).then((newContact) =>{
        // if(err){
        //     console.log("error occured :", err);
        // }
        console.log(newContact);
        res.redirect("/");
    })
})
app.get('/', function(req, res){
    Contact.find({}).then(function(result){
        return res.render("home", {title: "My Contact List",
        contact_list : result
    });
});
});
app.listen(port, function(err){
    if(err)
        console.log("error running server " , err);
    console.log("server is running");
});
