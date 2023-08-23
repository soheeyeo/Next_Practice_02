import { NextResponse } from 'next/server'

export async function middleware(request) {
    console.log(request.nestUrl)
    console.log(request.cookies)
    console.log(request.headers)
    NextResponse.next()
    NextResponse.redirect()
    NextResponse.rewrite()
}