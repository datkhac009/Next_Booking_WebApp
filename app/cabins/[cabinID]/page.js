import Image from "next/image";
import { getCabin } from "@/_lib/data-service";
import { EyeSlashIcon, MapPinIcon, UsersIcon } from "@heroicons/react/24/solid";




export async function generateMetadata({ params }) {
  const { name } = await getCabin(params.cabinID);
  return { title: `Cabin ${name}` };
}

export default async function Page({ params }) {
  const cabin = await getCabin(params.cabinID);

  const { name, maxCapacity, regularPrice, discount, image, description } = cabin;

  return (
    <section className="mx-auto mt-8 max-w-[88rem] px-4 pb-16 sm:px-6 lg:px-8">
      <div className="overflow-hidden rounded-3xl border border-primary-800 bg-primary-900/40 shadow-2xl shadow-black/20">
        <div className="grid lg:grid-cols-[1.55fr_1.2fr]">
          <div className="relative min-h-[20rem] lg:min-h-[28rem] xl:min-h-[30rem]">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-950/40 via-transparent to-transparent z-10" />
          <Image
            src={image}
            fill
            quality={80}
            className="object-cover object-center"
            alt={`Cabin ${name}`}
            priority
          />
          </div>

          <div className="flex flex-col justify-center px-6 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-14">
            <div className="mb-8 flex items-center gap-4">
              <span className="rounded-full border border-accent-400/30 bg-accent-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-accent-300">
                Luxury cabin
              </span>
              {discount > 0 && (
                <span className="rounded-full bg-accent-500 px-3 py-1 text-sm font-semibold text-primary-950">
                  Save ${discount}
                </span>
              )}
            </div>

            <div className="mb-8 border-b border-primary-800 pb-8">
              <h1 className="mb-4 text-4xl font-semibold leading-tight text-accent-50 sm:text-5xl lg:text-6xl">
                Cabin {name}
              </h1>
              <p className="max-w-xl text-base leading-8 text-primary-200 sm:text-lg">
                {description}
              </p>
            </div>

            <ul className="mb-10 flex flex-col gap-5 text-primary-100">
              <li className="flex items-center gap-4 rounded-2xl border border-primary-800 bg-primary-950/60 px-4 py-4">
                <UsersIcon className="h-6 w-6 flex-shrink-0 text-accent-400" />
                <span className="text-base sm:text-lg">
                  For up to <span className="font-semibold text-accent-50">{maxCapacity}</span> guests
                </span>
              </li>
              <li className="flex items-center gap-4 rounded-2xl border border-primary-800 bg-primary-950/60 px-4 py-4">
                <MapPinIcon className="h-6 w-6 flex-shrink-0 text-accent-400" />
                <span className="text-base sm:text-lg">
                  Located in the heart of the <span className="font-semibold text-accent-50">Dolomites</span> (Italy)
                </span>
              </li>
              <li className="flex items-center gap-4 rounded-2xl border border-primary-800 bg-primary-950/60 px-4 py-4">
                <EyeSlashIcon className="h-6 w-6 flex-shrink-0 text-accent-400" />
                <span className="text-base sm:text-lg">
                  Privacy <span className="font-semibold text-accent-50">100%</span> guaranteed
                </span>
              </li>
            </ul>

            <div className="flex flex-wrap items-end justify-between gap-6 rounded-2xl border border-primary-800 bg-primary-950/70 px-5 py-5">
              <div>
                <p className="mb-2 text-sm uppercase tracking-[0.25em] text-primary-400">
                  Starting from
                </p>
                <p className="text-3xl font-semibold text-accent-50 sm:text-4xl">
                  ${regularPrice}
                  <span className="ml-2 text-base font-normal text-primary-300">/ night</span>
                </p>
              </div>
              <p className="max-w-xs text-sm leading-6 text-primary-300">
                Reserve today. Final confirmation and payment happen on arrival.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-14">
        <h2 className="text-center text-4xl font-semibold text-accent-50 sm:text-5xl">
          Reserve today. Pay on arrival.
        </h2>
      </div>
    </section>
  );
}
