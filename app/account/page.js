import { auth } from "@/_lib/auth";

export const metadata = {
  title: "Account",
  description: "Basic website layout for The Wild Oasis",
  icons: {
    icon: "/logo.png",
  },
};

export default async function Page() {
  const session = await auth();
  const fullName = session?.user?.name ?? "Guest";

  return (
    <h2 className="mb-7 text-2xl font-semibold text-accent-400">
      Welcome, {fullName}
    </h2>
  );
}

