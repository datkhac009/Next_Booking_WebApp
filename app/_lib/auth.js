import NextAuth from "next-auth";
import { getServerSession } from "next-auth";
import Google from "next-auth/providers/google";
//Setup NEXTAUTH With GOOGLE
export const authConfig = {
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
};

export function auth() {
  return getServerSession(authConfig);
}

export default NextAuth(authConfig);
