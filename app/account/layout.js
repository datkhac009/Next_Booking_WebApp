import SideNavigation from "@/component/SideNavigation";

export default function Layout({ children }) {
  return (
    <div className="grid h-full grid-cols-1 gap-8 lg:grid-cols-[16rem_1fr] lg:gap-12">
      <SideNavigation />
      <div className="py-1">{children}</div>
    </div>
  );
}
