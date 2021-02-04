var inputFeild = document.querySelectorAll(".input-wrapper");
var taskList = document.querySelectorAll(".task-card");
var categoryList = document.querySelectorAll(".task-card-category");

let categoryColor = {
    "Work" : "#D82626" ,
    "School" : "#D99109 " ,
    "Personal" : "#0FA416 " ,
    "Cleaning" :"#13AA6E",
    "Other" : "#161176"
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



