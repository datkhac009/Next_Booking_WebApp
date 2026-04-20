import { getCabin } from "@/_lib/data-service";
import Link from "next/link";

export const metadata = {
  title: "Booking Confirmed",
};

export default async function ThankYouPage({ searchParams }) {
  const bookingId = searchParams?.bookingId;
  const cabinId = searchParams?.cabinId;

  const cabin = cabinId ? await getCabin(cabinId).catch(() => null) : null;
  const primaryHref = cabin ? `/cabins/${cabin.id}` : "/";
  const primaryLabel = cabin ? `Back to Cabin ${cabin.name}` : "Back to home";

  return (
    <section className="flex w-full items-center justify-center px-4 py-16 sm:px-6 lg:px-8">
      <div className="w-full max-w-3xl overflow-hidden rounded-[2rem] border border-white/10 bg-primary-900/80 shadow-2xl shadow-black/30">
        <div className="relative border-b border-white/10 bg-gradient-to-br from-accent-500/20 via-primary-900 to-primary-950 px-8 py-12 text-center sm:px-12">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-accent-300/40 bg-accent-500/20">
            <svg
              viewBox="0 0 24 24"
              className="h-10 w-10 text-accent-300"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M20 6 9 17l-5-5" />
            </svg>
          </div>

          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.35em] text-accent-300">
            Reservation received
          </p>
          <h1 className="mt-3 text-4xl font-semibold text-primary-50 sm:text-5xl">
            Thank you for your booking
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-primary-200 sm:text-lg">
            Your stay request has been submitted successfully. We&apos;ll keep it
            ready for your arrival at The Wild Oasis.
          </p>
        </div>

        <div className="space-y-6 px-8 py-10 sm:px-12">
          <div className="rounded-2xl border border-white/10 bg-primary-950/50 p-6">
            <p className="text-sm uppercase tracking-[0.25em] text-primary-400">
              Booking summary
            </p>
            <div className="mt-4 space-y-3 text-primary-100">
              {bookingId ? (
                <p className="text-lg font-semibold">Booking #{bookingId}</p>
              ) : null}
              <p className="text-base leading-7 text-primary-200">
                {cabin
                  ? `You can now return to ${cabin.name} or continue browsing for your next escape.`
                  : "You can head back to the homepage and continue exploring your next escape."}
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4 border-t border-white/10 pt-6 sm:flex-row sm:justify-center">
            <Link
              href={primaryHref}
              className="w-full rounded-xl bg-accent-500 px-6 py-3 text-center font-semibold text-primary-900 transition-colors hover:bg-accent-400 sm:w-auto"
            >
              {primaryLabel}
            </Link>

            {cabin ? (
              <Link
                href="/"
                className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-300 transition-colors hover:text-primary-100"
              >
                Or go to homepage
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
