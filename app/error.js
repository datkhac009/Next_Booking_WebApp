"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="flex flex-1 items-center justify-center px-4 py-16 sm:px-6 lg:px-8">
      <div className="w-full max-w-3xl overflow-hidden rounded-3xl border border-primary-800 bg-primary-900/50 shadow-2xl shadow-black/20">
        <div className="border-b border-primary-800 bg-gradient-to-r from-accent-500/20 via-transparent to-transparent px-6 py-5 sm:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent-300">
            Something went wrong
          </p>
        </div>

        <div className="px-6 py-10 sm:px-8 sm:py-12">
          <h1 className="max-w-2xl text-4xl font-semibold leading-tight text-accent-50 sm:text-5xl">
            We couldn&apos;t load this page.
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-8 text-primary-200 sm:text-lg">
            An unexpected error interrupted this request. Try loading the page again, or return to the cabins list.
          </p>

          {error?.message && (
            <div className="mt-8 rounded-2xl border border-primary-800 bg-primary-950/70 px-5 py-4">
              <p className="text-sm uppercase tracking-[0.2em] text-primary-400">
                Error details
              </p>
              <p className="mt-3 text-sm leading-7 text-primary-200 sm:text-base">
                {error.message}
              </p>
            </div>
          )}

          <div className="mt-10 flex flex-wrap gap-4">
            <button
              onClick={() => reset()}
              className="rounded-full bg-accent-500 px-6 py-3 text-sm font-semibold text-primary-950 transition-colors hover:bg-accent-400"
            >
              Try again
            </button>

            <Link
              href="/cabins"
              className="rounded-full border border-primary-700 px-6 py-3 text-sm font-semibold text-primary-100 transition-colors hover:border-primary-500 hover:bg-primary-800/60"
            >
              Back to cabins
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
