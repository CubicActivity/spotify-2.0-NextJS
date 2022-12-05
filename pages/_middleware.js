import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
    //Token will exist if user is logged in 
    const token = await getToken({ req, secret: process.env.JWT_SECRET });


    const { pathname } = req.nextUrl
    const url = req.nextUrl.clone()


    //Allow the requests if the follwing is true...
    // 1) Its a request for next-auth session & provider fetching  
    // 2) the token exists
    if (url.pathname.includes('/api/auth') || token) {
        return NextResponse.next();
    }
    // Redirect them to login they dont havetoken AND are requesting a protected route
    if (!token && url.pathname !== "/login") {
        url.pathname = '/login'
        return NextResponse.redirect(url);
    }
}