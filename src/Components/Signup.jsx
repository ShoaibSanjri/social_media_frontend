import React, { useState } from 'react'

const Signup = () => {
    const [name,setName] = useState("")
    const [gender,setGender] = useState("")
    const [password,setPassword] = useState("")
    const [email, setEmail] = useState("")
    
    const handleClick = () => {
        const payload = {
            name,gender,password,email
        }
        fetch("https://lazy-plum-clownfish-tam.cyclic.app/users/register", {
            method: "POST",
            headers: {
                'Content-type':"application/json"
            },
            body:JSON.stringify(payload)
        }).then(res => res.json()).then(res => console.log(res))
    }
  return (
    <div>
         Name: <input type="text" placeholder='enter name' value={name} onChange={(e) => setName(e.target.value)} />
         Gender: <input type="text" placeholder='enter gender' value={gender} onChange={(e) => setGender(e.target.value)} />
         Password: <input type="password" placeholder='enter password' value={password} onChange={(e) => setPassword(e.target.value)} />
         Email: <input type="email" placeholder='enter email' value={email} onChange={(e) => setEmail(e.target.value)} />
          <button onClick={handleClick} > Register </button>
    </div>
  )
}

export default Signup
