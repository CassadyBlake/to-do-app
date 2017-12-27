var onReady = function() {
  let toDos = [];
  let ident = 0;
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  var createNewToDo = function() {
    if (!newToDoText.value) { return; }

    toDos.push({
      title: newToDoText.value,
      complete: false,
      id: ident,
    });

    ident++;

    newToDoText.value = '';

    renderTheUI();
//console.log(toDos);

  }




  var renderTheUI = function() {
//why do I have to call const toDoList again?
    const toDoList = document.getElementById('toDoList');

    toDoList.textContent = '';
//why is this only 'todo' and not 'todos'?
    toDos.forEach(function(toDo) {
        const newLi = document.createElement('li');
        const checkbox = document.createElement('input');
        const deleteBtn = document.createElement('button');

        deleteBtn.textContent = 'Delete';

        checkbox.type = 'checkbox';

        newLi.textContent = toDo.title;

        toDoList.appendChild(newLi);
        newLi.appendChild(checkbox);
        newLi.appendChild(deleteBtn);

        var deleteToDo = function(id) {
          console.log(toDo.id);
          toDos = toDos.filter(toDo => toDo.id !== id);
          console.log(toDos);
        }

        deleteBtn.addEventListener('click', event => {
          deleteToDo(toDo.id);
          renderTheUI();
        });
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
