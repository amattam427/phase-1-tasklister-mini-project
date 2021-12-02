document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const taskForm =  document.querySelector('#create-task-form');
  //insert value into DOM
  const taskList = document.querySelector('#tasks')
  const taskData = document.querySelector('new-task-description');

  taskForm.addEventListener('submit', (e)=> {
    const task = taskData.value;
    e.preventDefault();
    const li = document.createElement('li');
    li.innerText = task;
    const button = document.createElement('button');
    button.innerText = 'X';
    li.appendChild(button);
    taskList.appendChild(li);
    taskData.value = '';
    button.addEventListener('click', (e) => {
      e.target.parentNode.remove();
    });
  });
});
  
  
  
  
  
  
  
  
  
  