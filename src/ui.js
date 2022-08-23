import { loadTab } from "./loadTab"
import { switchTabs } from "./switchTab";
import { inputTodo } from "./inputTodo";

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
    let todoBtn = document.querySelector('.to-do')

    let mainDiv = document.createElement('div');
    mainDiv.classList.add('mainDiv')
    body.appendChild(mainDiv);

    return { body, taskBar, mainDiv, projectBtn, todoBtn };

})();

const uiLogic = (function(){
    loadTab.loadProjectDOM();
    switchTabs();
    inputTodo();
})();

export { userInterface }