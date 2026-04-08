import { getCabins } from "@/_lib/data-service";
import CabinCard from "./CabinCart";
//import { unstable_noStore  as noStore} from "next/cache";

async function CabinList({ filter }) {
  //noStore()

  const cabins = await getCabins();

  let displayCabins = cabins;

  if (filter === "all") displayCabins = cabins;
  if (filter === "small")
    displayCabins = cabins.filter((cabin) => cabin.maxCapacity <= 3);
  if (filter === "medium")
    displayCabins = cabins.filter(
      (cabin) => cabin.maxCapacity > 3 && cabin.maxCapacity <= 7,
    );
  if (filter === "large")
    displayCabins = cabins.filter((cabin) => cabin.maxCapacity > 7);

  if (!displayCabins.length)
    return (
      <p className="text-center text-lg text-primary-200">
        No cabins are available right now.
      </p>
    );

  return (
    <div>
      {displayCabins.length > 0 && (
        <div className="flex flex-col items-center gap-8 lg:gap-12">
          {displayCabins.map((cabin, index) => (
            <CabinCard cabin={cabin} index={index} key={cabin.id} />
          ))}
        </div>
      )}
    </div>
  );
}

export default CabinList;
