import Image from "next/image";
import Link from "next/link";
import bg from "../public/bg.png"
export default function Home() {
  return (
    <section className="relative flex flex-1 items-center justify-center overflow-hidden">
      <div className="fixed inset-0 z-0">
        <Image
          src={bg}
          fill
          placeholder="blur"
          quality={80}
          className="object-cover object-top"
          alt="Mountains and forests with two cabins"
          priority
        />
      </div>

      <div className="fixed inset-0 z-10 bg-primary-950/35" />

      <div className="relative z-20 flex flex-col items-center justify-center px-6 py-16 text-center">
        <h1 className="mb-10 text-6xl font-normal tracking-tight text-primary-50 sm:text-7xl lg:text-8xl">
          Welcome to paradise.
        </h1>

        <Link
          href="/cabins"
          className="bg-accent-500 px-8 py-6 text-lg font-semibold text-primary-800 transition-all hover:bg-accent-600"
        >
          Explore luxury cabins
        </Link>
      </div>
    </section>
  );
}
