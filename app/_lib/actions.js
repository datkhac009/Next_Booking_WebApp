"use server";

import { revalidatePath } from "next/cache";
import { auth } from "./auth";
import {
  deleteBooking,
  getBooking,
  updateBooking as updateBookingInDB,
  updateGuest,
} from "./data-service";

export async function updateProfile(formData) {
  console.log(formData);
  const session = await auth();
  if (!session?.user?.guestId) throw new Error("You must be logged in");
  console.log(session.user.guestId);

  const nationalID = formData.get("nationalID")?.trim();
  const nationalityValue = formData.get("nationality");

  //regex
  if (!nationalityValue) throw new Error("Please select a country");
  if (!nationalID) throw new Error("National ID is required");
  if (!/^[a-zA-Z0-9]{6,12}$/.test(nationalID))
    throw new Error("National ID must be 6-12 letters or numbers");

  const [nationality, countryFlag] = nationalityValue.split("%");

  const updateData = { nationalID, nationality, countryFlag };

  const updatedGuest = await updateGuest(session.user.guestId, updateData);
  revalidatePath("/account/profile");

  return updatedGuest;
}

export async function deleteReservation(bookingId) {
  const session = await auth();

  if (!session?.user?.guestId) throw new Error("You must be logged in");

  //get id booking

  const booking = await getBooking(bookingId);
  const bookingGuestId = booking.guestID ?? booking.guestId;

  if (Number(session?.user?.guestId) !== Number(bookingGuestId))
    throw new Error("Error id not match");

  const deletedBooking = await deleteBooking(bookingId);
  revalidatePath("/account/reservations");

  return deletedBooking;
}

export async function updateBooking(formData) {
  const session = await auth();

  if (!session?.user?.guestId) throw new Error("You must be logged in");

  const numGuests = Number(formData.get("numGuests"));
  const obvervations = formData.get("obvervations")?.trim();
  const bookingId = formData.get("bookingId")?.trim();

  console.log({ bookingId, numGuests, obvervations });
  const booking = await getBooking(bookingId);
  console.log("booking:", booking);
  console.log("session guest:", session.user.guestId);

  const bookingGuestId = booking.guestID ?? booking.guestId;

  if (Number(session.user.guestId) !== Number(bookingGuestId)) {
    throw new Error("Error id not match");
  }

  const updatedBooking = await updateBookingInDB(bookingId, {
    numGuests,
    obvervations,
  });
  revalidatePath("/account/reservations");

  return updatedBooking;
}
