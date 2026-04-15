import SideNavigation from "@/component/SideNavigation";

export default function Layout({ children }) {
  return (
    <div className="mx-auto grid h-full w-full max-w-7xl grid-cols-1 gap-8 px-4 py-8 sm:px-6 lg:grid-cols-[16rem_1fr] lg:gap-12 lg:px-8">
      <SideNavigation />
      <div className="py-1">{children}</div>
    </div>
  );
}
