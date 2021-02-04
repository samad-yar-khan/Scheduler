
let months = ["JAN" ,"FEB" ,"MAR","APR" ,"MAY" , "JUNE" , "JUL" , "SEPT" , "OCT" ,"NOV" , "DEC"];


let toDoList = [
    {   
        "id" : 1,
        "desc" : "Workout !",
        "category" : "Personal",
        "date" : {
            "day":"2",
            "month":months[0],
            "year": "2021"
        }
    },
    {
        "id" : 2,
        "desc" : "Complete homework",
        "category" : "School",
        "date" : {
            "day":"2",
            "month":months[1],
            "year":"2021"
        }
    },
    {
        "id" : 3,
        "desc" : "Clean the house",
        "category" : "Personal",
        "date" : {
            "day":"2",
            "month":months[0],
            "year":"1999"
        }
    }];


module.exports.home = function(req , res){

    return res.render( "home" , {
        title:"TO DO APP",
        heading : "Task Desk",
        toDoList : toDoList
    });

};