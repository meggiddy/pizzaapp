"use client";

import Cards from "@/components/cards/page";
import { fooditems } from "@/foodlist";
import Link from "next/link";
import { useState } from "react";
import { IoFilter } from "react-icons/io5";

/* export const metadata = {
  title: "Pizza Frenzy",
  description: "Order Pizza",
}; */
function Products() {
/*   const [isAddNewPopupVisible, setIsAddNewPopupVisible] = useState(false);

  const toggleAddNewPopup = () => {
    setIsAddNewPopupVisible(!isAddNewPopupVisible);
  }; */

  const Card = fooditems.map((item) => (
    <Link key={item.id} href={`/detail/${item.id}`}>
      <Cards
        id={item.id}
        image={item.image}
        title={item.title}
        price={item.price}
        description={item.description}
      />
    </Link>
  ));

  return (
    <div>
      <div className="flex gap-4 m-10">
        <div>
          <button className="bg-yellow-500 text-white flex flex-row text-center px-3 py-1  gap-1 lg:gap-0 items-center  mt-10  rounded-full lg:w-32">
            <div className=" lg:text-2xl font-bold mx-auto ">
              <IoFilter />
            </div>
            <span className=" font-bold  lg:text-lg mx-auto lg:-ml-1">
              Filter
            </span>
          </button>
        </div>
        <div className=" flex  flex-col flex-1 lg:flex-row  gap-10 justify-end mt-8 lg:-mt-10">
          <span className="font-bold text-lg">
            Showing all {fooditems.length} results
          </span>
          <div>
            <select
              type="search"
              placeholder="Default sorting"
              className=" w-80 md:w-3/4 lg:w-60 outline-none border-2 text-gray-800 border-gray-300 py-2  px-4 rounded-md text-md"
            >
              <option value="" className="">
                Default Sorting
              </option>
              <option value="1"> Burga Pizza</option>
              <option value="2"> New Pizza</option>
            </select>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-10">
        {Card}
      </div>
    </div>
  );
}

export default Products;

