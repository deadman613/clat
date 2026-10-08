import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Redirect /auth/* to /(auth)/* group
  // Next.js handles route groups automatically, so /auth/login maps to (auth)/login
  // Admin routes protection
  if (pathname.startsWith("/admin")) {
    // TODO: Add auth check here when NextAuth is configured
    // const session = await getServerSession();
    // if (!session || session.user.role !== "ADMIN") {
    //   return NextResponse.redirect(new URL("/auth/login", request.url));
    // }
  }

  // Student dashboard protection
  if (pathname.startsWith("/dashboard")) {
    // TODO: Add auth check here when NextAuth is configured
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization)
     * - favicon.ico
     * - public folder
     * - api routes
     */
    "/((?!_next/static|_next/image|favicon.ico|public/|api/).*)",
  ],
};
