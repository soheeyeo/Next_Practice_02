import { connectDB } from "@/util/database"

export default async function List() {

    const db = (await connectDB).db("forum")
    let result = await db.collection('post').find().toArray()
    console.log(result[0].title)

    return (
        <div className="list-bg">
        {
            result.map((a, i) => {
                return (
                    <div className="list-item" key={i}>
                        <h4>{a.title}</h4>
                        <p>{a.content}</p>
                    </div>
                )
            })
        }
        </div>
    )
}