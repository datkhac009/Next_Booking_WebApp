import Link from "next/link";
import {
  CalendarDaysIcon,
  HomeIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import SignOutButton from "@/component/SignOutButton";

const navLinks = [
  {
    name: "Home",
    href: "/account",
    icon: <HomeIcon className="h-5 w-5 text-primary-600" />,
  },
  {
    name: "Reservations",
    href: "/account/reservations",
    icon: <CalendarDaysIcon className="h-5 w-5 text-primary-600" />,
  },
  {
    name: "Guest profile",
    href: "/account/profile",
    icon: <UserIcon className="h-5 w-5 text-primary-600" />,
  },
];

function SideNavigation() {
  return (
    <nav className="border-b border-primary-900 pb-4 lg:border-b-0 lg:border-r lg:pb-0">
      <ul className="flex gap-2 overflow-x-auto pb-2 text-base lg:h-full lg:flex-col lg:pb-0 lg:text-lg">
        {navLinks.map((link) => (
          <li key={link.name} className="shrink-0">
            <Link
              className="flex items-center gap-3 rounded-xl px-4 py-3 font-semibold text-primary-200 transition-colors hover:bg-primary-900 hover:text-primary-100 lg:gap-4 lg:px-5"
              href={link.href}
            >
              {link.icon}
              <span className="whitespace-nowrap">{link.name}</span>
            </Link>
          </li>
        ))}

        <li className="shrink-0 ">
          <SignOutButton />
        </li>
      </ul>
    </nav>
  );
}

export default SideNavigation;
