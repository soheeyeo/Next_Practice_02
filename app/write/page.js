import { getServerSession } from "next-auth"
import WritePost from "./WritePost"
import { authOptions } from "@/pages/api/auth/[...nextauth]"

export default async function Write() {
    let session = await getServerSession(authOptions)
    return (
        <div className="p-20">
        {
            session ?
            <WritePost/>
            : <h4>로그인을 해주세요.</h4>
        }
        </div>
    )
}