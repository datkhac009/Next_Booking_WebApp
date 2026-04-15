import { format, formatDistance, isPast, isToday, parseISO } from "date-fns";
import DeleteReservation from "@/component/DeleteReservation";
import Image from "next/image";
import { PencilSquareIcon } from "@heroicons/react/24/solid";

export const formatDistanceFromNow = (dateStr) =>
  formatDistance(parseISO(dateStr), new Date(), {
    addSuffix: true,
  }).replace("about ", "");

function ReservationCard({ booking }) {
  const {
    id,
    guestId,
    startDate,
    endDate,
    numNights,
    totalPrice,
    numGuests,
    status,
    created_at,
    cabins: { name, image },
  } = booking;

  const isPastBooking = isPast(new Date(startDate));

  return (
    <li
      className={`grid overflow-hidden rounded-md border border-primary-800/80 bg-primary-900/35 shadow-lg shadow-primary-950/25 transition-all duration-200 hover:border-accent-500/50 hover:bg-primary-900/55 
      ${!isPastBooking
          ? "sm:grid-cols-[10rem_minmax(0,1fr)_8rem]"
          : "sm:grid-cols-[10rem_minmax(0,1fr)]"
      }`}
    >
      <div className="relative h-44 sm:h-full sm:min-h-40">
        <Image
          src={image}
          fill
          alt={`Cabin ${name}`}
          className="object-cover sm:border-r sm:border-primary-800/80"
        />
      </div>

      <div className="flex min-w-0 flex-col px-5 py-4 sm:px-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-semibold leading-tight text-primary-50">
            {numNights} nights in Cabin {name}
          </h3>
          {isPastBooking ? (
            <span className="flex h-7 shrink-0 items-center rounded-sm bg-yellow-800/90 px-3 text-xs font-bold uppercase tracking-wide text-yellow-100">
              past
            </span>
          ) : (
            <span className="flex h-7 shrink-0 items-center rounded-sm bg-green-800/90 px-3 text-xs font-bold uppercase tracking-wide text-green-100">
              upcoming
            </span>
          )}
        </div>

        <p className="mt-2 text-base leading-6 text-primary-200 sm:text-lg">
          {format(new Date(startDate), "EEE, MMM dd yyyy")} (
          {isToday(new Date(startDate))
            ? "Today"
            : formatDistanceFromNow(startDate)}
          ) &mdash; {format(new Date(endDate), "EEE, MMM dd yyyy")}
        </p>

        <div className="mt-5 flex flex-wrap items-baseline gap-x-5 gap-y-2 sm:mt-auto">
          <p className="text-2xl font-semibold text-accent-400">
            ${totalPrice}
          </p>
          <p className="text-primary-300">&bull;</p>
          <p className="text-lg text-primary-200">
            {numGuests} guest{numGuests > 1 && "s"}
          </p>
          <p className="text-sm text-primary-400 sm:ml-auto">
            Booked {format(new Date(created_at), "EEE, MMM dd yyyy, p")}
          </p>
        </div>
      </div>
      {!isPastBooking ? (
        <div className="grid grid-cols-2 border-t border-primary-800/80 sm:grid-cols-1 sm:grid-rows-2 sm:border-l sm:border-t-0">
          <a
            href={`/account/reservations/edit/${id}`}
            className="group flex min-h-14 items-center justify-center gap-2 border-r border-primary-800/80 px-3 text-xs font-bold uppercase tracking-wide text-primary-300 transition-colors hover:bg-accent-500 hover:text-primary-950 sm:border-b sm:border-r-0"
          >
            <PencilSquareIcon className="h-5 w-5 text-primary-500 transition-colors group-hover:text-primary-950" />
            <span className="mt-1">Edit</span>
          </a>
          <DeleteReservation bookingId={id} />
        </div>
      ) : null}
    </li>
  );
}

export default ReservationCard;
