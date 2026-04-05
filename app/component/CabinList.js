import { getCabins } from "@/_lib/data-service";
import CabinCard from "./CabinCart";

async function CabinList() {
  const cabins = await getCabins();

  if (!cabins.length)
    return (
      <p className="text-center text-lg text-primary-200">
        No cabins are available right now.
      </p>
    );

  return (
    <div>
      {cabins.length > 0 && (
        <div className="flex flex-col items-center gap-8 lg:gap-12">
          {cabins.map((cabin, index) => (
            <CabinCard cabin={cabin} index={index} key={cabin.id} />
          ))}
        </div>
      )}
    </div>
  );
}

export default CabinList;
