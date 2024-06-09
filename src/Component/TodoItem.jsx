import React from 'react'
import Cards from './Cards'
import Buttons from "./Buttons"
const TodoItem = ({todo,onDelete}) => {
    
  return (
    <div className="my-3">

      <Cards key = {todo.number} number = {todo.number} title = {todo.title} description = {todo.description} details = {todo.details} image = {todo.imi}/>
      <br />
      <Buttons title = "Delete item" todo = {todo} color = "danger" onDelete = {onDelete}/>
    </div>

  )
}

export default TodoItem
