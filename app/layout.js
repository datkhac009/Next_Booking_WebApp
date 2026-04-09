import "./_styles/globals.css";
import Navigation from "./component/Navigation";

import { Josefin_Sans } from "next/font/google";
import { ReservationProvider } from "./component/ReservationContext";
const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    template: "%s / The Wild Oasis",
    default: "Welcome / The Wild Oasis",
  },
  description: "Basic website layout for The Wild Oasis",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`min-h-screen bg-primary-950 ${josefin.className} text-stone-100 antialiased`}
      >
        <div className="relative flex min-h-screen flex-col overflow-hidden">
          <header className="relative z-20 border-b border-white/10 py-6">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
              <Navigation />
            </div>
          </header>

          <main className="relative z-10 flex flex-1">
            <ReservationProvider>{children}</ReservationProvider>
          </main>

          <footer className="relative z-20 border-t border-white/10 py-6 text-sm text-stone-400">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
              <p>The Wild Oasis</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
