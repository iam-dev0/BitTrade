const express=require('express');
const http=process.env.http|| 5000;
const path=require('path');
//const ejs=require('ejs');

var app=express();
app.set('view engine', 'ejs');
app.set("views", "views");
app.use(express.static(path.join(__dirname,'public')));

//body parser of express

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  //  ejs.compile();
// => Function
    res.render('pages/index');

    /*
 res.sendFile(__dirname+'\public\index.html');
 console.log(__dirname+'\public\index.html');
 res.end();*/
})

app.get('/ad', function (req, res) {
  //  ejs.compile();
// => Function
    res.render('pages/ad');

    /*
 res.sendFile(__dirname+'\public\index.html');
 console.log(__dirname+'\public\index.html');
 res.end();*/
})

app.get('/listitem', function (req, res) {
  //  ejs.compile();
// => Function
    res.render('pages/create-listing');

    /*
 res.sendFile(__dirname+'\public\index.html');
 console.log(__dirname+'\public\index.html');
 res.end();*/
})

app.post('/listitem', function (req, res) {

    //console.log(`${req.body}`);
    res.send(req.body);

 
 res.end();
})


app.listen(http,()=>console.log(`The server is running on Port ${http}`));