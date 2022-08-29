import { loadTab } from "./loadTab"
import { switchTabs } from "./switchTab";
import { inputProject } from "./inputProject"
import { checkTodoArrayLocalStorage, checkProjectArrayLocalStorage, setTodoArrayValues, setProjectArrayValues } from "./localStorage";
import { loadFromProjectArray } from "./loadFromProjectArray";


const userInterface = (function(){
    let body = document.querySelector('body');

    let taskBar = document.createElement('div');
    body.appendChild(taskBar)
    taskBar.classList.add('taskBar');

    for(let i=0; i<2; i++){
        let tab = document.createElement('button');
        tab.classList.add('tab');
        taskBar.appendChild(tab);
        if(i==0) {
            tab.textContent = 'Projects';
            tab.classList.add('projects');
        } else {
            tab.textContent = 'To-do';
            tab.classList.add('to-do');
        }
    }

    let projectBtn = document.querySelector('.projects');
    projectBtn.classList.add('hovered');
    projectBtn.addEventListener('mouseover', ()=> {
        projectBtn.classList.add('hovered');
    });
    projectBtn.addEventListener('mouseout', ()=>{
        projectBtn.classList.remove('hovered')
    })

    let todoBtn = document.querySelector('.to-do')
    todoBtn.addEventListener('mouseover', ()=> {
        todoBtn.classList.add('hovered');
    });
    todoBtn.addEventListener('mouseout', ()=>{
        todoBtn.classList.remove('hovered')
    })

    let mainDiv = document.createElement('div');
    mainDiv.classList.add('mainDiv')
    body.appendChild(mainDiv);

    return { body, taskBar, mainDiv, projectBtn, todoBtn };

})();

const uiLogic = (function(){

    checkProjectArrayLocalStorage(); // check if localStorage is empty, if empty return 0, else 1

    if(checkProjectArrayLocalStorage() === 1){
        setProjectArrayValues(); //array values in localStorage = projectArray
    };
    checkTodoArrayLocalStorage(); // check if localStorage is empty, if empty return 0, else 1
    
    if(checkTodoArrayLocalStorage() === 1){
        setTodoArrayValues(); //array values in localStorage = todoArray
    };
    
    loadTab.loadProjectDOM();
    switchTabs();
    inputProject();
    loadFromProjectArray();
})();



export { userInterface }