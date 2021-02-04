const mongoose = require ('mongoose');

mongoose.connect("mongodb://localhost/to_do_list_db" ,{ useNewUrlParser: true , useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error' , console.error.bind(console, "ERROR CONNECTING TO DB"));

db.once('open' ,  function(){
    console.log('SUCCESSFULLY CONNECTED TO THE DB !');
});