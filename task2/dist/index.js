"use strict";
let entered = document.getElementById('userinput');
entered.addEventListener('click', CreateNote);
function CreateNote() {
    const newTaskInput = document.getElementById('newtask');
    if (!newTaskInput)
        return;
    const newTask = newTaskInput.value.trim();
    if (newTask === '') {
        alert('Please enter a task!');
        return;
    }
    const todo = document.createElement('p');
    const parent = document.getElementById('basic');
    const taskText = document.createElement('span');
    taskText.textContent = newTask;
    todo.appendChild(taskText);
    const deleteButton = createDeleteButton(parent, todo);
    const updateButton = createUpdateButton(todo, taskText, deleteButton);
    todo.appendChild(updateButton);
    todo.appendChild(deleteButton);
    parent.appendChild(todo);
    newTaskInput.value = '';
}
function createDeleteButton(parent, todo) {
    const deleteButton = document.createElement('button');
    deleteButton.textContent = "Delete";
    deleteButton.style.color = "red";
    deleteButton.addEventListener('click', () => {
        parent.removeChild(todo);
    });
    return deleteButton;
}
function createUpdateButton(todo, taskText, deleteButton) {
    const updateButton = document.createElement('button');
    updateButton.textContent = "Update";
    updateButton.style.color = "cyan";
    updateButton.addEventListener('click', () => {
        const saveButton = document.createElement('button');
        const inputField = document.createElement('input');
        inputField.value = taskText.textContent || '';
        saveButton.textContent = 'Save';
        todo.innerHTML = '';
        todo.appendChild(inputField);
        todo.appendChild(saveButton);
        saveButton.addEventListener('click', () => {
            const updatedText = inputField.value.trim();
            if (updatedText === '') {
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
//# sourceMappingURL=index.js.map