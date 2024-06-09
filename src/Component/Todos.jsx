import TodoItem from "./TodoItem";
import { useState } from "react";
import React from 'react'
import photo from "../Study.jpg"
import "../style.css"
import Add from "./Add";
import uber from "../Uber.jpg"
export default function Todos() {

  const [todos,settodoo] = useState([ { sno:1,
    title:"Study Timing",
  description:"We need to study to hard to do this task",
  
   },
  { sno:2,
    title:"Need to do Uber ",
  description:"Uber is a part time job ",
  
   },
  { sno:3,
    title:"Need to go market ",
  description:"Coles and wollies to buy something",
  
  }
    ]);

  const onDelete = (todo) =>{

    console.log("Deleted")
    settodoo(todos.filter((e)=>{
      return e!==todo;
    }))
    }
  
  const addTodo = (title, desc) =>{
      console.log("I am adding this ", title)
      let sno;
      if(todos.length===0){
        sno = 0;
      }
      else{
        sno = todos[todos.length-1].sno +1};
      
      const myTodo = {
        sno:sno,
        title:title,
        description:desc
      }

      settodoo([...todos, myTodo]);


      console.log(myTodo)

    }
  
  return (
    <>
    <Add addTodo={addTodo}/>
    <div className="container">
    <div className="todo-container">{ todos.length===0? <h2 className="text-center my-3" >Nothing to display</h2>:

      todos.map((todo) => (

        <div className="todo-item" key={todo.sno}>
        <TodoItem 
          todo = {todo}
          
          // number={todo.sno}
          // title={todo.title}
          // description={todo.description}
          // details={todo.details}
          // image={todo.imi}
          onDelete={onDelete}
        
        />
        </div>
      ))}
    </div>
    </div>
    </>
  )
}
