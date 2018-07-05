import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';
/* eslint-disable no-console */

// delete some things that

const port = 3000;
const app = express();

app.use(compression()); // usefull for local debugging purpose
app.use(express.static('dist'));

app.get('/users', function(req,res){
   
    res.json([
        {"id":1,"firstName":"Bob"},
        {"id":2,"firstName":"Tommy"},
        {"id":3,"firstName":"Tina"}
    ]);
});

app.get('/', function(req,res){
    res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(port, function(err){
    if(err){console.log(err);}
    else{open('http://localhost:' + port);}
});
