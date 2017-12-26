var onReady = function() {
  let toDos = [];
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  var createNewToDo = function() {
    if (!newToDoText.value) { return; }

    toDos.push({
      title: newToDoText.value,
      complete: false
    });

    newToDoText.value = '';

    renderTheUI();

  }

  var renderTheUI = function() {
//why do I have to call const toDoList again?
    const toDoList = document.getElementById('toDoList');

    toDoList.textContent = '';
//why is this only 'todo' and not 'todos'?
    toDos.forEach(function(toDo) {
        const newLi = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';

        newLi.textContent = toDo.title;

        toDoList.appendChild(newLi);
        newLi.appendChild(checkbox);

    });
  }

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
    newToDoText.value = '';
  });

  renderTheUI();

};

window.onload = function() {
  alert("The window has loaded!");
  onReady();
};
