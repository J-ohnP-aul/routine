const todoList = JSON.parse(localStorage.getItem('todoList')) || [];
renderTodoList();

function renderTodoList () {
  let todolistHTML = '';
  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    //destructing shortcut
    //const name = todoObject.name;
    const { name, dueDate } = todoObject;
    //const dueDate = todoObject.dueDate;
    //generating an html
    // below l-21 whenver we upd ls, sv on lclstrg
    const htmlP =
     `<div>${name}</div>
      <div>${dueDate}</div>         
      <button onclick="
        todoList.splice(${i}, 1);
        renderTodoList();
        saveToStorage();
      "class="delete-todo-btn">Delete</button>
      
      `;
    todolistHTML += htmlP;
  }
  console.log(todolistHTML);

  document.querySelector('.js-todo-list')
    .innerHTML = todolistHTML;
}

function addTodo() {
  const inputElm = document.querySelector('.js-name-input');
  const name = inputElm.value;
  const dateInputElm = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElm.value;

  //Checking if fields are empty
  todoList.push({
    //if property and var=name use shorthsnd prpty
   // name: name,
    //dueDate: dueDate
    name,
    dueDate
  });
  console.log(todoList);

  inputElm.value = '';
  dateInputElm.value = '';

  renderTodoList();
  saveToStorage();//whenver we upd ls, sv on lclstrg
  todoList.forEach(function(todoObject, index){
    todoObject = todoList[index];
    const {name, dueDate} = todoObject;
    if(name==='' && dueDate==''){
      alert('enter value');
    } else if( name==''){
      alert('enter name!!');
    } else if(dueDate==''){
      alert('select date pliz!!')
    }
  });
}
function saveToStorage(){
  localStorage.setItem('todoList', JSON.stringify(todoList));
}

//steps  1. save data in an array 2. generate html