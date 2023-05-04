import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import { getInfo } from './info'
import { persist, devtools, createJSONStorage,subscribeWithSelector, } from 'zustand/middleware'
import { v4 as uuid } from 'uuid'
interface UseTodoType {
    todoList: { todo: string, id: string }[]
    user: string,
    fetchedTodos: { userId: number, id: number, title: string, completed: string }[]
    addTodo: (todo: string) => void,
    deleteTodo: (id: string) => void,
    fetchTodos: () => void,
    setUser: (user: string) => void
}
const intialState = {
    todoList: [],
    user: "",
    fetchedTodos: []
}
/*create  function will receive callback function.
zustand will pass set function using that we can update store

we call set function with callback  which will receive state from zustand

*/

// export const useTodo = create<UseTodoType>(
//     //return only what is changing
//     //!IMMUTABLE
//   (set,get) => ({
//         ...intialState,
//         addTodo: (todo: string) => {
//             return set((state) => {

//                 return {
//                     todoList: [...state.todoList, { id: uuid(), todo: todo }]
//                 }
//             })
//         },

//         //simplified syntax!
//         // deleteTodo: (id: string) => set(state => ({ todoList: state.todoList.filter(item => item.id !== id) })),
//         deleteTodo: (id: string) => set({ todoList: get().todoList.filter(item => item.id !== id) }),
//         setUser: (user) => set({ user: user }),

//         //simple solution to redux middleware data fetching!
//         fetchTodos: async () => {
//             const data = await fetch('https://jsonplaceholder.typicode.com/todos').then(data => data.json())
//             return set(state => ({ fetchedTodos: data }))
//         },
//     })
// )

//!using MIDDLEWARES
export const useTodo = create<UseTodoType,[["zustand/devtools", never],["zustand/persist", never],["zustand/immer", never]]>(
    //return only what is changing
   devtools(persist(immer((set) => ({
        ...intialState,
        addTodo: (todo: string) => {
            return set((state) => {
                // getInfo().setCount(1)
                state.todoList.push({ id: uuid(), todo: todo })
            })
        },

        //simplified syntax!
        deleteTodo: (id: string) => set(state => {
            // getInfo().setCount(-1)
            state.todoList = state.todoList.filter(item => item.id !== id)
        }),
        setUser: (user) => set({ user: user }),

        //simple solution to redux middleware data fetching!
        fetchTodos: async () => {
            const data = await fetch('https://jsonplaceholder.typicode.com/todos').then(data => data.json())
            return set(state => ({ fetchedTodos: data }))
        },
    })),{
        name:"todo",
        storage:createJSONStorage(()=>localStorage)
    }))
)

export const { getState, setState } = useTodo;

