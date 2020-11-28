let todoList = [];

function renderTodos() {
    const todoContainer = document.getElementById("todo-container");
    todoContainer.innerHTML = "";

    for(const todo of todoList) {
        const listItem = document.createElement("li");
        listItem.innerHTML = todo.date + ": " + todo.title + " " + '<i class="fas fa-trash-alt trash"></i>';
        addListItemEventListener(listItem, todo);    
        todoContainer.append(listItem);
    }
}

function addNewTodo() {
    const todoTitle = document.getElementById("todo-input").value;
    const todoDate = document.getElementById("date-input").value;

    let newTodo = {title: todoTitle, date: todoDate};
    todoList.push(newTodo);

    saveTodosInLocalStorage()
    renderTodos(); 
    renderCalendar();   
}

function getTodosFromLocalStorage() {
    let savedTodos = JSON.parse(window.localStorage.getItem("savedTodos"));
    if (savedTodos !== null) {
        todoList = savedTodos;
    }
}

function saveTodosInLocalStorage() {
    window.localStorage.setItem("savedTodos", JSON.stringify(todoList));
}

function addListItemEventListener(listItem, todo) {
    listItem.addEventListener('click', function(){
        todoList.splice(todoList.indexOf(todo), 1 )
        listItem.remove();
        saveTodosInLocalStorage();
        renderTodos();
        renderCalendar();
    })    
}