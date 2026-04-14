import { updateProfile } from "@/_lib/actions";

function UpdateProfileForm({ children, guest }) {
  const { fullname, email, nationalID } = guest ?? {};

  return (
    <div>
      <form
        action={updateProfile}
        className="flex flex-col gap-6 rounded-2xl bg-primary-900 px-5 py-6 text-base sm:px-8 sm:py-8 sm:text-lg lg:px-12"
      >
        <div className="space-y-2">
          <label>Full name</label>
          <input
            disabled
            name="fullname"
            defaultValue={fullname}
            className="w-full rounded-sm bg-primary-200 px-4 py-3 text-primary-800 shadow-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400 sm:px-5"
          />
        </div>

        <div className="space-y-2">
          <label>Email address</label>
          <input
            disabled
            name="email"
            defaultValue={email}
            className="w-full rounded-sm bg-primary-200 px-4 py-3 text-primary-800 shadow-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400 sm:px-5"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="nationality">Where are you from?</label>
          {children}
        </div>

        <div className="space-y-2">
          <label htmlFor="nationalID">National ID number</label>
          <input
            name="nationalID"
            defaultValue={nationalID}
            className="w-full rounded-sm bg-primary-200 px-4 py-3 text-primary-800 shadow-sm sm:px-5"
          />
        </div>

        <div className="flex items-center justify-stretch gap-4 sm:justify-end">
          <button
            type="submit"
            className="w-full bg-accent-500 px-6 py-3 font-semibold text-primary-800 transition-all hover:bg-accent-600 disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300 sm:w-auto sm:px-8 sm:py-4"
          >
            Update profile
          </button>
        </div>
      </form>
    </div>
  );
}

export default UpdateProfileForm;
