import React, { useState } from "react"
import uniqid from "uniqid"
import TodoList from "./TodoList"

export default function TodoApp(props) {
  const [todos, setTodos] = useState([
    {
      id:uniqid(),
      text:"新增一個代辦事項",
      completed:false,
    },
    {
      id:uniqid(),
      text:"按下左邊框框完成事項",
      completed:true,
    }
  ])

  const [value, setValue] = useState("")

  const addTodo = (e) => {
    e.preventDefault()
    const newTodos = [...todos]
    newTodos.push({
      id:uniqid(),
      completed:false,
      text:value,
    })
    setTodos(newTodos)
    setValue("")
  }

  return (
    <div class="flex flex-col items-center">
      <div class="flex flex-col items-center w-[320px] h-[640px] bg-gray-800">
        <h1 class="text-4xl text-white p-2">Todo List</h1>
        <form onSubmit={addTodo}>
          <input 
            class="bg-gray-500 rounded-[4px] outline-none text-sm text-white indent-2"
            value={value}
            onChange={(e)=>setValue(e.target.value)}
            required
          />
          <button class="text-sm text-white bg-gray-500 px-2 ml-2 rounded-[4px] outline outline-gray-800 outline-1 active:bg-gray-400">新增</button>
        </form>
        <div class="flex flex-col items-center w-[280px] h-[560px] border-[1px] my-5 text-white ">
          {
            todos.map(({id, text, completed}) => {
              return (
                <TodoList
                  id = {id}
                  completed = {completed}
                  text = {text}
                  todos={todos}
                  setTodos={setTodos}
                />
              )
            })
          }
        </div>
      </div>
    </div>
  )
}