import { todoArray } from "./makeNewTodo"
import { userInterface } from "./ui"
import { makeNewProject, projectArray} from "./makeNewProject"
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

        const enterInputProject = document.createElement('button');
        inputDivProject.appendChild(enterInputProject);
        enterInputProject.textContent = 'Submit';
        enterInputProject.classList.add('submit');
    };

    selectButton.addEventListener('click', ()=>{
        newProjectInput();
    });
}

export { inputProject }