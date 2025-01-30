import { createSidebar, createTodoContainer} from './dom'
import { setupEventListeners } from './events'

document.addEventListener('DOMContentLoaded', () => {
    document.body.appendChild(createSidebar());
    document.body.appendChild(createTodoContainer());
    setupEventListeners();
})