import { todoArray } from "./makeNewTodo"

function showTodoMenu() {
    todoArray.forEach(todo => {
        const selectionTodoOption = document.createElement('div');
        selectionTodoOption.classList.add('select-todo');
        document.querySelector('.select-menu').appendChild(selectionTodoOption)
        selectionTodoOption.textContent = `${todo.title}`;
        });
}

export { showTodoMenu }
