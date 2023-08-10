'use client'

import Link from "next/link"

export default function ListItem({result}) {

    return (
        <div>
            {
                result.map((a, i) => {
                    return (
                        <div className="list-item" key={i}>
                            <Link href={'/detail/' + result[i]._id}>
                                <h4>{a.title}</h4>
                            </Link>
                            <Link href={'/edit/' + result[i]._id}>✏️</Link>
                            <span onClick={()=>{
                                fetch('/api/post/delete', {
                                    method : 'DELETE', 
                                    body : result[i]._id
                                })
                                .then((r)=>{
                                    return r.json()
                                })
                                .then((r)=>{
                                    console.log(r)
                                })
                            }}>🗑️</span>
                            <p>1월 1일</p>
                        </div>
                    )
                })
            }
        </div>
    )
}