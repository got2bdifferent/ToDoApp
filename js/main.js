


function buttonClick() {
    var value = document.getElementById('item').value;
    if(value){
        console.log("There was a task: " +value);
        addItemToDo(value);
        document.getElementById('item').value = '';
    }
}


window.onload = function () {
    // console.log(document.getElementById('add'));
    var toDoList = document.getElementById('toDo');
    var completed = document.getElementById('completed');
    document.getElementById('add').addEventListener('click', buttonClick);

};


function removeItem(){
    var item = this.parentNode.parentNode;
    var parent = item.parentNode;
    console.log(this.parentNode.parentNode);

    parent.removeChild(item);
}



function completeItem(){
    var item = this.parentNode.parentNode;
    var parent = item.parentNode;
    var id = parent.id;

    var target = (id === 'todo') ? document.getElementById('completed'): document.getElementById('todo');

    var completedTask = document.getElementById('completedText');

    console.log(item);
    console.log(target);

  /*  if(id === 'todo') {
        target = document.getElementById('completed');  // ToDo item completed, and moving to completed list
    } else {
        target = document.getElementById('todo');    // Completed item to be redone, and to eb moved to todo list
    }*/


    target.appendChild(item);
    parent.removeChild(item);

    // target.insertBefore(item, target.childNodes[0]);


}



// Add new item to the ToDo list
function addItemToDo(task) {
    console.log("Adding item ToDo: "+task);
    // var text = task;

    // console.log("Adding: "+text);

    var item = document.createElement('li');
    item.innerText = task;

    var buttons = document.createElement('div');
    buttons.classList.add('buttons');

    var remove = document.createElement('button');
    remove.classList.add('remove');
    remove.addEventListener('click', removeItem);       // remove Item

    var complete = document.createElement('button');
    complete.classList.add('complete');
    complete.addEventListener('click', completeItem);       // Complete Item


    buttons.appendChild(remove);
    buttons.appendChild(complete);

    item.appendChild(buttons);
    var toDoList = document.getElementById('todo');


        if (toDoList !== null) {
            toDoList.appendChild(item);
            toDoList.insertBefore(item, toDoList.childNodes[0]);
            console.log("appending child: "+task);
        } else console.log("aaaaa");


    // toDoList.appendChild(item);
}
























