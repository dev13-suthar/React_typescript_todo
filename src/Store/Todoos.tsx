
import React, { createContext, useContext, useState } from "react"

export const TodosContext = createContext<TodoContexts | null>(null);
type ChildrenProp = {
    children:React.ReactNode,
}
export type Todo = {
    id:string,
    task:string,
    iscomplete:boolean,
    createdAt:Date,
}
export type TodoContexts = {
    todos:Todo[],
    handleAddtodo: (task:string)=>void,
}

export const TodosProvider = ({children}:ChildrenProp)=>{
    const [todos, settodos] = useState<Todo[]>([])
    const handleAddtodo = (tasks:string)=>{
        settodos((prev)=>{
            const newTodos:Todo[] = [
                {
                    id:Math.random().toString(),
                    task:tasks,
                    iscomplete:false,
                    createdAt:new Date()
                },
                ...prev
            ]
            return newTodos;
        })
    }
    return <TodosContext.Provider value={{todos,handleAddtodo}}>
            {children}
    </TodosContext.Provider>
}

//Consumer

export const useTodos = ()=>{
    const TodosCunsumer = useContext(TodosContext);
    if(!TodosCunsumer){
        throw new Error("Provider is used Outside")
    }

    return useTodos
}