import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack'
import config from '../webpack.config.dev'
import wdm from 'webpack-dev-middleware';

/*eslint-disable no-console*/

const port = 3000;
const app = express();
const compiler = webpack(config)



app.use(wdm(compiler,
    {
        noInfo: true,
        publicPath: config.output.publicPath
    }
)
);



app.get('/', function(req, res){
 
    res.sendFile(path.join(__dirname, '../src/index.html'));

});

app.get('/users', function(req, res){

    res.json([
        {"id": 1, "firstName": "Imie1", "lastName": "Nazwisko1", "email": "mail1"},
        {"id": 2, "firstName": "Imie2", "lastName": "Nazwisko2", "email": "mail2"},
        {"id": 3, "firstName": "Imie3", "lastName": "Nazwisko3", "email": "mail3"}

    ]);

})

app.listen(port, function(err){

    if(err){
        console.log(err);
    }else{
        open('http://localhost:' + port);
    }

})
