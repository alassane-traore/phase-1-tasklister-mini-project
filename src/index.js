document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("DOMContentLoaded", () => {
    document.addEventListener("submit", function(event){
      event.preventDefault();
      const task = document.querySelector("input[type = 'text']");
      let listTask = document.createElement("li");
      let taskText = document.createTextNode(task);
      listTask.appendChild(taskText);                           
      document.getElementById('tasks').appendChild(listTask);
  
    });
    let form = document.getElementById("create-task-form");
    form.addEventListener("submit", addTask);
  });
  
  function addTask(e){
    e.preventDefault();
    const task = e.target.querySelector('#new-task-description').value;
    let listTask = document.createElement("li");
    listTask.innerText = task;                     
    document.getElementById('tasks').appendChild(listTask);
    e.target.querySelector('#new-task-description').value = '';
  }
});
