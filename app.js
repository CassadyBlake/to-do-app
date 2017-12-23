var onReady = function() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');
  const deleteBtn = document.deleteBtn;

  addToDoForm.addEventListener('submit', () => {
    event.preventDefault();

    let title = newToDoText.value;

    let newLi = document.createElement('li');

    let checkbox = document.createElement('input');

    let deleteBtn = document.createElement('button');

    checkbox.type = "checkbox";

    newLi.textContent = title;

    deleteBtn.type = "button";

    deleteBtn.textContent = 'Delete';

    newLi.appendChild(checkbox);

    newLi.appendChild(deleteBtn);

    toDoList.appendChild(newLi);

    newToDoText.value = '';

      deleteBtn.addEventListener('click', () => {

        newLi.remove();

      });
  });


};

window.onload = function() {
  alert("The window has loaded!");
  onReady();
};
