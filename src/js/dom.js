export function createElement(tag, options = {}) {
    const element = document.createElement(tag);
    Object.entries(options).forEach(([key, value]) => {
        if (key === 'text') element.textContent = value;
        else element[key] = value;
    });
    return element
}

export function createSidebar() {
    const sideNav = createElement('div', { id: 'side-nav' });
    const title = createElement('h1', {text: 'iTodo'});

    const buttonContainer = createElement('div', {id: 'button-container'});
    const buttons = ['Add Todo', 'Today', 'Upcoming', 'Completed'];

    buttons.forEach((text) => {
        const button = createElement('button', { text });
        button.dataset.action = text.toLowerCase().replace(' ', '-');
        buttonContainer.appendChild(button);
    });
    
    const projectContainer = createElement('div', {id: 'project-container', text: 'Projects'});

    sideNav.append(title, buttonContainer, projectContainer);
    return sideNav;
}

export function createTodoContainer() {
    return createElement('div', {id: 'todo-container'});
}