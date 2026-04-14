import { auth } from "@/_lib/auth";
import { getGuest } from "@/_lib/data-service";
import SelectCountry from "@/component/SelectCountry";
import UpdateProfileForm from "@/component/UpdateProfileForm";

export const metadata = {
  title: "Update profile",
};

export default async function Page() {
  // CHANGE
  // const countryFlag = "pt.jpg";
  // const nationality = "portugal";
  const session = await auth();
  const guest = await getGuest(session.user.email);

  return (
    <div>
      <h2 className="mb-4 text-2xl font-semibold text-accent-400 sm:text-3xl">
        Update your guest profile
      </h2>

      <p className="mb-8 max-w-3xl text-base text-primary-200 sm:text-lg">
        Providing the following information will make your check-in process
        faster and smoother. See you soon!
      </p>
      <UpdateProfileForm guest={guest}>
        <SelectCountry
          name="nationality"
          id="nationality"
          className="w-full rounded-sm bg-primary-200 px-4 py-3 text-primary-800 shadow-sm sm:px-5"
          defaultCountry={guest?.nationality ?? ""}
        />
      </UpdateProfileForm>
    </div>
  );
}
