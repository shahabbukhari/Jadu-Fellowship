let textField = document.getElementById('todo_text');
let submit = document.getElementById('add_todo');
let place = document.getElementById('tasks');

function adder() {
    let value = textField.value;
    
    if(value != "") {
        let taskDiv = document.createElement('div');
        taskDiv.className = "todo_task"

        let taskP = document.createElement('p');
        taskP.className = 'task_dis';
        taskP.innerHTML = value;


        textField.value = ""

        let dlt = document.createElement('button');
        dlt.className = 'dlt_todo';
        dlt.innerText = "Delete";
        dlt.addEventListener('click', deleteTodo);
        
        let edit = document.createElement('button');
        edit.className = 'edit_todo';
        edit.innerText = "Edit";
        edit.addEventListener('click', editor);

        taskDiv.appendChild(taskP)
        taskDiv.appendChild(dlt)
        taskDiv.appendChild(edit)
        place.appendChild(taskDiv)
    }
    
}
function deleteTodo(e) {
    place.removeChild(this.parentNode || e.parentNode)
    console.log('Deleted')
}
submit.addEventListener('click', adder)

function editor(e) {
    let ele = e.target;
    let parent = this.parentNode;
    let txt = parent.childNodes[0].innerText;
    textField.value = txt;

    deleteTodo(ele)
}