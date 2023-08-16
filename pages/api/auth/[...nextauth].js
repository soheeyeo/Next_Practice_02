import { connectDB } from "@/util/database";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from 'bcrypt';

export const authOptions = {
    providers: [
        GithubProvider({
        clientId: 'bcb87dffe6bb3c463267',
        clientSecret: '700d51842d894b821eced32176910a674eebab1c',
        }),
        CredentialsProvider({
            name: "credentials",
            credentials: {
            email: { label: "email", type: "text" },
            password: { label: "password", type: "password" },
        },

        async authorize(credentials) {
            let db = (await connectDB).db('forum');
            let user = await db.collection('user_cred').findOne({email : credentials.email})
            if (!user) {
            console.log('해당 이메일은 없음');
            return null
            }
            const pwcheck = await bcrypt.compare(credentials.password, user.password);
            if (!pwcheck) {
            console.log('비번틀림');
            return null
            }
            return user
        }
        })
    ],

    session: {
        strategy: 'jwt',
        maxAge: 30 * 24 * 60 * 60 //30일
    },

    callbacks: {
        jwt: async ({ token, user }) => {
        if (user) {
            token.user = {};
            token.user.name = user.name
            token.user.email = user.email
        }
        return token;
        },
        session: async ({ session, token }) => {
        session.user = token.user;  
        return session;
        },
    },
    
    secret : 'secrettest1234',
    adapter : MongoDBAdapter(connectDB)
};
export default NextAuth(authOptions); 