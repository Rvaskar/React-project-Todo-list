import './App.css';
import Header from './Componants/Header';
//import {TodoItem} from './Componants/TodoItem';
import {Todos} from './Componants/Todos';
import {AddTodo} from './Componants/AddTodo';
import {Footer} from './Componants/Footer';
import React, { useState, useEffect} from 'react';


function App() {
  let initTodo;
  if(localStorage.getItem("todos")===null){
    initTodo = [];

  }
  else{
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    console.log("I am ondelete of todo", todo);
    //Deleting fthis way in react dose not work
   // let index = todo.indexOf(todo);
   //9 todos.splice(index, 1);
    setTodos(todos.filter((e)=>{
    return e!==todo;
    }));
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const addTodo = (title, desc) => {
  console.log("I am adding this todo",title, desc)
  let sno;
  if(todos.length===0){
    sno=0;
  }
  else{
  sno = todos[todos.length-1].sno +1;
  }
  const myTodo = {
    sno: sno,
    title: title,
    desc: desc,
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);


  }

  const [todos, setTodos] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));

  }, [todos])
  
  
  
  return (
    <>
        <Header title="My todo list" searchBar={true}/>
        <AddTodo addTodo={addTodo}/>
        <Todos todos={todos} onDelete={onDelete}/>
        <Footer/>
    </>
  );
}

export default App;
