import { fooditems } from "@/foodlist";
import Image from "next/image";

export const metadata = {
  title: "Pizza Frenzy",
  description: "Order Pizza",
};
function Products() {
  return (
    <div>
      <div className="flex gap-4">
        <button type="button">Filter</button>
        <div className="gap-4">
          <span>Showing all 9 results</span>
          <select name="dropdown">Default Sorting</select>
        </div>
      </div>
      <div className="grid grid-cols-3">
        {fooditems.map((fooditem) => (
          <div key={fooditem.id} className="max-w-80 max-h-80">
            <Image src={fooditem.image} alt="food" width={180} height={180} />
            <p className="py-10">{fooditem.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
