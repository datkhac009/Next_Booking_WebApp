"use client";

import { deleteReservation } from "@/_lib/actions";
import { TrashIcon } from "@heroicons/react/24/solid";
import { useFormStatus } from "react-dom";

function DeleteReservation({ bookingId }) {
  const deleteReservationWithId = deleteReservation.bind(null, bookingId);

  return (
    <form action={deleteReservationWithId} className="h-full w-full">
      <DeleteButton />
    </form>
  );
}

function DeleteButton() {
  const { pending } = useFormStatus();

  return (
    <button
      className="group flex h-full min-h-14 w-full items-center justify-center gap-2 px-3 text-xs font-bold uppercase tracking-wide text-primary-300 transition-colors hover:bg-accent-500 hover:text-primary-950 disabled:cursor-not-allowed disabled:bg-primary-900 disabled:text-primary-500 sm:min-h-0"
      disabled={pending}
    >
      <TrashIcon className="h-5 w-5 text-primary-500 transition-colors group-hover:text-primary-950 group-disabled:text-primary-600" />
      <span className="mt-1">{pending ? "Deleting" : "Delete"}</span>
    </button>
  );
}

export default DeleteReservation;
