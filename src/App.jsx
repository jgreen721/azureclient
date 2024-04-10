import { useState,useEffect } from 'react'
import {Canvas} from "@react-three/fiber"
import {useGLTF} from "@react-three/drei"
import './App.css'



const Scene = ()=>{
  const img = useGLTF("./planet.glb");


  return(
    <group>
      <primitive scale={.15} rotation={[0,Math.PI * .55,0]}  position={[0,-1,0]} object={img.scene}/>
    </group>
  )
}

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
      <Canvas style={{position:"absolute",height:'100%',width:"100%",background:"black",inset:0}}>
        <pointLight intensity={2}/>
      <ambientLight/>
        <Scene/>
      </Canvas>
     <h1>Mongoose CRUD App</h1>
     <h2>Total Users:{users.length}</h2>
     <h2>Todos:{todos.length}</h2>
     <form action="https://testmynodeappservice.azurewebsites.net/adduser" method="POST">
       <div className="form-div">
         <input type="text" name="username" placeholder="Username..." autoComplete="off" />
       </div>
       <div className="form-div">
         <input type="text" name="email" placeholder="Email..." autoComplete="off" />
       </div>
       <div className="form-div">
         <input type="text" name="password" placeholder="Password..." autoComplete="off" />
       </div>
       <div className="form-div">
         <button>Add User</button>
       </div>
       {users.map(u=>(
         <li style={{listStyle:"none"}} key={u._id}> 
          <h4>Username: {u.username}</h4> 
          <h4>|</h4>
          <h4>Email: {u.email}</h4> 

         </li>
       ))}
     </form>


     <strong>Footer&copy;</strong>
    </div>
  )
}

export default App
