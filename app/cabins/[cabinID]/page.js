import {
  getBookedDatesByCabinId,
  getCabin,
  getCabins,
  getSettings,
} from "@/_lib/data-service";
import Cabin from "@/component/Cabin";
import Reservation from "@/component/Reservation";

export async function generateMetadata({ params }) {
  const { name } = await getCabin(params.cabinID);
  return { title: `Cabin ${name}` };
}
export async function generateStaticParams(){
  const cabins = await getCabins();
  const ids = cabins.map((cabin) => ({cabinID:String(cabin.id)}));

  console.log(ids);
  return ids
}
export default async function Page({ params }) {
  const [cabin, settings, bookedDates] = await Promise.all([
    getCabin(params.cabinID),
    getSettings(),
    getBookedDatesByCabinId(params.cabinID),
  ]);

  return (
    <section className="mx-auto mt-8 max-w-[88rem] px-4 pb-16 sm:px-6 lg:px-8">
      <Cabin cabin={cabin} />

      <div className="mt-14">
        <div className="mb-8 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-accent-300">
            Booking Cabin {cabin.id}
          </p>
          <h2 className="text-3xl font-semibold text-accent-50 sm:text-4xl">
            Choose your stay
          </h2>
        </div>

        <Reservation
          cabin={cabin}
          settings={settings}
          bookedDates={bookedDates}
        />
      </div>
    </section>
  );
}
