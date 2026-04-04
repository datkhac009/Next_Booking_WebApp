import Link from "next/link";
import Logo from "./Logo";

const links = [
  { href: "/", label: "Home" },
  { href: "/cabins", label: "Cabins" },
  { href: "/account", label: "Account" },
  { href: "/about", label: "About" },
];

function Navigation() {
  return (
    <nav className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <Logo />
      </div>
      <ul className="flex flex-wrap gap-2 rounded-full border border-white/10 bg-white/5 p-1.5 text-sm text-stone-300 backdrop-blur">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="inline-flex rounded-full px-4 py-2 transition duration-200 hover:bg-accent-500 hover:text-primary-950"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
