import { useState } from 'react';
import './App.css';
import  Todo from './TodoList.js';

function App() {
const [text, setText]=useState("");
const [list, setList]=useState([])

function handleOnKeydown(e) {
  console.log(e.key)
  if(e.key=='Enter'){
    setList(prev=> [...prev,text])
    setText("")
  }
}

  return (
    <div className="app">
      <Todo
      list={list}
      ></Todo>
      <div className="input">
        <input id="addTodo" className="addTodo" 
          placeholder="Add new Todo" value={text}
          onKeyDown={handleOnKeydown} onChange={e=>setText(e.target.value)}>
        </input>
      </div>
    </div>
  );
}

export default App;
