import { connectDB } from "@/util/database"

export default async function Home() {

  // const db = (await connectDB).db("forum")
  // let result = await db.collection('post').find().toArray()
  // console.log(result)

  await fetch('/URL', {cache : 'force-cache'})

  return (
    <div>안녕</div>
  )
}
