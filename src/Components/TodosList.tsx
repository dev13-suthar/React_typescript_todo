
import { useTodo } from '../Store/Todoos'



export default function TodosList({todos}:any) {
    const {toggleTodoCompleted,handleCLick} = useTodo();
  return (   
    <li className="flex items-center space-x-6 m-3">
        <input type="checkbox" name="" id={`todo-${todos.id}`} checked={todos.iscomplete} onChange={()=>toggleTodoCompleted(todos.id)} />
        <label htmlFor={`todo-${todos.id}`} className={`${todos.iscomplete?'line-through':'no-underline'}`}>{todos.task}</label>
        {todos.iscomplete && <button type='button' className="bottom-2 p-1 border-red-300 rounded-lg bg-pink-300 hover:bg-pink-200" onClick={()=>handleCLick(todos.id)}>Delete</button>}
    </li>
  )
}
