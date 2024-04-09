import { useState,useEffect } from 'react'
import './App.css'

function App() {
  const [users,setUsers] = useState([])
  const [todos,setTodos] = useState([])

  useEffect(()=>{
    fetch('https://testmynodeappservice.azurewebsites.net/api/users')
    .then(res=>res.json())
    .then(res=>{
      console.log("Res",res)
      setUsers(res.users)
    })

    fetch('https://testmynodeappservice.azurewebsites.net/api/todos')
    .then(res=>res.json())
    .then(res=>{
      console.log("Res",res)
      setTodos(res.todos)
    })
  },[]);

  return (
    <div className="app">
     <h1>Mongoose CRUD App</h1>
     <h2>Total Users:{users.length}</h2>
     <h2>Todos:{todos.length}</h2>


     <strong>Footer&copy;</strong>
    </div>
  )
}

export default App
