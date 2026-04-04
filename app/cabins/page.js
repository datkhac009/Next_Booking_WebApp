import CabinList from "@/component/CabinList";
import Loading from "./loading";
import { Suspense } from "react";

export const metadata = {
  title: "Cabins",
  description: "Basic website layout for The Wild Oasis",
  icons: {
    icon: "/logo.png",
  },
};

export default function Page() {
  return (
    <section className="mx-auto flex w-full max-w-8xl flex-col px-4 py-10 sm:px-6 lg:px-8">
      <h1 className="mb-5 text-center text-3xl font-medium text-accent-400 sm:text-4xl">
        Our Luxury Cabins
      </h1>

      <p className="mx-auto mb-10 max-w-3xl text-center text-base leading-8 text-primary-200 sm:text-lg">
        Cozy yet luxurious cabins, located right in the heart of the Italian
        Dolomites. Imagine waking up to beautiful mountain views, spending your
        days exploring the dark forests around, or just relaxing in your private
        hot tub under the stars. Enjoy nature&apos;s beauty in your own little
        home away from home. The perfect spot for a peaceful, calm vacation.
        Welcome to paradise.
      </p>
      <Suspense fallback={<Loading />}>
        <CabinList />
      </Suspense>
    </section>
  );
}
