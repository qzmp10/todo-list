import { userInterface } from "./ui";
import { loadTab } from "./loadTab";

const switchTabs = function(){

    userInterface.todoBtn.addEventListener('click', ()=>{
        userInterface.mainDiv.innerHTML = '';
        loadTab.loadTodoDOM();
    })
    
    userInterface.projectBtn.addEventListener('click', ()=>{
        userInterface.mainDiv.innerHTML = '';
        loadTab.loadProjectDOM();
    })
  
};

export { switchTabs }

