const pulseBlock = "animate-pulse rounded-full bg-primary-800/70";

function CabinLoadingCard({ reversed = false }) {
  return (
    <article
      className={`w-full max-w-[80rem] overflow-hidden border border-primary-800 bg-primary-950 lg:flex lg:min-h-[24rem] ${
        reversed ? "lg:flex-row-reverse" : ""
      }`}
    >
      <div className="h-72 animate-pulse bg-primary-800/70 md:h-80 lg:w-[52%] lg:flex-shrink-0" />

      <div className="flex flex-1 flex-col justify-between">
        <div className="flex flex-1 flex-col justify-center px-6 pb-6 pt-6 sm:px-8 sm:pt-8">
          <div className={`mx-auto mb-4 h-10 w-48 lg:mx-0 ${pulseBlock}`} />
          <div className="mx-auto mb-5 h-6 w-56 animate-pulse rounded-full bg-primary-800/60 lg:mx-0" />
          <div className={`mx-auto h-12 w-40 lg:mx-0 ${pulseBlock}`} />
        </div>

        <div className="border-t border-primary-800 px-6 py-5">
          <div className={`mx-auto h-7 w-52 lg:mx-0 ${pulseBlock}`} />
        </div>
      </div>
    </article>
  );
}

export default function Loading() {
  return (
    <section className="mx-auto flex w-full max-w-8xl flex-col px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto mb-5 h-12 w-80 animate-pulse rounded-full bg-primary-800/70" />
      <div className="mx-auto mb-10 flex w-full max-w-3xl flex-col gap-3">
        <div className="h-5 animate-pulse rounded-full bg-primary-800/60" />
        <div className="h-5 animate-pulse rounded-full bg-primary-800/60" />
        <div className="mx-auto h-5 w-3/4 animate-pulse rounded-full bg-primary-800/60" />
      </div>

      <div className="flex flex-col items-center gap-8 lg:gap-12">
        <CabinLoadingCard />
        <CabinLoadingCard reversed />
        <CabinLoadingCard />
      </div>
    </section>
  );
}
