import React from 'react'
import { useTodo } from '../Store/Todoos'

export default function Completed() {
  const {todos} = useTodo();
  // const {toggleTodoCompleted,handleCLick} = useTodo();
  const Completed = todos.filter((f)=>f.iscomplete===true)
 
  return (
    <section className="w-[100%] px-2 py-4 flex flex-col">
      {Completed.map((item)=><li key={item.id} className='m-2'>
          {item.task}
      </li>)}
    </section>
  )
}
