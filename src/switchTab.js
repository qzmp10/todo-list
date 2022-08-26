import { userInterface } from "./ui";
import { loadTab } from "./loadTab";
import { inputTodo } from "./inputTodo";
import { inputProject } from "./inputProject"
import { loadFromTodoArray } from "./loadFromArray"
import { loadFromProjectArray } from "./loadFromProjectArray"


const switchTabs = function(){
    
    userInterface.todoBtn.addEventListener('click', ()=>{

        userInterface.mainDiv.innerHTML = '';
        loadTab.loadTodoDOM();
        inputTodo();
        loadFromTodoArray();
    });
    
    userInterface.projectBtn.addEventListener('click', ()=>{
        userInterface.mainDiv.innerHTML = '';
        loadTab.loadProjectDOM();
        inputProject(); 
        loadFromProjectArray();
});
};
export { switchTabs }

