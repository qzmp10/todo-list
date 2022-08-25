import { userInterface } from "./ui"

const loadTab = (function(){

    const loadProjectDOM = function(){
        let projectHeader = document.createElement('div');
        userInterface.mainDiv.appendChild(projectHeader);
        projectHeader.classList.add('header');
        projectHeader.textContent = 'My Projects';
    
        let addProjectButton = document.createElement('div');;
        addProjectButton.classList.add('btn');
        addProjectButton.classList.add('addProject');
        addProjectButton.addEventListener('mouseover', ()=> {
            addProjectButton.classList.add('hovered');
        });
        addProjectButton.addEventListener('mouseout', ()=>{
            addProjectButton.classList.remove('hovered')
        })
        userInterface.mainDiv.appendChild(addProjectButton);
        addProjectButton.textContent = 'Add Project';
    };
    
    const loadTodoDOM = function(){
        let todoHeader = document.createElement('div');
        userInterface.mainDiv.appendChild(todoHeader);
        todoHeader.classList.add('header');
        todoHeader.textContent = 'My To-Dos';
    
        let addTodoButton = document.createElement('div');
        addTodoButton.classList.add('btn');
        addTodoButton.classList.add('addTodo');
        addTodoButton.addEventListener('mouseover', ()=> {
            addTodoButton.classList.add('hovered');
        });
        addTodoButton.addEventListener('mouseout', ()=>{
            addTodoButton.classList.remove('hovered')
        })
        userInterface.mainDiv.appendChild(addTodoButton);
        addTodoButton.textContent = 'Add To-do';
    };

    return { loadProjectDOM, loadTodoDOM }

})();

export { loadTab }