//var express = require('express');
import express from 'express';
import path from 'path';
import open from 'open';

import webpack from 'webpack';
import config from '../webpack.config.dev';
/* eslint-disable no-console */
const port = 3000; // it may not be available on machine
const app = express();
const compiler = webpack(config);

import wdm from 'webpack-dev-middleware';

app.use(wdm(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));
//requests the root and refences to it are handled by function(req,res)
//which sends index html
app.get('/',function(req,res){
    res.sendFile(path.join(__dirname,'../src/index.html'));
});

app.get('/users', function(req,res) {
    res.json([
        {"id": 1, "firstName": "Bob", "lastName":"Smith","email":"ob@gmail.com"},
        {"id": 2, "firstName": "Bob", "lastName":"Janas","email":"lewandowski@gmail.com"},
        {"id": 3, "firstName": "Bob", "lastName":"Lewandowski","email":"lewandowski@gmail.com"}
    ]);
});


//listen on the port, if error log to console
app.listen(port, function(err) {
    if(err) {
        console.log(err);
    }
    else {
        open('http://localhost:' + port);
    }
});
