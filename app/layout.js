import "./_styles/globals.css";
import Navigation from "./component/Navigation";

export const metadata = {
  title: {
    template: "%s / The Wild Oasis",
    default: "Welcome / The Wild Oasis",
  },
  description: "Basic website layout for The Wild Oasis",
  icons:{
    icon:"/logo.png"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-stone-50 text-stone-800 antialiased">
        <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-4 sm:px-6 lg:px-8">
          <header className="border-b border-stone-200 py-5">
            <Navigation />
          </header>

          <main className="flex-1 py-10">{children}</main>

          <footer className="border-t border-stone-200 py-5 text-sm text-stone-500">
            <p>The Wild Oasis</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
