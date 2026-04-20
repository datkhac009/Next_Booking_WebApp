import { eachDayOfInterval } from "date-fns";
import { supabase, supabaseAdmin } from "./supabase";

/////////////

// GET

export async function getCabin(id) {
  const { data, error } = await supabase
    .from("cabins")
    .select("*")
    .eq("id", id)
    .single();

  // For testing
  await new Promise((res) => setTimeout(res, 1500));

  if (error) {
    console.error(error);
    throw new Error(error.message);
  }

  return data;
}

export async function getCabinPrice(id) {
  const { data, error } = await supabase
    .from("cabins")
    .select("regularPrice, discount")
    .eq("id", id)
    .single();

  if (error) {
    console.error(error);
    throw new Error(error.message);
  }

  return data;
}

export const getCabins = async function () {
  const { data, error } = await supabase
    .from("cabins")
    .select("id, name, maxCapacity, regularPrice, discount, image")
    .order("name");

  // await new Promise((res) => setTimeout(res, 1500));

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }

  return data;
};

// Guest được nhận diện duy nhất bằng email.
export async function getGuest(email) {
  console.log("[data.getGuest] Tim guest theo email:", email);
  const { data, error } = await supabase
    .from("guest")
    .select("*")
    .eq("email", email)
    .maybeSingle();

  if (error) {
    console.error("Lỗi khi lấy guest từ Supabase:", error);
    throw new Error(error.message || "Guest could not be loaded");
  }

  console.log(
    "[data.getGuest] Ket qua:",
    data ? `Tim thay guest id ${data.id}` : "Khong tim thay guest",
  );
  return data;
}

export async function getBooking(id) {
  const { data, error, count } = await supabase
    .from("bookings")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error(error);
    throw new Error("Booking could not get loaded");
  }

  return data;
}

export async function getBookings(guestId) {
  const { data, error, count } = await supabase
    .from("bookings")
    // We actually also need data on the cabins as well. But let's ONLY take the data that we actually need, in order to reduce downloaded data.
    .select(
      "id, created_at, startDate, endDate, numNight, numGuests, totalPrice, guestID, cabinID, cabins(name, image)",
    )
    .eq("guestID", guestId)
    .order("startDate");

  if (error) {
    console.error(error);
    throw new Error("Bookings could not get loaded");
  }

  return data;
}

export async function getBookedDatesByCabinId(cabinId) {
  let today = new Date();
  today.setUTCHours(0, 0, 0, 0);
  today = today.toISOString();

  // Getting all bookings
  const { data, error } = await supabase
    .from("bookings")
    .select("*")
    .eq("cabinID", cabinId)
    .or(`startDate.gte.${today},status.eq.checked-in`);

  if (error) {
    console.error(error);
    throw new Error("Bookings could not get loaded");
  }

  // Converting to actual dates to be displayed in the date picker
  const bookedDates = data
    .map((booking) => {
      return eachDayOfInterval({
        start: new Date(booking.startDate),
        end: new Date(booking.endDate),
      });
    })
    .flat();

  return bookedDates;
}

export async function getSettings() {
  if (!supabaseAdmin) throw new Error("Missing SUPABASE_SERVICE_ROLE_KEY");
  const { data, error } = await supabaseAdmin
    .from("settings")
    .select("*")
    .single();

  if (error) {
    console.error(error);
    throw new Error("Settings could not be loaded");
  }

  return data;
}

export async function getCountries() {
  try {
    const res = await fetch(
      "https://restcountries.com/v2/all?fields=name,flag",
    );
    const countries = await res.json();
    return countries;
  } catch {
    throw new Error("Could not fetch countries");
  }
}

/////////////
// CREATE

export async function createGuest(newGuest) {
  console.log("[data.createGuest] Tao guest moi:", newGuest);
  if (!supabaseAdmin) throw new Error("Missing SUPABASE_SERVICE_ROLE_KEY");

  const { data, error } = await supabaseAdmin.from("guest").insert([newGuest]);

  if (error) {
    console.error("Lỗi khi tạo guest trong Supabase:", error);
    throw new Error(error.message || "Guest could not be created");
  }

  console.log("[data.createGuest] Tao guest thanh cong");
  return data;
}

export async function createBooking(newBooking) {
  if (!supabaseAdmin) throw new Error("Missing SUPABASE_SERVICE_ROLE_KEY");

  const { data, error } = await supabaseAdmin
    .from("bookings")
    .insert([newBooking])
    // So that the newly created object gets returned!
    .select()
    .single();

  if (error) {
    console.error(error);
    throw new Error(error.message || "Booking could not be created");
  }

  return data;
}

/////////////
// UPDATE

// The updatedFields is an object which should ONLY contain the updated data
export async function updateGuest(id, updatedFields) {
  if (!supabaseAdmin) throw new Error("Missing SUPABASE_SERVICE_ROLE_KEY");

  const { data, error } = await supabaseAdmin
    .from("guest")
    .update(updatedFields)
    .eq("id", id)
    .select()
    .single();

  if (error) {
    console.error(error);
    throw new Error(error.message || "Guest could not be updated");
  }
  return data;
}

export async function updateBooking(id, updatedFields) {
  if (!supabaseAdmin) throw new Error("Missing SUPABASE_SERVICE_ROLE_KEY");

  const { data, error } = await supabaseAdmin
    .from("bookings")
    .update(updatedFields)
    .eq("id", id)
    .select()
    .single();

  if (error) {
    console.error(error);
    throw new Error(error.message || "Booking could not be updated");
  }
  return data;
}

/////////////
// DELETE

export async function deleteBooking(id) {
  if (!supabaseAdmin) throw new Error("Missing SUPABASE_SERVICE_ROLE_KEY");

  const { data, error } = await supabaseAdmin
    .from("bookings")
    .delete()
    .eq("id", id);

  if (error) {
    console.error(error);
    throw new Error(error.message || "Booking could not be deleted");
  }
  return data;
}
