import { projectArray } from "./makeNewProject"
import { userInterface } from "./ui";

export function loadFromProjectArray(){

    for(const project of projectArray){

        let inputDivProject = document.createElement('div');
        userInterface.mainDiv.appendChild(inputDivProject);
        inputDivProject.classList.add('newProject');
        let projectTodoTitles = '';

        for(const todo of project.todos){
            projectTodoTitles += (todo.title + ', ');
            console.log(todo.title);
        };

        inputDivProject.textContent = `Project name: ${project.name}.` 
        + ' To-do: ' + `${projectTodoTitles}.`; 

        //COMMENTS IN inputProject.js
        let counter = -1;

        let newProjects = document.querySelectorAll('.newProject'); 
        newProjects.forEach(newProject => { 
            counter += 1;                                                                              
            newProject.dataset.id = counter;
        });
        
            let removeBtn = document.createElement('div'); 
            removeBtn.classList.add('remove'); 
            inputDivProject.appendChild(removeBtn);
            removeBtn.textContent = 'Remove';

            removeBtn.addEventListener('click', ()=> {
                counter = -1; 
                let id = removeBtn.parentElement.dataset.id; 
                let projectIndex = projectArray.indexOf(projectArray[id]);  
                projectArray.splice(projectIndex, 1);                     

                removeBtn.parentElement.classList.remove('newProject'); 

                let remainingProjects = document.querySelectorAll('.newProject'); 
                remainingProjects.forEach(remainingProject => { 
                    counter += 1; 
                    remainingProject.dataset.id = counter;
                });
                removeBtn.parentElement.remove(); 
                console.log(projectArray);
            });

    };

};