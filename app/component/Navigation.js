import Image from "next/image";
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
      <ul className="flex flex-wrap gap-2 text-sm text-stone-600">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="inline-flex rounded-md px-3 py-2 transition hover:bg-stone-100 hover:text-stone-950"
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
