export function addTodo(text) {
    const todoContainer = document.getElementById('todo-container');
    const todoItem = document.createElement('div');
    todoItem.textContent = text;
    todoItem.id = 'todo'
    todoContainer.appendChild(todoItem);
}