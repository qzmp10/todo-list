import { todoArray } from "./makeNewTodo"

function showTodoMenu() {
    todoArray.forEach(todo => {
        const selectionTodo = document.createElement('div');
        selectionTodo.classList.add('select-todo');
        document.querySelector('.select-menu').appendChild(selectionTodo)
        selectionTodo.textContent = `${todo.title}`
        });
}

export { showTodoMenu }
