import { connectDB } from "@/util/database";
import bcrypt from 'bcrypt'

export default async function handler(요청, 응답) {
    if(요청.method == 'POST') {
        if(요청.body.password == '') {
            응답.status(500).json('비밀번호를 작성해주세요.')
        } else  {
            let hash = await bcrypt.hash(요청.body.password, 10)
            요청.body.password = hash
        }

        if(요청.body.name == '' || 요청.body.email == '') {
            응답.status(500).json('모두 작성해주세요.')
        } else  {
            let db = (await connectDB).db('forum');
            await db.collection('user_cred').insertOne(요청.body)
            응답.status(200).json('가입성공')
        }
    }
}