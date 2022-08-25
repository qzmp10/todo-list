import { loadTab } from "./loadTab"
import { switchTabs } from "./switchTab";
import { inputTodo } from "./inputTodo";
import { inputProject } from "./inputProject"

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
    loadTab.loadProjectDOM();
    switchTabs();
    inputProject();
})();

export { userInterface }