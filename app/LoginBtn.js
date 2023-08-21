'use client'

import { signIn } from 'next-auth/react'
import { useEffect } from 'react'

export default function LoginBtn() {

    useEffect(()=>{
        if(typeof window != 'undefined') {
            localStorage.getItem('모드')
        }
    }, [])
    
    return (
        <button onClick={()=>{ signIn() }}>로그인</button>
    )
}