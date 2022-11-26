import React, { useState } from 'react';

export const AddTodo = (props) => {
  let myStyle = {
      border: '10px solid purple',
      color: 'blue',
      background: "aqua"

  }
  let submitButton = {
    padding: '5px',
    margin: '10px'
  }
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const submit = (e) =>{
    e.preventDefault();
    if(!title | !desc){
      alert("Title or Description cannot be blank");

    }
    else{
    props.addTodo(title, desc);
    setTitle("")
    setDesc ("")
}
  }

  return (
    <div className="container" style={myStyle}>
      <h3>Add a Todo</h3>
      <form onSubmit={submit}>
      <div className="mb-3">
        <label htmlFor="Title" className="form-label">Todo Title</label>
        <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="title" aria-describedby="emailHelp"/>
      </div>
      <div className="mb-3">
        <label htmlFor="desc" className="form-label">Todo Description</label>
        <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} className="form-control" id="desc"/>
      </div>
      <button type="submit" className="btn btn-success" style={submitButton}>Submit</button>
    </form>
    </div>
  )
}

