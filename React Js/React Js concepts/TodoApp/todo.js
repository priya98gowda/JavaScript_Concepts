// function TodoApp() {
//     const [todos, setTodos] = React.useState( [
//         {
//             text: "this is a sample todo",
//             isDone: false
//         }
//     ] );

//     const addTodo = text => {
//         const newTodos = [...todos, { text }];
//         setTodos( newTodos );
//     };

//     const markTodo = index => {
//         const newTodos = [...todos];
//         newTodos[index].isDone = true;
//         setTodos( newTodos );
//     };

//     const removeTodo = index => {
//         const newTodos = [...todos];
//         newTodos.splice( index, 1 );
//         setTodos( newTodos );
//     };
//     return (
//         <div className="app">
//             <div className="container">
//                 <h1 className="text-center mb-4">Todo List</h1>
//                 <Todo addTodo={addTodo}/>
//                 <div>
//                     { todos.map( ( todo, index ) => {
//                         <card className="card card-body">
//                                 <Todo
//                                     key={ index }
//                                     index={ index }
//                                     todo={ todo }
//                                     markTodo={ markTodo }
//                                     removeTodo={ removeTodo } />
//                         </card>
//                     } ) }
                
//                          <AddTodo />
//                          <TodoList />
//                 </div>
//             </div>
//         </div>
//     );
// }

// function AddTodo( { addTodo } ) {
//     const [value, setvalue] = React.useState( "" );
//     const handleSubmit = e => {
//         e.preventDefault();
//         if ( !value ) return;
//         addTodo( value );
//         setvalue( "" );
//     }
//     return (
//         <form onSubmit={ handleSubmit }>
//             <form className="form-group">
//                 <label className="form-label"><b>Add Todo</b></label>
//                 <input className="form-control" type="text" value={ value } onChange={ e => setValue( e.target.value ) } placeholder="Add new todo" />
//             </form>
//             <button className="btn-primary mb-3" type="submit">Submit</button>
//         </form>
//     );
// }

// function TodoList(props) {
   
//     return <div>
//         <Todo/>
//     </div>
// }

// function Todo(props) {
//     return <div id="ul">
//             { props.list.map( ( value, index ) => {
//                 return <Singlelist key={ index} value={value} />
//             })}
//     </div> 
// }

// function Singlelist({todo,index,markTodo,removeTodo}) {
//     return <div
            
//       className="todo"
      
//     >
//       <span style={{ textDecoration: todo.isDone ? "line-through" : "" }}>{todo.text}</span>
//       <div>
//             <button className="btn-outline-success" onClick={()=>markTodo(index)}>✓</button>{' '}
//             <button className="btn-btn-outline-danger" onClick={()=>removeTodo(index)}>✕
//             </button>
//             </div>
//     </div>
// }
// ReactDOM.render(<TodoApp/>,document.getElementById('container'))



// Select DOM
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

//Event Listeners
document.addEventListener("DOMContentLoaded", getTodos);
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteTodo);
filterOption.addEventListener("click", filterTodo);

//Functions

function addTodo(e) {
  //Prevent natural behaviour
  e.preventDefault();
  //Create todo div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  //Create list
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  //Save to local - do this last
  //Save to local
  saveLocalTodos(todoInput.value);
  //
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);
  todoInput.value = "";
  //Create Completed Button
  const completedButton = document.createElement("button");
  completedButton.innerHTML = `<i class="fas fa-check"></i>`;
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);
  //Create trash button
  const trashButton = document.createElement("button");
  trashButton.innerHTML = `<i class="fas fa-trash"></i>`;
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);
  //attach final Todo
  todoList.appendChild(todoDiv);
}

function deleteTodo(e) {
  const item = e.target;

  if (item.classList[0] === "trash-btn") {
    // e.target.parentElement.remove();
    const todo = item.parentElement;
    todo.classList.add("fall");
    //at the end
    removeLocalTodos(todo);
    todo.addEventListener("transitionend", (e) => {
      todo.remove();
    });
  }
  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
    console.log(todo);
  }
}

function filterTodo(e) {
  const todos = todoList.childNodes;
  todos.forEach(function (todo) {
    switch (e.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "uncompleted":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
    }
  });
}

function saveLocalTodos(todo) {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
}
function removeLocalTodos(todo) {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  const todoIndex = todo.children[0].innerText;
  todos.splice(todos.indexOf(todoIndex), 1);
  localStorage.setItem("todos", JSON.stringify(todos));
}

function getTodos() {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.forEach(function (todo) {
    //Create todo div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //Create list
    const newTodo = document.createElement("li");
    newTodo.innerText = todo;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    todoInput.value = "";
    //Create Completed Button
    const completedButton = document.createElement("button");
    completedButton.innerHTML = `<i class="fas fa-check"></i>`;
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    //Create trash button
    const trashButton = document.createElement("button");
    trashButton.innerHTML = `<i class="fas fa-times"></i>`;
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    //attach final Todo
    todoList.appendChild(todoDiv);
  });
}