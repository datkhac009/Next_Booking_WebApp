import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/solid";
import { signOut } from "next-auth/react";

function SignOutButton() {
  return (
    <button
      className="flex w-full items-center gap-3 rounded-xl px-4 py-3 font-semibold text-primary-200 transition-colors hover:bg-primary-900 hover:text-primary-100 lg:gap-4 lg:px-5"
      // Logout xong thì đưa user về trang chủ public.
      onClick={() => signOut({ callbackUrl: "/" })}
    >
      <ArrowRightOnRectangleIcon className="h-5 w-5 text-primary-600" />
      <span className="whitespace-nowrap">Sign out</span>
    </button>
  );
}

export default SignOutButton;
