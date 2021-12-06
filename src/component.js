import { memo } from "react";

 
function Component({list}){
return (

<div className="component">
    <header className="header"><p><i className="far fa-circle"></i>Release on Github</p></header>
   
   <div className="list">
    {list.map((item,index)=><p className="listitem" key={index}><i  className="fas fa-check-circle"></i>{item}</p>)}
    </div>
</div>


)



}

export default memo(Component);
