export default function Home() {
  return (
    <section className="space-y-4 py-8">
      <p className="text-sm uppercase tracking-[0.2em] text-stone-500">
        Welcome
      </p>
      <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-stone-900 sm:text-5xl">
        The Wild Oasis. A clean base layout with header, main, and footer.
      </h1>
      <p className="max-w-2xl text-lg leading-8 text-stone-600">
        This page now sits inside the shared layout so the rest of the site can
        reuse the same structure consistently.
      </p>
    </section>
  );
}
