import React, { createContext, useState } from "react"

export type TodosProvider= {
    children: React.ReactNode
}
export type Todo = {
    id:string;
    task:string;
    isCompleted:boolean;
    createdAt:Date;
}
export type ContextType = {
   todos:Todo[];
   handleAddtodo: (task:string)=>void;
}
export const todosContext  = createContext<ContextType|null>(null);

export const TodosProcider = ({children}:TodosProvider)=>{
    const [todos, settodos] = useState<Todo[]>([])
    const handleAddtodo  = (task)=>{
            settodos((prev)=>{
                const newTodos:Todo[] = [
                    {
                        id:Math.random().toString(),
                        task:task,
                        isCompleted:false,
                        createdAt:new Date()
                    },
                    ...prev
                ] 
                return newTodos;
            })
    }
    return <todosContext.Provider value={{todos,handleAddtodo}}>
        {children}
    </todosContext.Provider>
}

export default function Todoos() {
  return (
    <div>
        
    </div>
  )
}
