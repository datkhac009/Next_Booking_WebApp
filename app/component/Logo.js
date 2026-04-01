import Image from "next/image";
import Link from "next/link";

function Logo() {
  return (
    <div>
      <Link
        href="/"
        className="flex items-center gap-3 text-lg font-semibold text-stone-800"
      >
        <Image
          src="/logo.png"
          alt="Wild Oasis logo"
          width={44}
          height={44}
          className="h-11 w-auto"
          priority
        />
        <span>Wild Oasis</span>
      </Link>
    </div>
  );
}

export default Logo;
