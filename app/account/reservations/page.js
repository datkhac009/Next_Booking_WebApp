
import ReservationCard from "@/component/ReservationCard";

export const metadata = {
  title: "Reservations",
};

export default async function Page() {
  // CHANGE
  const bookings = []

  return (
    <div>
      <h2 className="mb-7 text-2xl font-semibold text-accent-400 sm:text-3xl">
        Your reservations
      </h2>

      {bookings.length === 0 ? (
        <p className="max-w-2xl text-base leading-7 sm:text-lg">
          You have no reservations yet. Check out our{" "}
          <a className="underline text-accent-500" href="/cabins">
            luxury cabins &rarr;
          </a>
        </p>
      ) : (
        <ul className="space-y-6">
          {bookings.map((booking) => (
            <ReservationCard booking={booking} key={booking.id} />
          ))}
        </ul>
      )}
    </div>
  );
}
