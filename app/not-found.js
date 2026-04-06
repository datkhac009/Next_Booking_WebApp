import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex flex-1 items-center justify-center px-4 py-16 sm:px-6 lg:px-8">
      <div className="w-full max-w-3xl overflow-hidden rounded-3xl border border-primary-800 bg-primary-900/50 shadow-2xl shadow-black/20">
        <div className="border-b border-primary-800 bg-gradient-to-r from-primary-200/10 via-transparent to-transparent px-6 py-5 sm:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-300">
            404 | Not found
          </p>
        </div>

        <div className="px-6 py-10 sm:px-8 sm:py-12">
          <h1 className="max-w-2xl text-4xl font-semibold leading-tight text-accent-50 sm:text-5xl">
            This page doesn&apos;t exist.
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-8 text-primary-200 sm:text-lg">
            The page you&apos;re looking for may have been moved, removed, or never existed in the first place.
          </p>

          <div className="mt-8 rounded-2xl border border-primary-800 bg-primary-950/70 px-5 py-4">
            <p className="text-sm uppercase tracking-[0.2em] text-primary-400">
              What you can do
            </p>
            <p className="mt-3 text-sm leading-7 text-primary-200 sm:text-base">
              Explore the current cabin collection or return to the home page to start again.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/"
              className="rounded-full bg-accent-500 px-6 py-3 text-sm font-semibold text-primary-950 transition-colors hover:bg-accent-400"
            >
             Back home
            </Link>

           
          </div>
        </div>
      </div>
    </section>
  );
}
