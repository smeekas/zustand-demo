import React from 'react'
import { useTodo } from './store'

function FetchTodos() {
    const store=useTodo();
    console.log(store.fetchedTodos)
  return (
    <>
      <button onClick={() => store.fetchTodos()}>click to fetch todos</button>
      <div className='fetchedTodoList'>
        {store.fetchedTodos.map(item=>{
            return <span className='fetchedTodo'>{item.title}</span>
        })}
      </div>
    </>

  )
}

export default FetchTodos