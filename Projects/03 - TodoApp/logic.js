let textField = document.getElementById('todo_text');
let submit = document.getElementById('add_todo');
let place = document.getElementById('tasks');
let tasks = document.getElementById('pending-task');
let clearAll = document.getElementById('clearAll');
let nodeCount = 0;
let todoItems = []

function adder(localValue) {
    let value;
    if(typeof localValue != 'object'){
        value = localValue;
        console.log("value added from local storage")
    } else {
        value = textField.value
    }
    
    if(value != "") {
        todoItems.push(value)
        let taskDiv = document.createElement('div');
        taskDiv.className = "todo_task"

        let taskP = document.createElement('p');
        taskP.className = 'task_dis';
        taskP.innerHTML = value;

        setLocal(todoItems)

        textField.value = ""

        let dlt = document.createElement('i');
        dlt.className = 'dlt_todo fas fa-trash';
        dlt.addEventListener('click', deleteTodo);
        
        let edit = document.createElement('i');
        edit.className = 'edit_todo fas fa-pen-square';
        edit.addEventListener('click', editor);

        taskDiv.appendChild(taskP)
        taskDiv.appendChild(edit)
        taskDiv.appendChild(dlt)
        place.appendChild(taskDiv)

        addCount(++nodeCount)
    }
    
}
function deleteTodo(e) {
    place.removeChild(this.parentNode || e.parentNode)
    console.log('Deleted');

    for (let i = 0; i < todoItems.length; i++) {
        if(this.parentNode === undefined) {
            if (todoItems[i] === e.parentNode.childNodes[0].innerHTML) {
                todoItems.splice(i,1);
                console.log("executed") 
            }
        } else if(todoItems[i] === this.parentNode.childNodes[0].innerHTML){
            todoItems.splice(i,1);
            console.log("executed")
        }
    }
    setLocal(todoItems)
    addCount(--nodeCount)
}
submit.addEventListener('click', adder)

function editor(e) {
    let ele = e.target;
    let parent = this.parentNode;
    let txt = parent.childNodes[0].innerText;
    textField.value = txt;

    deleteTodo(ele)

    
}
function allClear() {    
    while (place.firstChild) {
        place.removeChild(place.firstChild);
    }
    nodeCount = 0;
    addCount(nodeCount)
    todoItems = []
    setLocal(todoItems)
}

clearAll.addEventListener('click',allClear);

function addCount(count) {
    tasks.innerHTML = ` ${count} `;
}

window.addEventListener('load', (event) => {
    let todoItems = JSON.parse(window.localStorage.getItem('todo'));
    for (let i = 0; i < todoItems.length; i++) {
        adder(todoItems[i])
    }
  });

function setLocal(val) {
    window.localStorage.setItem('todo',JSON.stringify(val))
}