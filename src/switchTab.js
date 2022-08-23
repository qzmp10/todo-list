import { userInterface } from "./ui";
import { loadTab } from "./loadTab";
import { inputTodo } from "./inputTodo";

const switchTabs = function(){

    userInterface.todoBtn.addEventListener('click', ()=>{
        userInterface.mainDiv.innerHTML = '';
        loadTab.loadTodoDOM();
        inputTodo();
    })
    
    userInterface.projectBtn.addEventListener('click', ()=>{
        userInterface.mainDiv.innerHTML = '';
        loadTab.loadProjectDOM();
        inputTodo();
    })
  
};

export { switchTabs }

