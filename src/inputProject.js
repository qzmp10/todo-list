import { userInterface } from "./ui"
import { makeNewProject, projectArray, selectedTodosArray, counter } from "./makeNewProject"
import { showTodoMenu } from "./showTodoMenu"
import { projectArrayLocalStorage } from "./localStorage";

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

        let selectTodosLabel = document.createElement('div');
        inputDivProject.appendChild(selectTodosLabel);
        selectTodosLabel.textContent = 'Select to-do';

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
            makeNewProject(); // explanation in makeNewProject.js
            projectArrayLocalStorage(projectArray); //send updated projectArray to localStorage

            counter = -1; //reset counter from makeNewProject.js
            selectedTodosArray = []; //reset selectedTodosArray from makeNewProject.js
            
            inputDivProject.innerHTML = ''; //clear the form
            inputDivProject.classList.remove('inputDivProject'); //remove class to change design
            inputDivProject.classList.add('newProject'); // add class to change design
            let projectTodoTitles = ''; //set a variable for the textContent of the todo titles inside the project Array

            for(const todo of projectArray[projectArray.length - 1].todos){ // for every todo in the recently created project array, add the titles to the string variable
                projectTodoTitles += (todo.title + ', ');
            };

            inputDivProject.textContent = `Project name: ${projectArray[projectArray.length - 1].name}.` //show project name and the todos in the new project div
            + ' To-do: ' + `${projectTodoTitles}.`; 

            let newProjects = document.querySelectorAll('.newProject'); // select all new projects

            newProjects.forEach(newProject => { //for each created Project Div, assign a data-id that is equal to the counter number 
                counter += 1;                   //(first div data-id === 0, next one === 1, etc...)                                                               
                newProject.dataset.id = counter;
            });

            let removeBtn = document.createElement('div'); //create button to remove the project
            removeBtn.classList.add('remove'); 
            inputDivProject.appendChild(removeBtn);
            removeBtn.textContent = 'Remove';

            removeBtn.addEventListener('click', ()=> {
                counter = -1; // reset counter when click on remove, because it will be used again to reset data-id
                let id = removeBtn.parentElement.dataset.id; //create an id variable that stores the previous data-id of deleted project

                let projectIndex = projectArray.indexOf(projectArray[id]); // since id variable will be the same as index in projectArray, 
                projectArray.splice(projectIndex, 1);                      // use the id of the div to get corresponding index of object in projectArray
                //then slice the corresponding object from the array

                removeBtn.parentElement.classList.remove('newProject'); //remove the class to reset data-id (next few lines)

                let remainingProjects = document.querySelectorAll('.newProject'); // select remaining project divs
                remainingProjects.forEach(remainingProject => { //each remaining project gets new data-id to correspond to index of objects in projectArray
                    counter += 1; 
                    remainingProject.dataset.id = counter;
                });
                removeBtn.parentElement.remove(); // remove project div from DOM

                projectArrayLocalStorage(projectArray); //send updated projectArray to localStorage
                
            });
            
        });

    };
    selectButton.addEventListener('click', ()=>{
        newProjectInput();
    });
   
}

export { inputProject }
