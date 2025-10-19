document.addEventListener('DOMContentLoaded',()=>{
  const storedTasks = localStorage.getItem("tasks")
  const tasks = storedTasks ? JSON.parse(storedTasks):[]
  const taskList = document.getElementById("task-list")
  tasks.forEach(tasks => {
    const li = document.createElement("li")
    li.textContent = task
    taskList.appendChild(li)
  });
  
  
  const addButton = document.getElementById("add-task-btn")
  const taskInput =  document.getElementById("task-input")
  

  function addTask (){
    const taskText = taskInput.value.trim()
    if(taskText != ""){
      alert("Enter a task")
       }
    else{
      const li = document.createElement("li")
      li.textContent = taskText
      const removeBtn = document.createElement("button")
      removeBtn.textContent = "Remove"
      removeBtn.classList.add("remove-btn")
      removeBtn.onclick = function(){
        taskList.removeChild("li")
      }
      li.appendChild(removeBtn)
      taskList.appendChild(li)
      taskInput.value = ""

    }
      
  }
  addButton.addEventListener('click',addTask())
  taskInput.addEventListener('keypress',(event)=>{
    if (event.key == 'Enter'){
      addTask()
    }
    
  })
   document.addEventListener('DOMContentLoaded',()=>{
    addTask()
  })
})