import React,{useState} from 'react'
import axios from 'axios'




function Home() {
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")
    function save(e){
        setUsername(e.target.value)
    }
    function show(){
      console.log(username,password)
      axios.post("http://localhost:4000/add",{name:username,passcode:password})
          .then((res)=>{
            console.log(res)
          })
      setUsername("")
      setPassword("")

    }
  return (
    <div>
      <p><input value={username} placeholder='enter name' onChange={save}/></p>
      <p><input  value={password} placeholder='enter password' onChange={(e)=>setPassword(e.target.value)}/></p>
      <button onClick={show}>Submit</button>
    </div>
  )
}



export default Home 
