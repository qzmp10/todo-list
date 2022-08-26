// change button div to input div
import { userInterface } from "./ui"
import { makeNewTodo, todoArray} from "./makeNewTodo"



function inputTodo(){

    const selectButton = document.querySelector('.addTodo');

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
                enterInput.classList.add('submit');
                enterInput.addEventListener('click', ()=>{
                    makeNewTodo();
                    inputDiv.innerHTML = '';
                    inputDiv.classList.remove('inputDiv');
                    inputDiv.classList.add('newTodo');
                    inputDiv.textContent = `${todoArray[todoArray.length - 1].title}` + ': ' + `${todoArray[todoArray.length - 1].description}` + ', '
                    + `due ${todoArray[todoArray.length - 1].date}` + `, priority: ${todoArray[todoArray.length - 1].priority}`;

                    let counter = -1; //set counter value;

                    let newTodos = document.querySelectorAll('.newTodo'); // select all new todos;
                    newTodos.forEach(newTodo => { //for each created todo Div, assign a data-value that is equal to the counter number 
                        counter += 1;                   //(first div data-value === 0, next one === 1, etc...)                                                               
                        newTodo.dataset.value = counter;
                    })

                    let removeBtn = document.createElement('div');
                    removeBtn.classList.add('remove');
                    inputDiv.appendChild(removeBtn);
                    removeBtn.textContent = 'Remove';

                    removeBtn.addEventListener('click', ()=> {
                        counter = -1; // reset counter when click on remove, because it will be used again to reset data-value
                        let value = removeBtn.parentElement.dataset.value; //create a value variable that stores the previous data-value of deleted todo
        
                        let todoIndex = todoArray.indexOf(todoArray[value]); // since id variable will be the same as index in projectArray, 
                        todoArray.splice(todoIndex, 1);                      // use the id of the div to get corresponding index of object in todoArray
                        //then slice the corresponding object from the array
        
                        removeBtn.parentElement.classList.remove('newTodo'); //remove the class to reset data-value (next few lines)
        
                        let remainingTodos = document.querySelectorAll('.newTodo'); // select remaining project divs
                        remainingTodos.forEach(remainingTodo => { //each remaining todo gets new data-value to correspond to index of objects in todoArray
                            counter += 1; 
                            remainingTodo.dataset.value = counter;
                        })
                        removeBtn.parentElement.remove(); // remove project div from DOM
                    })
                });
            }
        }
    };

    selectButton.addEventListener('click', ()=>{
        newTodoInput();
    });
};

export { inputTodo }





