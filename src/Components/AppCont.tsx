import { useEffect,useState } from "react";
import {NavLink,useNavigate} from "react-router-dom"
import { Outlet} from "react-router-dom";
import { useTodo } from "../Store/Todoos";
 export default function AppCont() {
    const [Value, setValue] = useState('')
    const {HandleTodo} = useTodo();
    const navigate = useNavigate()
    useEffect(() => {
       navigate('/all')
    }, [navigate])
    
    const handleSubmit = (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        if(Value==="") return
        HandleTodo(Value);
        setValue("")
    };
  return (
    <div className="w-[90%]  m-auto  px-2 py-4">
        <nav className="p-2 bg-red-200">
            <ul className="flex items-center justify-between gap-5">
                <NavLink  to='/active'  className="list-none uppercase tracking-wider">Active</NavLink> 
                <NavLink  to='/all' className="list-none uppercase tracking-wider">All</NavLink> 
                <NavLink  to='/completed' className="list-none uppercase tracking-wider">Completed</NavLink> 
            </ul>
        </nav>
        <form className="flex items-center gap-4 justify-center my-5" onSubmit={handleSubmit}>
            <input className="w-48 px-2 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-4 border-2 " type="text" name="text" id="todo"  value={Value} onChange={(e)=>setValue(e.target.value)} placeholder="Enter Todo" />
            <button className="px-2 py-2 border-2 rounded-lg hover:bg-red-100 transition-all duration-300">Add</button>
        </form>
        <main className="mt-5 bg-stone-50 px-2 py-2 flex items-center justify-center  m-auto w-3/5 border-2 border-pink-400 rounded-md">
            <Outlet/>
        </main>
    </div>
  )
}
