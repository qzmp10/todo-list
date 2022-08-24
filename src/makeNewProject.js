import { Project } from "./projects"
import { todoArray } from "./makeNewTodo"

let counter = -1; //counter for IDs, id will equal position in todoArray index,  starts @ -1 so counter+=1 === 0
let projectArray = [];
let selectedTodosArray = [];

function makeNewProject(){
    let nameValue = document.querySelector('#name').value; // get project name

    let selectionTodoOptions = document.querySelectorAll('.select-todo') //give ID to all selectable todos
    selectionTodoOptions.forEach(option => {
        counter += 1; // for each todo option in menu increase counter number (ID)
        option.setAttribute('id', `${counter}`); // todo option ID = counter number
    })

    let selectedTodos = document.querySelectorAll('.selected'); // for all --SELECTED-- todos
    selectedTodos.forEach(selectedTodo => {
        selectedTodosArray.push(todoArray[selectedTodo.id]); //the todos are listed from top to bottom by [index] of todoArray. counter starts at [0]
                                                             //so selectedTodo.id === index of the todo in the todoArray
    })

    let newProject = new Project(nameValue, selectedTodosArray); //create new Project w/ name and todos. **selectedTodosArray** === todos in project
    projectArray.push(newProject); //push new Project in projectArray to save in localStorage later
    
};

export { makeNewProject, projectArray, counter, selectedTodosArray }
