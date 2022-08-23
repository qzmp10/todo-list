import { Todo } from "./todo.js"

let todoArray = [];
function makeNewTodo(){
    let titleValue = document.querySelector('#title').value;
    let descriptionValue = document.querySelector('#description').value;
    let dateValue = document.querySelector('#date').value;
    let priorityValue = document.querySelector('#priority').value;
    let newTodo = new Todo(titleValue, descriptionValue, dateValue, priorityValue);
};




export { makeNewTodo }