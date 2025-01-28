let entered = document.getElementById('userinput') as HTMLButtonElement;  //b/c this line can be HTML element | null, so explicitly tell
entered.addEventListener('click', CreateNote);


function CreateNote() : void{
    const newTaskInput = document.getElementById('newtask') as HTMLInputElement | null;
    if(!newTaskInput) return;

    const newTask = newTaskInput.value.trim();
    
    if (newTask === '') {
        alert('Please enter a task!');
        return;
    }
    
    const todo = document.createElement('p') as HTMLParagraphElement;
    const parent = document.getElementById('basic') as HTMLDivElement;
    const taskText = document.createElement('span') as HTMLSpanElement;

    taskText.textContent = newTask
    todo.appendChild(taskText);

    const deleteButton = createDeleteButton(parent,todo);
    const updateButton = createUpdateButton(todo,taskText,deleteButton);
    
    todo.appendChild(updateButton);
    todo.appendChild(deleteButton);
    parent.appendChild(todo);

    // document.getElementById('newtask').value = '';      //to just empty the input feild after pressed create 
    newTaskInput.value = '';
}


function createDeleteButton(parent : HTMLDivElement, todo : HTMLParagraphElement) : HTMLButtonElement{
    const deleteButton = document.createElement('button') as HTMLButtonElement;
    deleteButton.textContent = "Delete";
    deleteButton.style.color = "red";

    deleteButton.addEventListener('click', () =>{
        parent.removeChild(todo);
    });

    return deleteButton;
}

function createUpdateButton(todo : HTMLParagraphElement, taskText : HTMLSpanElement, deleteButton : HTMLButtonElement) : HTMLButtonElement{
    const updateButton = document.createElement('button') as HTMLButtonElement;
    updateButton.textContent = "Update";
    updateButton.style.color= "cyan";

    updateButton.addEventListener('click', ()=>{
        const saveButton = document.createElement('button') as HTMLButtonElement;
        const inputField = document.createElement('input') as HTMLInputElement;
        inputField.value = taskText.textContent || '';
        saveButton.textContent = 'Save';

        todo.innerHTML = '';    //litrally empty all the todo's texts, buttons..
        todo.appendChild(inputField);
        todo.appendChild(saveButton);

        saveButton.addEventListener('click', ()=>{
            const updatedText = inputField.value.trim();
            if(updatedText === ''){
                alert('task cant be empty');
                return;
            }

            taskText.textContent = updatedText;
            todo.innerHTML = '';
            todo.appendChild(taskText);
            todo.appendChild(updateButton);
            todo.appendChild(deleteButton);
        });
    });

    return updateButton;
}




