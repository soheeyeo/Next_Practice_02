'use client'

import { useState } from "react"

export default function Comment(props) {
    let [comment, setComment] = useState('')
    return(
        <div>
            <div>댓글목록 보여줄 부분</div>
            <input onChange={(e)=>{ setComment(e.target.value) }}/>
            <button onClick={()=>{
                console.log(comment)
                fetch('/api/comment/new', {
                    method : 'POST', 
                    body : JSON.stringify({comment : comment, _id : props._id})
                })
            }}>댓글전송</button>
        </div>
    )
}