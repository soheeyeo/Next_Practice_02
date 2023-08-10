'use client'

import Link from "next/link"

export default function ListItem(props) {

    return (
        <div>
            {
                props.result.map((a, i) => {
                    return (
                        <div className="list-item" key={i}>
                            <Link href={'/detail/' + props.result[i]._id}>
                                <h4>{a.title}</h4>
                            </Link>
                            <Link href={'/edit/' + props.result[i]._id}>✏️</Link>
                            <span onClick={()=>{
                                fetch('/api/test', {
                                    method : 'POST', 
                                    body : JSON.stringify([1,2,3])
                                })
                                .then(()=>{
                                    console.log(123123)
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