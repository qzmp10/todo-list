import { userInterface } from "./ui";
import { loadTab } from "./loadTab";
import { inputTodo } from "./inputTodo";
import { inputProject } from "./inputProject"
import { loadFromTodoArray } from "./loadFromTodoArray"
import { loadFromProjectArray } from "./loadFromProjectArray"
import { todoArray } from "./makeNewTodo";
import { projectArray } from "./makeNewProject";
import { todoArrayLocalStorage, projectArrayLocalStorage} from "./localStorage"


const switchTabs = function(){
    
    userInterface.todoBtn.addEventListener('click', ()=>{

        userInterface.mainDiv.innerHTML = '';
        loadTab.loadTodoDOM();
        inputTodo();
        loadFromTodoArray();
        projectArrayLocalStorage(projectArray);
    });
    
    userInterface.projectBtn.addEventListener('click', ()=>{
        userInterface.mainDiv.innerHTML = '';
        loadTab.loadProjectDOM();
        inputProject(); 
        loadFromProjectArray();
        todoArrayLocalStorage(todoArray);
});
};
export { switchTabs }

