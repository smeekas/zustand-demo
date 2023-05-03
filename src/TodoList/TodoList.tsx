import React from 'react'
import { useTodo } from '../store'
import styles from './TodoList.module.css'
import { AiFillDelete } from 'react-icons/ai'
function TodoList() {
    const store = useTodo();
    const deleteHandler = (id: string) => {
        store.deleteTodo(id)
    }
    return (
        <div className={styles.list}>
            {
                store.todoList.map((todo) => {
                    return <div className={styles.todo} key={todo.id}>
                        <h2 className={styles.name}>{todo.todo}</h2>
                        <span className={styles.delete} onClick={() => deleteHandler(todo.id)}><AiFillDelete /></span>
                    </div>
                })
            }
        </div>
    )
}

export default TodoList