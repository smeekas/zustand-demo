import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import FetchTodos from './FetchTodos'
import './index.css'
import Transient, { Coords } from './Transient'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
    {/* <FetchTodos/> */}
    <Transient/>
    <Coords/>
  </React.StrictMode>,
)
