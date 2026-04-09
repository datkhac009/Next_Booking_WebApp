"use client";

import DateSelector from "./DateSelector";
import ReservationForm from "./ReservationForm";
import { useReservation } from "./ReservationContext";

function Reservation({ cabin, settings, bookedDates }) {
  const {range, setRange ,resetRange} = useReservation()

  return (
    <div className="grid overflow-hidden rounded-3xl border border-primary-800 bg-primary-900/50 shadow-2xl shadow-black/20 lg:grid-cols-[1.2fr_0.8fr]">
      <DateSelector
        settings={settings}
        cabin={cabin}
        bookedDates={bookedDates}
        range={range}
        setRange={setRange}
        resetRange={resetRange}
      />
      <ReservationForm cabin={cabin} range={range} />
    </div>
  );
}

export default Reservation;
