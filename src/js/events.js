import { showTodoPopup } from "./modal";

export function setupEventListeners() {
    document.addEventListener('click', (event) => {
        if (!event.target.matches('button')) return;

        const action = event.target.dataset.action;
        switch (action) {
            case 'add-todo':
                showTodoPopup();
                break;
            case 'today':
                alert('Today clicked!');
                break;
            case 'upcoming':
                alert('Upcoming clicked!');
                break;
            case 'completed':
                alert('Completed clicked!');
                break;
            default:
                console.log('Unknown action:', action);
        }
    });
}