const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    desc : {
        type : String,
        required : true
    } ,
    category : {
        type : String,
        required : true
    },
    date: {
        day :{
            type:String,
    
        },
        month:{
            type:String,
          
        },
        year :{
            type:String,
         
        }
    },
    isComplete : {
        type : Boolean,
        required : true
    }

});

//now we turn then scema into a model

const Task = mongoose.model("Task" , taskSchema);

module.exports  =  Task;