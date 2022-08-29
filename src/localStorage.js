import { todoArray } from './makeNewTodo'
import { projectArray } from "./makeNewProject"

export function todoArrayLocalStorage(item){
    window.localStorage.setItem('todoArray', JSON.stringify(item)); //send todoArray values to localStorage
}

export function projectArrayLocalStorage(item){
    window.localStorage.setItem('projectArray', JSON.stringify(item)); //send projectArray values to localStorage
}

let localTodoArray = JSON.parse(localStorage.getItem('todoArray')); //returns the todoARray in localStorage not in string

let localProjectArray = JSON.parse(localStorage.getItem('projectArray')); //same but projectArray

//COMMENTS in ui.js
export function checkTodoArrayLocalStorage() { 
    if (localStorage.getItem("todoArray") === null) {
        return 0;
      } else {
          return 1;
      }
}

export function checkProjectArrayLocalStorage() {
    if (localStorage.getItem("projectArray") === null) {
        return 0;
      } else {
          return 1;
      }
}

export function setTodoArrayValues() {
    todoArray = localTodoArray;
}


export function setProjectArrayValues() {
    projectArray = localProjectArray;
}




