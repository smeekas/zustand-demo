import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { useTodo } from './store'
import TodoList from './TodoList/TodoList';
import { callutil } from './utils/utility';
import { useInfo } from './store/info';

function App() {
  // const [count, setCount] = useState(0)
  const store = useTodo();
  const inputRef = useRef<HTMLInputElement>(null);
  const userRef = useRef<HTMLInputElement>(null);
  const infoStore = useInfo()
  const addUserHandler = () => {
    const value = userRef.current?.value
    if (value && value.trim().length > 0) {
      store.setUser(value)
      userRef.current.value = ""
    }
  }
  const addHandler = () => {
    const value = inputRef.current?.value
    if (value && value.trim().length > 0) {
      store.addTodo(value)
      inputRef.current.value = ""
    }
  }

  return (
    <div className="App">
      <div>

        <h2>Hello {store.user}</h2>
        set user: <input type="text" ref={userRef} />
        <button className='btn' onClick={() => addUserHandler()}>add user</button>
        <button className='btn' onClick={() => callutil()}> call utils</button>
      </div>
      <div className='inputContainer'>

        <input ref={inputRef} className="input" type="text" />
        <button className='btn' onClick={() => addHandler()}>add it!!</button>
      </div>
      {/* <button onClick={() => store.fetchTodos()}>click it!</button> */}
      <TodoList />
      <h2>Count: {infoStore.count}</h2>
    </div>

  )
}

export default App
