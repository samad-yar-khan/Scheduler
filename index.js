const express = require('express');
const port = 8000;
const app = express();

const arr = [1,2,3,4,5];


app.use(express.urlencoded({extended: true}));

//set up the view engine
app.set("view engine" , "ejs");
app.set("views" , './views');


app.use(express.static('assets'));

app.use('/' , require('./routes'));


app.listen(port , function(err){
    if(err){

        console.log(`ERROR = ${err}`);

        return;

    }

    console.log(`Server up and running PORT : ${port}`);
});

