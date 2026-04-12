import NextAuth from "next-auth";
import { getServerSession } from "next-auth";
import Google from "next-auth/providers/google";
import { createGuest, getGuest } from "./data-service";

// Cấu hình auth dùng chung cho route đăng nhập và các chỗ cần đọc session ở phía server.
export const authConfig = {
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      try {
        // Tìm guest theo email Google trả về.
        const existingGuest = await getGuest(user.email);

        if (!existingGuest) {
          // Nếu chưa có guest trong Supabase thì tạo mới ngay lúc đăng nhập.
          await createGuest({
            email: user.email,
            fullname: user.name,
          });
        }

        return true;
      } catch (error) {
        console.error("ERROR callback signIn:", error);
        return false;
      }
    },
    async session({ session }) {
      // Lấy guest để gắn guestId vào session, tiện dùng ở các trang account/booking.
      const guest = await getGuest(session.user.email);

      session.user.guestId = guest?.id ?? null;
      return session;
    },
  },
};

export function auth() {
  // Lấy session hiện tại ở phía server, dùng được trong Server Component, layout và page.
  return getServerSession(authConfig);
}

export default NextAuth(authConfig);
