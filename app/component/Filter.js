"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

const filters = [
  { label: "All Cabin", value: "all" },
  { label: "1-3 guests", value: "small" },
  { label: "4-7 guests", value: "medium" },
  { label: "8-12 guests", value: "large" },
];

function Filter() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const activeFilter = searchParams.get("capacity") ?? "all";

  function handleFilter(filter) {
    const params = new URLSearchParams(searchParams.toString());
    params.set("capacity", filter);
    router.replace(`${pathName}?${params.toString()}`, { scroll: false });
  }

  return (
    <div className="mb-10 flex justify-end">
      <div className="inline-flex max-w-full flex-wrap items-center justify-end gap-3 rounded-full border border-primary-800/80 bg-primary-950/70 p-2 shadow-lg shadow-black/20 backdrop-blur-sm">
        {filters.map((filter) => {
          const isActive = filter.value === activeFilter;

          return (
            <Button
              key={filter.value}
              isActive={isActive}
              onClick={() => handleFilter(filter.value)}
            >
              {filter.label}
            </Button>
          );
        })}
      </div>
    </div>
  );
}

function Button({ children, isActive, onClick }) {
  return (
    <button
      type="button"
      className={`rounded-full px-5 py-2.5 text-sm font-semibold uppercase tracking-[0.18em] transition-all sm:px-6 ${
        isActive
          ? "bg-accent-500 text-primary-900 shadow-md shadow-accent-500/30"
          : "text-primary-200 hover:bg-primary-800 hover:text-primary-50"
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
export default Filter;
