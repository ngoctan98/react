import { useState } from "react";

function Todo({list}){
    const [listDone,setListDone]=useState([])
    function handleOnClick(item,i) {
        list.splice(i,1)
        setListDone(prev=>[...prev,item])
}
function handleOnClickOffDone(item,i) {
    setListDone(prev=>prev.splice(i,1))
    list.push(item)
}

return (
<div className="todo-list">
    <header className="header">
        <p><i className="far fa-circle"></i>Release on Github &#127881;</p>
    </header>
    <div className="list">
        {list.map((item,index)=>
        <p className="list-item" 
            onClick={()=>handleOnClick(item,index)}
            key={index}>
        <i className="fas fa-check-circle"></i>
        {item}</p>)}
    </div>
    <div className="list-done">
        <div
        style={{
            backgroundColor:'#000',
            zIndex:10,
        }}
        >
        <h4
        style={
            {color:'#fff',
            textAlign:'center',
        }
        }>List Done</h4>
        </div>
            {listDone.map(
                (item,index)=><p className="list-item"
                    style={{textDecorationLine:'line-through'}}
                    onClick={()=>handleOnClickOffDone(item,index)}
                 key={index}><i className="far fa-check-circle"></i>{item}</p>
            )}
        </div>
</div>
)
}

export default Todo;
