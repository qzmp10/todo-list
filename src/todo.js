import { gift } from './projects';

class Todo {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}
let div = document.createElement('div');
document.body.appendChild(div);
div.textContent = gift;

export { Todo };