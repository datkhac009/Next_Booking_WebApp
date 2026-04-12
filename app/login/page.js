import SignInButton from "@/component/SignInButton";

export const metadata = {
  title: "Login",
};

export default function Page() {
  return (
    <section className="relative flex w-full items-center overflow-hidden py-16 sm:py-20">
      <div className="absolute left-[-8rem] top-8 h-64 w-64 rounded-full bg-accent-500/10 blur-3xl" />
      <div className="absolute bottom-0 right-[-6rem] h-72 w-72 rounded-full bg-primary-800/80 blur-3xl" />

      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14 lg:px-8">
        <div className="flex flex-col justify-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.4em] text-accent-400">
            Members Access
          </p>
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-stone-50 sm:text-5xl lg:text-6xl">
            Sign in to manage reservations.
          </h1>
         

          <div className="mt-10 flex flex-wrap gap-3 text-sm text-primary-200">
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur">
              Google sign-in
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur">
              Reservation history
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur">
              Faster future bookings
            </span>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-accent-400/20 via-transparent to-white/5 blur-2xl" />
          <div className="relative rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl sm:p-8">
            <div className="rounded-[1.5rem] border border-white/10 bg-primary-900/70 p-6 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-accent-400">
                Sign In
              </p>
              <h2 className="mt-5 text-3xl font-semibold leading-tight text-stone-50">
                Access your account
              </h2>
              <p className="mt-3 text-base leading-7 text-primary-200">
                Use your Google account to continue to The Wild Oasis guest
                dashboard.
              </p>

              <div className="mt-8">
                {/* Nút này bắt đầu flow đăng nhập Google, đăng nhập xong sẽ nhảy vào /account. */}
                <SignInButton />
              </div>

              <p className="mt-6 text-sm leading-6 text-primary-300">
                We only use your login to identify your bookings and profile
                details.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
