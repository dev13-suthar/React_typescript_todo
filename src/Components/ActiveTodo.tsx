import React from 'react'
import { useTodo } from '../Store/Todoos'

export default function ActiveTodo() {
  const {todos} = useTodo();
  const Active = todos.filter((todo)=>todo.iscomplete===false);
  return (
    <section className="w-[100%] px-2 py-4 flex flex-col"> 
      {Active.map((item)=><li key={item.id} className='m-2'>
          {item.task}
      </li>)}
    </section>
  )
}
