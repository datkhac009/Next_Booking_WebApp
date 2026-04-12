import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(request) {
  const { pathname, search } = request.nextUrl;
  const session = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });

  // getToken() trả về token nếu đã đăng nhập, còn chưa đăng nhập thì trả về null.
  const isAuthenticated = !!session;
  const isAccountRoute = pathname.startsWith("/account");

  if (isAccountRoute && !isAuthenticated) {
    // Nếu chưa đăng nhập mà cố vào /account thì đẩy sang trang login tự làm của mình.
    const signInUrl = new URL("/login", request.url);

    // callbackUrl dùng để nhớ trang user định vào ban đầu, login xong thì quay lại đúng trang đó.
    signInUrl.searchParams.set("callbackUrl", `${pathname}${search}`);
    return NextResponse.redirect(signInUrl);
  }

  // Nếu đã đăng nhập thì cho đi tiếp bình thường.
  return NextResponse.next();
}

export const config = {
  matcher: ["/account/:path*"],
};
