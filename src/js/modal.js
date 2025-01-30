import { addTodo } from "./todoManager";

export function showTodoPopup() {
    const modal = document.createElement('div');
    modal.id = 'todo-modal';

    const input = document.createElement('input');
    input.id = 'todo-input'
    input.type = 'text';
    input.placeholder = 'Enter your todo...';

    const addButton = document.createElement('button');
    addButton.textContent = 'Add';
    addButton.addEventListener('click', () => {
        if (input.value.trim() !== '') {
            addTodo(input.value);
            document.body.removeChild(modal);
        }
    });

    const cancelButton = document.createElement('button');
    cancelButton.textContent = 'Cancel';
    cancelButton.addEventListener('click', () => document.body.removeChild(modal));

    modal.append(input, addButton, cancelButton);
    document.body.appendChild(modal);
}