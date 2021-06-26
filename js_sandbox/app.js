const form = document.querySelector('form');

// localStorage.clear();

form.addEventListener('submit', addItem);

function addItem(e){
    e.preventDefault();

    const task = document.querySelector('#task').value;

    let tasks;

    if(localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));
    alert('Task saved');
}

const tasks = JSON.parse(localStorage.getItem('tasks'));

tasks.forEach(function(task){
    console.log(task);
})