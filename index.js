const express = require('express');
const port = 8000;
const app = express();



app.listen(port , function(err){
    if(err){

        console.log(`ERROR = ${err}`);

        return;

    }

    console.log(`Server up and running PORT : ${port}`);
});

