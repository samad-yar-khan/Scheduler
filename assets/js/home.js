var inputFeild = document.querySelectorAll(".input-wrapper");
var taskList = document.querySelectorAll(".task-card");
var categoryList = document.querySelectorAll(".task-card-category");

let categoryColor = {
    "Work" : "blue" ,
    "School" : "green" ,
    "Personal" : "gray" ,
    "Cleaning" :"cyan",
    "Other" : "orange"
} ;

//add color to whichevr input area is cicked
for(let i = 0 ; i < inputFeild.length ; i++){
    inputFeild[i].addEventListener('click' , function(event){

        console.log(inputFeild[i]);
       inputFeild[i].classList.add('focus');
        
       for(let j = 0 ; j < inputFeild.length  ; j++){
            if(i!=j){
                inputFeild[j].classList.remove('focus');
            }
        }

    });
}

// for(let i = 0 ; i < taskList.length ; i++){
//     taskList[i].addEventListener('click' , function(event){

      
//         console.log(taskList[i]);
//         taskList[i].classList.toggle('delete-highlight');
//         event.stopPropagation();
        

//     });
// }

//color the tasks

for(item of categoryList ){
    var color = item.innerText;
    var key ="";
    key+=color;

    item.style.backgroundColor = categoryColor[key] ; 

}



