//! Approach 1 (using matcher config)
// import { NextResponse, NextRequest } from "next/server";

// export function middleware(request: NextRequest) {
//     return NextResponse.redirect(new URL("/", request.url));
// }

// export const config = {
//     matcher: "/profile",
// };

//! Approach 2 
import { NextResponse, NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    if (request.nextUrl.pathname === "/profile")
    {
        return NextResponse.redirect(new URL("/hello", request.url));
    }
}