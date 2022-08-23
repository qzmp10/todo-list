// change button div to input div
import { userInterface } from "./ui"
import { makeNewTodo, todoArray} from "./makeNewTodo"



function inputTodo(){

    const selectButton = document.querySelector('.btn');

    function newTodoInput() {
        let inputDiv = document.createElement('div');
        userInterface.mainDiv.appendChild(inputDiv);
        inputDiv.classList.add('inputDiv');

        for(let i=0; i<5; i++){
            if(i==0){
                
                let titleDiv = document.createElement('div');
                titleDiv.classList.add('inputs')
                let titleLabel = document.createElement('label');
                titleLabel.setAttribute("for", "title");
                titleLabel.innerHTML = "Title";
                let titleInput = document.createElement('input');
                titleInput.setAttribute("type", "text");
                titleInput.setAttribute("id", "title");
                titleDiv.appendChild(titleLabel);
                titleDiv.appendChild(titleInput);
                inputDiv.appendChild(titleDiv);

            } else if (i==1){
                let descriptionDiv = document.createElement('div');
                descriptionDiv.classList.add('inputs')
                let descriptionLabel = document.createElement('label');
                descriptionLabel.setAttribute("for", "description");
                descriptionLabel.innerHTML = "Description";
                let descriptionInput = document.createElement('input');
                descriptionInput.setAttribute("type", "text");
                descriptionInput.setAttribute("id", "description");
                descriptionDiv.appendChild(descriptionLabel);
                descriptionDiv.appendChild(descriptionInput);
                inputDiv.appendChild(descriptionDiv);

            } else if (i==2){
                let dateDiv = document.createElement('div');
                dateDiv.classList.add('inputs')
                let dateLabel = document.createElement('label');
                dateLabel.setAttribute("for", "date");
                dateLabel.innerHTML = "Date";
                let dateInput = document.createElement('input');
                dateInput.setAttribute("type", "text");
                dateInput.setAttribute("id", "date");
                dateDiv.appendChild(dateLabel);
                dateDiv.appendChild(dateInput);
                inputDiv.appendChild(dateDiv);

            } else if (i==3){
                let priorityDiv = document.createElement('div');
                priorityDiv.classList.add('inputs')
                let priorityLabel = document.createElement('label');
                priorityLabel.setAttribute("for", "priority");
                priorityLabel.textContent = "Priority";
                let priorityInput = document.createElement('input');
                priorityInput.setAttribute("type", "text");
                priorityInput.setAttribute("id", "priority");
                priorityDiv.appendChild(priorityLabel);
                priorityDiv.appendChild(priorityInput);
                inputDiv.appendChild(priorityDiv);

            } else if (i==4){
                const enterInput = document.createElement('button');
                inputDiv.appendChild(enterInput);
                enterInput.textContent = 'Submit';
                enterInput.classList.add('submit')
                enterInput.addEventListener('click', ()=>{
                    makeNewTodo();
                    inputDiv.innerHTML = '';
                    inputDiv.classList.remove('inputDiv');
                    inputDiv.classList.add('newTodo');
                    inputDiv.textContent = `${todoArray[todoArray.length - 1].title}` + ': ' + `${todoArray[todoArray.length - 1].description}` + ', '
                    + `due ${todoArray[todoArray.length - 1].date}` + `, priority: ${todoArray[todoArray.length - 1].priority}`;
                    console.log(todoArray);
                });
            }
        }
    };

    selectButton.addEventListener('click', ()=>{
        newTodoInput();
    });
};

export { inputTodo }





