import React, {createContext, useContext, useState } from "react"

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
    HandleTodo:(task:string)=>void,
    toggleTodoCompleted:(task:string)=>void,
    handleCLick: (task:string)=>void,
}

export const TodosProvider = ({children}:ChildrenProp)=>{
    const [todos, settodos] = useState<Todo[]>([])
    const HandleTodo = (task:string)=>{
        settodos((prev)=>{
            const newTodos:Todo[] = [
                {
                    id:Math.random().toString(),
                    task:task,
                    iscomplete:false,
                    createdAt:new Date()
                },
                ...prev
            ]
            return newTodos
        })
    }

    const toggleTodoCompleted = (id:string)=>{
        settodos((prev)=>{
            let newTodo = prev.map((todo)=>{
                if(todo.id === id){
                    return {...todo,iscomplete:!todo.iscomplete}
                }
                return todo;
            })
            return newTodo
        })
    }

    const handleCLick = (id:string)=>{
        settodos((prev)=>{
            let todos = prev.filter((f)=>f.id!==id)
            return todos;
        })
    }
    return <TodosContext.Provider value={{todos,HandleTodo,toggleTodoCompleted,handleCLick}}>
        {children}
    </TodosContext.Provider>
}
// setnewffood((f)=>f.filter((ff)=>ff.id!==id))

//Consumer
export const  useTodo = ()=>{
    const TodoConsumer = useContext(TodosContext);
    if(!TodoConsumer){
        throw new Error("used outside ")
    }
    return TodoConsumer;
}
