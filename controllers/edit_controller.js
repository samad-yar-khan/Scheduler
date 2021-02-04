const express = require('express');
const db = require('../configs/mongoose');
const Contact  = require('../models/task');
let months = ["JAN" ,"FEB" ,"MAR","APR" ,"MAY" , "JUNE" , "JUL" , "SEPT" , "OCT" ,"NOV" , "DEC"];

function getDate(theDate){
    let year = theDate.substr(0,4);
    let month = theDate.substr(5,2);
    let day = theDate.substr(8,2);

    if(month[0] == '0'){
        month  = month.substr(1);
    }

    let wholeDate = {
        Y : year,
        M : month ,
        D : day
    }
    return wholeDate
}

module.exports.addTask = function(req , res){

    let descr = req.body['task-description'];
    console.log(descr);
    let cat = req.body.category;
    let wholeDate = getDate(req.body['due-date']);
    let D = wholeDate["D"];
    let M = months[wholeDate["M"] - 1];
   
    let  Y = wholeDate["Y"];
    let dateOBJ = {
        day : D,
        month : M,
        year : Y
    }

    Contact.create({
        desc : descr ,
        category : cat ,
        date : dateOBJ
        
    } , function(err , newTASK){
        if(err){
            console.log(err);
            console.log("ERROR ADDING TASK ");
            return;
        }
        console.log("ADDED TASK ****" , newTASK)
    })

    return res.redirect('/');

}

module.exports.deleteTask = function(req , res){

    console.log("del");
    return res.redirect('/');

}