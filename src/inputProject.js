import { Project } from "./projects"
import { todoArray } from "./makeNewTodo"
import { userInterface } from "./ui"
import { makeNewProject, projectArray, selectedTodosArray, counter } from "./makeNewProject"
import { showTodoMenu } from "./showTodoMenu"


function inputProject() {

    const selectButton = document.querySelector('.addProject');

    function newProjectInput(){
        let inputDivProject = document.createElement('div');
        userInterface.mainDiv.appendChild(inputDivProject);
        inputDivProject.classList.add('inputDivProject');

        let nameDiv = document.createElement('div');
        nameDiv.classList.add('inputs')
        let nameLabel = document.createElement('label');
        nameLabel.setAttribute("for", "name");
        nameLabel.innerHTML = "Name";
        let nameInput = document.createElement('input');
        nameInput.setAttribute("type", "text");
        nameInput.setAttribute("id", "name");
        nameDiv.appendChild(nameLabel);
        nameDiv.appendChild(nameInput);
        inputDivProject.appendChild(nameDiv);
        
        let selectTodos = document.createElement('div');
        selectTodos.classList.add('select-menu');
        inputDivProject.appendChild(selectTodos);
        showTodoMenu();
        let selectionTodoOptions = document.querySelectorAll('.select-todo')
        selectionTodoOptions.forEach(selectionTodoOption =>{
            selectionTodoOption.addEventListener('click', ()=>{
                selectionTodoOption.classList.toggle('selected');
            })
        });

        
        const enterInputProject = document.createElement('button');
        inputDivProject.appendChild(enterInputProject);
        enterInputProject.textContent = 'Submit';
        enterInputProject.classList.add('submit');
        enterInputProject.addEventListener('click', () => {
            makeNewProject();
            counter = -1; //reset counter from makeNewProject.js
            selectedTodosArray = []; //reset selectedTodosArray from makeNewProject.js
            console.log(todoArray);
            console.log(projectArray);
            console.log(newProject);
        })
    };

    selectButton.addEventListener('click', ()=>{
        newProjectInput();
    });
}

export { inputProject }