"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";

function SignInButton() {
  return (
    <button
      className="group inline-flex w-full items-center justify-center gap-4 rounded-2xl border border-white/10 bg-white px-6 py-4 text-base font-semibold text-primary-950 shadow-[0_24px_60px_-24px_rgba(0,0,0,0.5)] transition duration-200 hover:-translate-y-0.5 hover:bg-accent-400 hover:text-primary-950 sm:text-lg"
      // Khi đăng nhập Google xong thì luôn chuyển vào khu account.
      onClick={() => signIn("google", { callbackUrl: "/account" })}
    >
      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary-50 shadow-sm transition group-hover:bg-white">
        <Image
          src="https://authjs.dev/img/providers/google.svg"
          alt="Google logo"
          width={24}
          height={24}
        />
      </span>
      <span>Continue with Google</span>
    </button>
  );
}

export default SignInButton;
