var onReady = function() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');
  const delToDoForm = document.getElementById('delToDoForm');

  addToDoForm.addEventListener('submit', () => {
    event.preventDefault();

    let title = newToDoText.value;

    let newLi = document.createElement('li');

    let checkbox = document.createElement('input');

    checkbox.type = "checkbox";

    newLi.textContent = title;

    newLi.appendChild(checkbox);

    toDoList.appendChild(newLi);

    newToDoText.value = '';

  });

  delToDoForm.addEventListener('click', () => {

    toDoList.removeChild(newLi);

    newLi.removeChild(checkbox);

  )};
};

window.onload = function() {
  alert("The window has loaded!");
  onReady();
};
