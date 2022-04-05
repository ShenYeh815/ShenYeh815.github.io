import React, { useState } from "react"

export default function TodoList({id, text, completed, todos, setTodos}) {
  const [editMode, setEditMode] = useState(false)
  const [editValue, setEditValue] = useState(text)
  const handleDelete = (e) => {
    e.preventDefault()
    let newTodos = [...todos]
    newTodos = newTodos.filter(element => element.id !== id)
    console.log(newTodos.filter(element => element.id !== id))
    setTodos(newTodos)
  }

  const handleEdit = (e) => {
    e.preventDefault()
    const newTodos = [...todos]
    const index = newTodos.findIndex(element => element.id === id)
    newTodos[index]={
      ...newTodos[index],
      text: editValue,
    }
    setTodos(newTodos)
    setEditValue("")
    setEditMode(false)

  }

  const handleCheckBox = (e) => {
    const newTodos = [...todos]
    const index = newTodos.findIndex(element => element.id === id)
    newTodos[index]={
      ...newTodos[index],
      completed: !newTodos[index].completed,
    }
    setTodos(newTodos)    
  }

  return (
    <div class="flex w-full text-base justify-between px-2">
      <div class="flex items-center space-x-2">
        <input
          type="checkbox"
          checked={completed}
          onChange={handleCheckBox}
        />
        {
          editMode ? (
            <form onSubmit={handleEdit}>
              <input
                type="text"
                value={editValue}
                onChange={(e)=>setEditValue(e.target.value)}
                class="bg-gray-500 rounded-[4px] outline-none text-sm text-white indent-2 w-[160px]"
              />
            </form>
          ) : (
            <div class="text-sm py-1">{text}</div>
          )
        }
      </div>
      <div class="flex space-x-3">
        <button 
          type="button" 
          class="text-sm text-white " 
          onClick={(e)=>setEditMode(true)}>修改</button>
        <button 
          type="button" 
          class="text-sm text-white " 
          onClick={handleDelete}>刪除</button>
      </div>
    </div>
  )
}