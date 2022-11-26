import React from 'react'
import {TodoItem} from "./TodoItem";

export const Todos = (props) => {
  let myStyle = {
    minHeight:"70vh",
    margin: "40px auto",
    color : "black",
    border : "10px solid purple"
  }
  let listHeder = {
    border : "2px solid violet",
    margin : "4px auto",
    background :"blue",
    Text:'wrap',
    color : 'white'
    
  }
  return (
    <>
    <div className="container"  style={myStyle}>
    <h3 className="text-center" style={listHeder}>Todos list</h3>
    {props.todos.length===0? "No todos to display":
    props.todos.map((todo) =>{
      return(
        <>
      <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/><hr/>
      </>
      )
    })
    }
    
  </div>  
  </>
  )
}

