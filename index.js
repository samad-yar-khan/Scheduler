const express = require('express');
const port = 8000;
const app = express();

const arr = [1,2,3,4,5];

// app.use('/' , require('./routes'));

//set up the view engine
app.set("view engine" , "ejs");
app.set("views" , './views');



app.get('/' , module.exports.home = function(req,res){
    return res.render( "home" , {
        title:"TO DO APP",
        heading : "TO DO APP",
        nums : arr
    });
})

app.listen(port , function(err){
    if(err){

        console.log(`ERROR = ${err}`);

        return;

    }

    console.log(`Server up and running PORT : ${port}`);
});

