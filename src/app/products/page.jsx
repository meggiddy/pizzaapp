import { fooditems } from "@/foodlist";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Pizza Frenzy",
  description: "Order Pizza",
};
function Products() {
  return (
    <div>
      <div className="flex gap-4 m-10">
        <button type="button" className=" p-2 rounded-full bg-yellow-300">Filter</button>
        <div className="gap-4 p-2">
          <span>Showing all 9 results</span>
          <select name="dropdown">Default Sorting</select>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-10">
        {fooditems.map((fooditem) => (
          <div
            key={fooditem.id}
            className="border border-solid border-slate-200 p-4 flex flex-col items-center"
          >
            <Link href={`/detail/${fooditem.id}`}>
              <div className="flex justify-center items-center mb-2">
                <Image
                  src={fooditem.image}
                  alt="food"
                  width={180}
                  height={180}
                  className="object-cover w-full h-full"
                />
              </div>
            </Link>
            <p className="text-center mt-2">{fooditem.title}</p>
            <button className="rounded-full flex flex-row text-white p-3 bg-yellow-500 justify-center">
                <ShoppingCartIcon className="h-6 w-6" aria-hidden="true" />
                ORDER NOW
              </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
