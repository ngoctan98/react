import { useState } from 'react';
import './App.css';
import  Component from './component.js';
function App() {
 const [text, setText]=useState("");
const [join, setJoin]=useState([])

function handleonKeydown(e) {
  console.log(e.key)
  if(e.key=='Enter'){
    setJoin(prev=> [...prev,text])
    console.log(join)
    setText("")
  }
  
}


  return (
    <div className="App">
      <Component
      list={join}
    
      
      ></Component>

      <div className="input">
      <input id="addTodo" className="addTodo" on placeholder="Add new Todo" value={text} onKeyDown={handleonKeydown} onChange={e=>setText(e.target.value)}></input>
      </div>
   
    
    
    </div>
  );
}

export default App;
