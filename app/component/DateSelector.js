"use client";

import { differenceInDays } from "date-fns";
import { isWithinInterval } from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

function isAlreadyBooked(range, datesArr) {
  return (
    range.from &&
    range.to &&
    datesArr.some((date) =>
      isWithinInterval(date, { start: range.from, end: range.to })
    )
  );
}

function DateSelector({ settings, cabin, bookedDates, range, setRange, resetRange }) {

  const { regularPrice, discount } = cabin;
  const numNights =
    range?.from && range?.to ? differenceInDays(range.to, range.from) : 0;
  const cabinPrice = numNights * (regularPrice - discount);

  // Get data SETTINGS
  const { minBookingLength, maxBookingLength } = settings;
  return (
    <div className="flex flex-col justify-between border-b border-primary-800 lg:min-h-[42rem] lg:border-b-0 lg:border-r">
      <DayPicker
        className="reservation-calendar w-full px-4 py-8 sm:px-6 sm:py-10"
        mode="range"
        onSelect={setRange}
        selected={range}
        fromMonth={new Date()}
        fromDate={new Date()}
        toYear={new Date().getFullYear() + 5}
        captionLayout="dropdown"
        numberOfMonths={2}
        disabled={bookedDates}
        modifiers={{ booked: bookedDates }}
      />

      <div className="flex flex-col gap-5 border-t border-primary-800 bg-accent-500/90 px-5 py-5 text-primary-900 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div className="flex flex-wrap items-end gap-4 sm:gap-6">
          <p className="flex items-baseline gap-2">
            {discount > 0 ? (
              <>
                <span className="text-2xl font-semibold">${regularPrice - discount}</span>
                <span className="text-base font-semibold text-primary-700 line-through">
                  ${regularPrice}
                </span>
              </>
            ) : (
              <span className="text-2xl font-semibold">${regularPrice}</span>
            )}
            <span className="text-sm uppercase tracking-[0.2em] text-primary-800/80">
              / night
            </span>
          </p>
          {numNights ? (
            <>
              <p className="rounded-full bg-accent-600/80 px-4 py-2 text-sm font-bold uppercase tracking-[0.2em] text-primary-900">
                <span>&times;</span> <span>{numNights}</span>
              </p>
              <p className="flex items-baseline gap-3">
                <span className="text-sm font-bold uppercase tracking-[0.25em]">
                  Total
                </span>
                <span className="text-2xl font-semibold">${cabinPrice}</span>
              </p>
            </>
          ) : null}
        </div>

        {range.from || range.to ? (
          <button
            className="self-start rounded-xl bg-primary-900 px-4 py-2 text-sm font-semibold text-primary-100 shadow-lg shadow-primary-950/30 transition-colors hover:bg-primary-800 sm:self-auto"
            onClick={resetRange}
          >
            Clear
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default DateSelector;
