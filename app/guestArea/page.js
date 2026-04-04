export const metadata = {
  title: "Guest Area",
  description: "Basic website layout for The Wild Oasis",
  icons: {
    icon: "/logo.png",
  },
};

export default function GuestAreaPage() {
  return (
    <section className="py-8">
      <div className="rounded-[2rem] border border-white/10 bg-white/5 px-6 py-10 backdrop-blur sm:px-10 sm:py-14">
        <p className="text-sm uppercase tracking-[0.35em] text-accent-300">
          Guest Area
        </p>
        <h1 className="mt-4 text-4xl font-semibold text-stone-50 sm:text-5xl">
          Manage your stays and account details.
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-stone-300">
          This route now lives at <span className="text-stone-100">/guestArea</span>.
        </p>
      </div>
    </section>
  );
}
