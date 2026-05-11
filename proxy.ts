import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const WWW_HOST = "www.sapervedere.com.br";
const APEX_HOST = "sapervedere.com.br";

export function proxy(request: NextRequest) {
  const host = request.headers.get("host");

  if (host === WWW_HOST) {
    const url = request.nextUrl.clone();
    url.host = APEX_HOST;
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|icon.png).*)"],
};
