// const fs = require('fs');
// const http = require('http');
const path = require('path');
const port = 443;

const db = require('./config/mongoose');
const User =  require('./model/user');
const express = require('express');
app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded());
app.use(express.static("assets"));
app.post('/create-user', function(req, res){
    User.create({
        email: req.body.email,
        password: req.body.password,
        name: req.body.name
    }).then((newUser) => {
        console.log(newUser);
        res.redirect('back');
    }

    )
})
app.post('/login-user', function(req, res){
    User.create({
        email: req.body.email,
        password: req.body.password,
        name: req.body.name
    }).then((newUser) => {
        console.log(newUser);
        res.redirect('back');
    }

    )
})
app.get('/', function(req, res){
    User.find({}).then(function(result) {
        return res.render("home", {title: "User Sign In"});
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
