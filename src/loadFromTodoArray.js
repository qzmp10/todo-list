import { todoArray } from "./makeNewTodo"
import { userInterface } from "./ui";

export function loadFromTodoArray(){ //load todos in todoArray, with buttons, data-values, etc..

    for(const todo of todoArray){

        let inputDiv = document.createElement('div');
        userInterface.mainDiv.appendChild(inputDiv);
        inputDiv.classList.add('newTodo');
        inputDiv.textContent = `${todo.title}` + ': ' + `${todo.description}` + ', '
        + `due ${todo.date}` + `, priority: ${todo.priority}`;

    //COMMENTS IN inputTodo.js
    let counter = -1;

    let newTodos = document.querySelectorAll('.newTodo'); 
    newTodos.forEach(newTodo => { 
        counter += 1;                                                                                 
        newTodo.dataset.value = counter;
    });
    
    let removeBtn = document.createElement('div');
    removeBtn.classList.add('remove');
    inputDiv.appendChild(removeBtn);
    removeBtn.textContent = 'Remove';
    
    removeBtn.addEventListener('click', ()=> {
        counter = -1; 
        let value = removeBtn.parentElement.dataset.value; 
    
        let todoIndex = todoArray.indexOf(todoArray[value]); 
        todoArray.splice(todoIndex, 1);                     
        
    
        removeBtn.parentElement.classList.remove('newTodo'); 
    
        let remainingTodos = document.querySelectorAll('.newTodo'); 
        remainingTodos.forEach(remainingTodo => { 
            counter += 1; 
            remainingTodo.dataset.value = counter;
        })
        removeBtn.parentElement.remove();
        console.log(todoArray);
    });
    };
};


