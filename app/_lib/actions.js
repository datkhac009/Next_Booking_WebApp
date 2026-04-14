"use server";

import { auth } from "./auth";
import { updateGuest } from "./data-service";

export async function updateProfile(formData) {
    console.log(formData)
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

  return updateGuest(session.user.guestId, updateData);
}
