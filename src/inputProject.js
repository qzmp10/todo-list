import { todoArray } from "./makeNewTodo"
import { userInterface } from "./ui"

function inputProject() {

    const selectButton = document.querySelector('.addProject');

    function newProjectInput(){
        let inputDiv = document.createElement('div');
        userInterface.mainDiv.appendChild(inputDiv);
        inputDiv.classList.add('inputDiv');

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
        inputDiv.appendChild(nameDiv);

        let selectTodos = document.createElement('div');
        selectTodos.classList.add('select-menu');
    }

    selectButton.addEventListener('click', ()=>{
        newProjectInput();
    });
}

export { inputProject }