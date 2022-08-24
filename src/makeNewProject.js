import { Project } from "./projects"


let projectArray = [];
function makeNewProject(){
    let nameValue = document.querySelector('#name').value;
    let newProject = new Project(nameValue);
    projectArray.push(newProject)
};

export { makeNewProject, projectArray }
