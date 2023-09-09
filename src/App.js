import React from 'react'
import {BiSolidCommentAdd} from "react-icons/bi"
import { useState } from 'react'



const App = () => {
          const [todolist,settodolist] = useState([]);
          const [text,settext] = useState("");

          const addtolist = () => {

            settodolist(pre => [...pre,text,]);
            settext("");
          }
           const removeTolist = (inx) => {
                  
               settodolist(pre => pre.filter((v,i) => i !==inx));

           }   
        
  return (
    <>
    <div style={{marginLeft:"400px", border:"1px solid gray",marginTop:"200px" }}>

         <input value={text} onChange={(e) => settext(e.target.value)} type="text" placeholder='enter your text' style={{outline:"none",width:"200px",padding:"10px"}}/>

         <button onClick={addtolist} style={{marginLeft:"20px",marginTop:"30px"}}><BiSolidCommentAdd size="20px" style={{marginTop:"2px",padding:"10px"  }}/> </button>  
            
    </div>
       <div style={{marginLeft:"550px",marginTop:"-200px"  }}>
           <ol>
            {
              todolist.map((todo,i) => {
                return(
                        <List key={i} name={todo} index={i} removeTolist={removeTolist}/>
                )
              })
            }
           </ol>
       </div>
    
   </>
  )
}
   const List = ({name,index,removeTolist}) => {
      return(
             <li>
              <div>
                <span>{name}</span>
                 <button onClick={() => removeTolist(index)}>delete</button>
                </div>
             </li>
      )
   }
export default App