import React, { useState } from 'react'

const CreatePost = () => {
    const [title,setTitle] = useState("")
    const [body,setBody] = useState("")
    const [device, setDevice] = useState("")
    const [token, setToken] = useState("")
    
    
    const handleClick = () => {
        const payload = {
            title,body,device
        }
        fetch("https://lazy-plum-clownfish-tam.cyclic.app/posts/create", {
            method: "POST",
            headers: {
                'Authorization':`Bearer ${token}`,
                'Content-type':"application/json"
            },
            body:JSON.stringify(payload)
        }).then(res => res.json()).then(res => console.log(res)).then(err => console.log(err))
    }
  return (
    <div>
         title: <input type="text" placeholder='enter title' value={title} onChange={(e) => setTitle(e.target.value)} />
         body: <input type="text" placeholder='enter body' value={body} onChange={(e) => setBody(e.target.value)} />
         device: <input type="text" placeholder='enter device' value={device} onChange={(e) => setDevice(e.target.value)} />
         Token: <input type="text" placeholder='enter token' value={token} onChange={(e) => setToken(e.target.value)} />
         
          <button onClick={handleClick} > Create Post </button>
    </div>
  )
}

export default CreatePost
