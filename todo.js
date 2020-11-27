const todoList = [{
    title: "Nils fyller år",
    date: "2020-11-25"
}, {
    title: "Handla",
    date: "2020-11-28"
}]

function renderTodos() {
    const todoContainer = document.getElementById("todo-container");
    todoContainer.innerHTML = "";

    for(const todo of todoList) {
        const listItem = document.createElement("li");
        listItem.innerHTML = todo.date + ": " + todo.title + " " + '<i class="fas fa-trash-alt trash"></i>';
        listItem.addEventListener('click', function(){
            todoList.splice(todoList.indexOf(todo),1)
            listItem.remove();
            renderCalendar();
        })       
        todoContainer.append(listItem);
    }
}

function addNewTodo() {
    const todoTitle = document.getElementById("todo-input").value;
    const todoDate = document.getElementById("date-input").value;

    let newTodo = {title: todoTitle, date: todoDate};

    todoList.push(newTodo);
    renderTodos(); 
    renderCalendar();   
}