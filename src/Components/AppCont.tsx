import { useEffect,useState } from "react";
import {Link,useNavigate} from "react-router-dom"
import { Outlet} from "react-router-dom";
import { TodosContext, useTodos } from "../Store/Todoos";
 export default function AppCont() {
    const [Value, setValue] = useState('')
    const {todos} = useTodos(); 
    const navigate = useNavigate()
    useEffect(() => {
       navigate('/all')
    }, [navigate])
    
    const handleSubmit = (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        handleAddtodo(Value);
        setValue("")
    };
  return (
    <div className="w-[90%]  m-auto  px-2 py-4">
        <nav className="p-2 bg-red-200">
            <ul className="flex items-center justify-between gap-5">
                <Link  to='/active'  className="list-none uppercase tracking-wider active:font-bold  active:underline">Active</Link> 
                <Link  to='/all' className="list-none uppercase tracking-wider active:font-bold  active:underline">All</Link> 
                <Link  to='/completed' className="list-none uppercase tracking-wider active:font-bold  active:underline">Completed</Link> 
            </ul>
        </nav>
        <form className="flex items-center gap-4 justify-center my-5" onSubmit={handleSubmit}>
            <input className="w-48 px-2 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-4 border-2 " type="text" name="text" id="todo"  value={Value} onChange={(e)=>setValue(e.target.value)} placeholder="Enter Todo" />
            <button className="px-2 py-2 border-2 rounded-lg hover:bg-red-50 transition-all duration-300">Search</button>
        </form>
        <main className="mt-5 bg-stone-50 px-2 py-2">
            <Outlet/>
        </main>
    </div>
  )
}
