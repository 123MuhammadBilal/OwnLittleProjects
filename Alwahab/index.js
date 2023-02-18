// here i am importing EXPRESS
const express = require('express')
// here i am importing Path
const path = require("path")

//using express as const "app"
const app = express();

//path.join used to concatenate path segments into a single path string/here its concating to index.js and public path
// __dirname is use to get currently executing JavaScript path
// "public" is subdirectory
const publicPath = path.join(__dirname,"public")
//In a Node.js web application, app.set('view engine', 'ejs') is used to configure the web application to use the EJS (Embedded JavaScript) templating engine to render dynamic HTML pages
app.set('view engine','ejs');

// static use of website
app.use(express.static(publicPath))

app.get('/',(_,resp)=>{
    resp.render('home')
});
app.get('/profile',(_,resp)=>{
    resp.render('about')
});

app.get('/about',(_,resp)=>{
    resp.render('about')
});
app.get('/help',(_,resp)=>{
    resp.render('help')
});
app.get('/home',(_,resp)=>{
    resp.render('home')
});
app.get('/login',(_,resp)=>{
    resp.render('login')
});
app.get('/profile',(_,resp)=>{
    resp.render('profile')
});
app.get('/Contact',(_,resp)=>{
    resp.render('contact')
});
app.get('*',(_,resp)=>{
    resp.sendFile(`${publicPath}/404.html`)
});

app.listen(3333);
