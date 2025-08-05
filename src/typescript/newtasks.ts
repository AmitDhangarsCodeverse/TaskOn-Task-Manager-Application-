// Element Quering 
 const taskTitle = document.body.querySelector(".tasktitle") as HTMLElement;
 const taskDay = document.body.querySelectorAll(".day") as NodeListOf<Element>;
 const taskTime = document.body.querySelectorAll(".time")as NodeListOf<Element>;
 const taskpriorty = document.body.querySelector(".taskpriorty") as HTMLElement;
 const tasktags = document.body.querySelector(".tasktags") as HTMLElement;
 const taskAssignee = document.body.querySelector(".taskassignee") as HTMLElement;
 const taskDescription = document.body.querySelector(".taskdescription") as HTMLElement;
 const createTaskbtn = document.body.querySelector("button") as HTMLButtonElement;
 const cancelAddtask = document.body.querySelector(".ri-close-line") as HTMLElement;
 const Taskform = document.body.querySelector("form") as HTMLFormElement;
 export const addTaskComponent = document.body.querySelector(".newtask-container") as HTMLElement;

// Interfaces
interface Itaskform{  
  tasktitle:string;
  taskday?:string;
  tasktime?:string;
  tasktags:string;
  taskprioriry:string;
  taskassignee:string;
  taskdes:string;
}
// Object
 let taskForm:Itaskform={
  tasktitle:"",
  taskday:"",
  tasktime:"",
  tasktags:"",
  taskprioriry:"",
  taskassignee:"",
  taskdes:"",
 }; 

// signatures
 let handleTaskchange : (e:Event) => void ;
 let handleTasksubmit : (data:Itaskform) => void ;
 let handleTaskValidation :(validData:Itaskform) => number;

 // Functions
 handleTaskValidation = (validData:Itaskform) : number => {
   if(validData?.tasktitle?.trim() === ""){
     taskTitle.style.border = "1px solid red";
    }
   if (validData?.tasktitle?.trim()){
     taskTitle.style.border = "0px solid red";
   }
   if(validData?.taskday?.trim()===""){
     taskDay[0].style.border = "1px solid red";
   }
   if(validData?.taskday?.trim()){
     taskDay[0].style.border = "0px solid red";
   }
   if(validData?.tasktime?.trim()===""){
     taskTime[0].style.border = "1px solid red";
   }
   if(validData?.tasktime?.trim()){
      taskTime[0].style.border = "0px solid red";
   }
   if(validData?.taskprioriry?.trim()===""){
     taskpriorty.style.border = "1px solid red";
   }
   if(validData?.taskprioriry?.trim()){
     taskpriorty.style.border = "0px solid red";
   }
   if(validData?.tasktags?.trim()===""){
     tasktags.style.border = "1px solid red";
   }
   if(validData?.tasktags?.trim()){
     tasktags.style.border = "0px solid red";
   }
   if(validData?.taskassignee?.trim()===""){
     taskAssignee.style.border = "1px solid red";
   }
   if(validData?.taskassignee?.trim()){
     taskAssignee.style.border = "0px solid red";
   }
   if(validData?.taskdes?.trim()===""){
     taskDescription.style.border = "1px solid red";
   }
   if(validData?.taskdes?.trim()){
     taskDescription.style.border = "0px solid red";
   }
   if(validData.tasktitle && validData.taskday && validData.tasktime && validData.taskprioriry && validData.tasktags && validData.taskassignee && validData.taskdes){
    return 1;
   }
   
 }

 handleTaskchange = (e:Event) => {
  const {name,value} = e.target as EventTarget;
  taskForm = {...taskForm,[name]:value};
 }
  
handleTasksubmit=(data:Itaskform)=>{
localStorage.setItem("tasks",JSON.stringify(data));
taskTitle.value = "";
taskDay.innerHTML = "";
taskTime.innerHTML = "";
taskpriorty.value = "";
taskAssignee.value = "";
tasktags.value = "";
taskDescription.value = "";
 }
 //Event Listeners
 taskTitle.addEventListener("change",handleTaskchange);
 taskpriorty.addEventListener("change",handleTaskchange);
 tasktags.addEventListener("change",handleTaskchange);
 taskAssignee.addEventListener("change",handleTaskchange);
 taskDescription.addEventListener("change",handleTaskchange);
 createTaskbtn.addEventListener("click",Taskform.submit);
 Taskform.addEventListener("submit",(e)=>{
    e.preventDefault();
    const valid = handleTaskValidation(taskForm);
    if(valid){
      handleTasksubmit(taskForm);
    }
 })
cancelAddtask.addEventListener("click",()=>{
  window.document.body.removeChild(addTaskComponent);
})
//  Iterating Day and time
taskDay.forEach((day)=>{
  day.addEventListener("click",()=>{
    taskForm.taskday = day.innerHTML; 
  })
});

taskTime.forEach((time)=>{
  time.addEventListener("click",()=>{
    taskForm.tasktime = time.innerHTML; 
  })
})
