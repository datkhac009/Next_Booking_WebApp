function DetailInfoSkeleton() {
  return (
    <div className="flex flex-col justify-center px-6 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-14">
      <div className="mb-8 flex items-center gap-4">
        <div className="h-9 w-40 animate-pulse rounded-full bg-primary-800/70" />
        <div className="h-9 w-24 animate-pulse rounded-full bg-primary-800/60" />
      </div>

      <div className="mb-8 border-b border-primary-800 pb-8">
        <div className="mb-4 h-14 w-72 animate-pulse rounded-2xl bg-primary-800/70" />
        <div className="space-y-3">
          <div className="h-5 w-full animate-pulse rounded-full bg-primary-800/60" />
          <div className="h-5 w-full animate-pulse rounded-full bg-primary-800/60" />
          <div className="h-5 w-5/6 animate-pulse rounded-full bg-primary-800/60" />
          <div className="h-5 w-2/3 animate-pulse rounded-full bg-primary-800/60" />
        </div>
      </div>

      <div className="mb-10 space-y-5">
        <div className="h-[76px] animate-pulse rounded-2xl border border-primary-800 bg-primary-950/60" />
        <div className="h-[76px] animate-pulse rounded-2xl border border-primary-800 bg-primary-950/60" />
        <div className="h-[76px] animate-pulse rounded-2xl border border-primary-800 bg-primary-950/60" />
      </div>

      <div className="h-32 animate-pulse rounded-2xl border border-primary-800 bg-primary-950/70" />
    </div>
  );
}

export default function Loading() {
  return (
    <section className="mx-auto mt-8 max-w-[88rem] px-4 pb-16 sm:px-6 lg:px-8">
      <div className="overflow-hidden rounded-3xl border border-primary-800 bg-primary-900/40 shadow-2xl shadow-black/20">
        <div className="grid lg:grid-cols-[1.55fr_1fr]">
          <div className="min-h-[20rem] animate-pulse bg-primary-800/70 lg:min-h-[28rem] xl:min-h-[30rem]" />
          <DetailInfoSkeleton />
        </div>
      </div>

      <div className="mt-14">
        <div className="mx-auto h-12 w-96 max-w-full animate-pulse rounded-full bg-primary-800/70" />
      </div>
    </section>
  );
}
