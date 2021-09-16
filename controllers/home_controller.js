const db = require('../configs/mongoose');
const Task  = require('../models/task');
let months = ["JAN" ,"FEB" ,"MAR","APR" ,"MAY" , "JUNE" , "JUL" , "SEPT" , "OCT" ,"NOV" , "DEC"];


module.exports.home = function(req , res){

    Task.find({}, function (err , tasks) {
        if(err){
            console.log("Error diplaying tasks" ,err);
            return;
        }else{
            return res.render( "home" , {
                title:"Scheduler",
                heading : "Scheduler",
                toDoList : tasks
            });
        }
    });
   

};