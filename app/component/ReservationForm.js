"use client";

import { format } from "date-fns";

function ReservationForm({ cabin, range }) {
  const { maxCapacity } = cabin;
  const hasStartDate = Boolean(range.from);
  const hasEndDate = Boolean(range.to);
  console.log(range.from)
  //console.log(hasStartDate)
  const dateLabelFormat = hasStartDate
    ? `${format(range.from, "EEE, MMM d, yyyy")}${
        hasEndDate ? ` - ${format(range.to, "EEE, MMM d, yyyy")}` : ""
      }`
    : "Select a check-in and check-out date to continue";

  return (
    <div className="flex flex-col bg-primary-900/80">
      <div className="border-b border-primary-800 bg-primary-800/70 px-6 py-5 sm:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-400">
          Reservation details
        </p>
        <p className="mt-2 text-xl font-semibold text-primary-100">
          Complete your booking request
        </p>

        {/* <div className='flex gap-4 items-center'>
          <img
            // Important to display google profile images
            referrerPolicy='no-referrer'
            className='h-8 rounded-full'
            src={user.image}
            alt={user.name}
          />
          <p>{user.name}</p>
        </div> */}
      </div>

      <div className="border-b border-primary-800 px-6 py-5 sm:px-8">
        <p className="text-sm font-medium text-primary-300">Selected stay</p>
        <p className="mt-2 text-base leading-7 text-primary-100">{dateLabelFormat}</p>
      </div>

      <form className="flex flex-1 flex-col gap-6 px-6 py-8 text-base sm:px-8">
        <div className="space-y-2">
          <label
            htmlFor="numGuests"
            className="block text-sm font-semibold uppercase tracking-[0.15em] text-primary-300"
          >
            How many guests?
          </label>
          <select
            name="numGuests"
            id="numGuests"
            className="w-full rounded-xl border border-primary-700 bg-primary-950 px-4 py-3 text-primary-100 shadow-sm outline-none transition-colors focus:border-accent-400"
            required
          >
            <option value="" key="">
              Select number of guests...
            </option>
            {Array.from({ length: maxCapacity }, (_, i) => i + 1).map((x) => (
              <option value={x} key={x}>
                {x} {x === 1 ? "guest" : "guests"}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label
            htmlFor="observations"
            className="block text-sm font-semibold uppercase tracking-[0.15em] text-primary-300"
          >
            Anything we should know about your stay?
          </label>
          <textarea
            name="observations"
            id="observations"
            className="min-h-32 w-full rounded-xl border border-primary-700 bg-primary-950 px-4 py-3 text-primary-100 shadow-sm outline-none transition-colors focus:border-accent-400"
            placeholder="Any pets, allergies, special requirements, etc.?"
          />
        </div>

        <div className="mt-auto flex flex-col gap-4 border-t border-primary-800 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-primary-300">
            {hasEndDate
              ? "Dates selected. You can continue."
              : "Start by selecting dates on the calendar."}
          </p>

          <button
            type="submit"
            disabled={!hasEndDate}
            className="rounded-xl bg-accent-500 px-6 py-3 font-semibold text-primary-900 transition-colors hover:bg-accent-400 disabled:cursor-not-allowed disabled:bg-primary-700 disabled:text-primary-400"
          >
            Reserve now
          </button>
        </div>
      </form>
    </div>
  );
}

export default ReservationForm;
