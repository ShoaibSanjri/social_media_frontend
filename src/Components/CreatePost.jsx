import React, { useState } from 'react'

const CreatePost = () => {
    const [title,setTitle] = useState("")
    const [body,setBody] = useState("")
    const [device,setDevice] = useState("")
    
    
    const handleClick = () => {
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRob3JJR…0Mzl9.zVXAYBSdBAV4NwXKdqyEBL4SeEijq72U8lQsBHvMDQE"
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
          <button onClick={handleClick} > Create Post </button>
    </div>
  )
}

export default CreatePost
