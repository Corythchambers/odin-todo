import { addTodo } from "./todoManager";

export function showTodoPopup() {
    const modal = document.createElement('div');
    modal.id = 'todo-modal';
    const form = document.createElement('form');

    const createInputField = (id, type, placeholder) => {
        const wrapper = document.createElement('div');
        const label = document.createElement('label');

        label.htmlFor = id;
        label.textContent = placeholder;

        const input = document.createElement('input');
        input.id = id; 
        input.type = type;
        input.placeholder = placeholder;
        input.required = true;

        wrapper.appendChild(label);
        wrapper.appendChild(input);
        return wrapper;
    }
    
    const titleField = createInputField("todo-title", "text", "Title");
    const descriptionField = createInputField("todo-description", "text", "Description");
    const dueDateField = createInputField("todo-dueDate", "date", "Due Date");
    const priorityField = createInputField("todo-priority", "number", "Priority (1-5)");
    const projectField = createInputField("todo-project", "text", "Project");


    form.append(titleField, descriptionField, dueDateField, priorityField, projectField)

    const submitButton = document.createElement('button');
    submitButton.textContent = 'Add todo';
    submitButton.type = 'submit'


    const cancelButton = document.createElement('button');
    cancelButton.textContent = 'Cancel';
    cancelButton.type = 'button';
    cancelButton.addEventListener('click', () => document.body.removeChild(modal));

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const newTodo = {
            title: document.getElementById('todo-title').value,
            description: document.getElementById('todo-description').value,
            dueDate: document.getElementById('todo-dueDate').value,
            priority: document.getElementById('todo-priority').value,
            project: document.getElementById('todo-project').value,
        }
        addTodo(newTodo);
        document.body.removeChild(modal);
    });

    form.appendChild(submitButton);
    form.appendChild(cancelButton);

    modal.appendChild(form)
    document.body.appendChild(modal);
}