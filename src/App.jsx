import Home from "./pages/Home"
import Login from "./pages/Login"
import { Routes, Route } from "react-router-dom"
import AddTask from "./pages/AddTask"
import AllTasks from "./pages/AllTasks"


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/addtask' element={<AddTask />} />
        <Route path='/alltasks' element={<AllTasks />} />

      </Routes>
    </>
  )
}

export default App