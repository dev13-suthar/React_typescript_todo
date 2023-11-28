import { createBrowserRouter,RouterProvider } from "react-router-dom"
import Applayout from "./Applayout"
import AppCont from "./Components/AppCont"
import Completed from "./Components/Completed"
import ActiveTodo from "./Components/ActiveTodo"
import AllTodos from "./Components/AllTodos"

export default function App() {
  const router = createBrowserRouter([{
      path:'/',
      element:<Applayout/>,
      children:[
        {path:'/all', element:<AllTodos/> },
        {path:'/completed', element:<Completed/>},
        {path:'/active', element:<ActiveTodo/>},
        {path:'/contact', element:<h2>plsss contact kardo bhaii</h2>},
      ]
  }])
  return (
    <>
      <RouterProvider router={router}/>
   </>
  )
}

