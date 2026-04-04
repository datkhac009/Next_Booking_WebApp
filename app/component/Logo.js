import Image from "next/image";
import Link from "next/link";

function Logo() {
  return (
    <div>
      <Link
        href="/"
        className="flex items-center gap-3 text-lg font-semibold tracking-[0.18em] text-stone-100 uppercase"
      >
        <Image
        
          src="/logo.png"
          alt="Wild Oasis logo"
          width={60}
          height={60}
          quality={100}
          className="h-11 w-auto"
          priority
        />
        <span>The Wild Oasis</span>
      </Link>
    </div>
  );
}

export default Logo;
