export {auth as middleware} from '@/lib/auth'

export const config = {
    // Match all request paths except start with these names
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico).*)'
    ]
}