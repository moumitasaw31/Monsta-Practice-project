import { NextResponse } from 'next/server'

export function middleware(request) {

    if (!request.cookies.get('USER')) {
        return NextResponse.redirect(new URL('/login', request.url))
    }

    return NextResponse.next();
}

// ✅ config OUTSIDE function
export const config = {
    matcher: ["/mydashboard", "/cart", "/wishlist", "/checkout" ]
}
