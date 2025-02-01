import { createSidebar, createTodoContainer} from './dom'
import { setupEventListeners } from './events'
import '../styles.css'

document.addEventListener('DOMContentLoaded', () => {
    document.body.appendChild(createSidebar());
    document.body.appendChild(createTodoContainer());
    setupEventListeners();
})