import { connectDB } from "@/util/database"

export const dynamic = 'force-dynamic'

import ListItem from "./ListItem"

export default async function List() {

    const db = (await connectDB).db("forum")
    let result = await db.collection('post').find().toArray()

    return (
        <div className="list-bg">
            <ListItem result={result}/>
        </div>
    )
}