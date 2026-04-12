import Image from "next/image";
import Link from "next/link";
import Logo from "./Logo";
import { auth } from "@/_lib/auth";

export default async function Navigation() {
  const session = await auth(); // Lấy session ở server để render đúng link theo trạng thái đăng nhập.
  const linkClassName =
    "inline-flex h-11 items-center rounded-full px-4 text-sm font-medium tracking-wide transition duration-200 hover:bg-accent-500 hover:text-primary-950";

  return (
    <nav className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
      <div className="shrink-0">
        <Logo />
      </div>
      <ul className="flex w-fit flex-wrap items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1.5 text-stone-300 backdrop-blur sm:ml-auto">
        <li>
          <Link href="/" className={linkClassName}>
            Home
          </Link>
        </li>

        <li>
          <Link href="/cabins" className={linkClassName}>
            Cabins
          </Link>
        </li>

        <li>
          <Link href="/about" className={linkClassName}>
            About
          </Link>
        </li>

        <li>
          <Link
            // Chưa đăng nhập thì vào trang login, còn đã đăng nhập thì đi thẳng tới account.
            href={session?.user ? "/account" : "/login"}
            className={`${linkClassName} gap-3`}
          >
            {session?.user?.image && (
              <Image
                src={session.user.image}
                alt={session.user.name ?? "User avatar"}
                width={32}
                height={32}
                className="h-8 w-8 rounded-full object-cover"
                referrerPolicy="no-referrer"
              />
            )}
            <span>{session?.user ? "Account" : "Sign in"}</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
