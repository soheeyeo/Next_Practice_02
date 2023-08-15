import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
    providers: [
        GithubProvider({
        clientId: 'bcb87dffe6bb3c463267',
        clientSecret: '700d51842d894b821eced32176910a674eebab1c',
        }),
    ],
    secret : 'secrettest1234'
};
export default NextAuth(authOptions); 