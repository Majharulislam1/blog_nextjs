// import { NextRequest, NextResponse } from "next/server"


import { NextRequest, NextResponse } from "next/server";


export function middleware(request: NextRequest) {
    const token = request.cookies.get('next-auth.session-token')

    if (!token) {
        return NextResponse.redirect(new URL('/login', request.url))
    }

    return NextResponse.next()
}

export const config = {
    matcher: ['/dashboard'],
}

export { default } from "next-auth/middleware"

export const config = { matcher: ["/dashboard"] }


