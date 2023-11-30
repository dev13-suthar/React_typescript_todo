import React from 'react'
import { useTodo } from '../Store/Todoos';
import TodosList from './TodosList';

export default function AllTodos() {
  const {todos} = useTodo();
  return (
    <>
     <section className="w-[100%] px-2 py-4 flex flex-col">
      {todos.map((todo)=><TodosList todos={todo} key={todo.id} />)}
    </section>
    </>
  )
}

