import { UsersIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

function CabinCard({ cabin, index }) {
  const { id, name, maxCapacity, regularPrice, discount, image } = cabin;
  const isReversed = index % 2 !== 0;

  return (
    <article
      className="w-full max-w-[80rem] overflow-hidden border border-primary-800 bg-primary-950 lg:min-h-[24rem] lg:grid lg:grid-cols-[1.05fr_1fr]"
    >
      <div
        className={`relative h-72 md:h-80 lg:h-full ${
          isReversed
            ? "lg:order-2 lg:border-l lg:border-primary-800"
            : "lg:order-1 lg:border-r lg:border-primary-800"
        }`}
      >
        <Image
          src={image}
          alt={`Cabin ${name}`}
          fill
          sizes="(max-width: 1023px) 100vw, 52vw"
          className="object-cover"
        />
      </div>

      <div
        className={`flex min-w-0 flex-1 flex-col justify-between ${
          isReversed ? "lg:order-1" : "lg:order-2"
        }`}
      >
        <div className="bg-primary-950 px-6 pb-6 pt-6 sm:px-8 sm:pt-8 lg:flex lg:flex-1 lg:flex-col lg:justify-center">
          <h3 className="mb-4 text-center text-3xl font-semibold text-accent-500 lg:text-left">
            Cabin {name}
          </h3>

          <div className="mb-5 flex items-center justify-center gap-3 lg:justify-start">
            <UsersIcon className="h-5 w-5 flex-shrink-0 text-primary-600" />
            <p className="text-center text-lg text-primary-200 lg:text-left">
              For up to <span className="font-bold">{maxCapacity}</span> guests
            </p>
          </div>

          <p className="flex flex-wrap items-baseline justify-center gap-x-3 gap-y-1 lg:justify-start">
            {discount > 0 ? (
              <>
                <span className="text-4xl font-[350]">
                  ${regularPrice - discount}
                </span>
                <span className="font-semibold text-primary-600 line-through">
                  ${regularPrice}
                </span>
              </>
            ) : (
              <span className="text-2xl font-[350] sm:text-3xl">
                ${regularPrice}
              </span>
            )}
            <span className="text-primary-200">/ night</span>
          </p>
        </div>

        <div className="border-t border-t-primary-800 bg-primary-950 text-center lg:text-left">
          <a
            href={`/cabins/${id}`}
            className="block px-6 py-5 text-center text-lg transition-all hover:bg-accent-600 hover:text-primary-900 lg:inline-block"
          >
            Details & reservation &rarr;
          </a>
        </div>
      </div>
    </article>
  );
}

export default CabinCard;
