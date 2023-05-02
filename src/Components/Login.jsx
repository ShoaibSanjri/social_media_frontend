import React, { useState } from 'react'

const Login = () => {
    const [password,setPassword] = useState("")
    const [email, setEmail] = useState("")
    
    const handleClick = () => {
        const payload = {
            password,email
        }
        fetch("https://lazy-plum-clownfish-tam.cyclic.app/users/login", {
            method: "POST",
            headers: {
                'Content-type':"application/json"
            },
            body:JSON.stringify(payload)
        }).then(res => res.json()).then(res => console.log(res))
    }
  return (
    <div>
         Password: <input type="password" placeholder='enter password' value={password} onChange={(e) => setPassword(e.target.value)} />
         Email: <input type="email" placeholder='enter email' value={email} onChange={(e) => setEmail(e.target.value)} />
          <button onClick={handleClick} > Login </button>
    </div>
  )
}

export default Login
