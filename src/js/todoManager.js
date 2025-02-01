export function addTodo(todo) {
    const todoContainer = document.getElementById('todo-container');

    const todoItem = document.createElement('div')
    todoItem.classList.add('todo-item');
    todoItem.innerHTML = `
        <h3>${todo.title}</h3>
        <p><strong>Description:</strong> ${todo.description}</p>
        <p><strong>Due Date:</strong> ${todo.dueDate}</p>
        <p><strong>Priority:</strong> ${todo.priority}</p>
        <p><strong>Project:</strong> ${todo.project}</p>
    `

    todoContainer.appendChild(todoItem);
}