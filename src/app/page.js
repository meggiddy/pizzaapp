"use client";

import MidSection from "@/components/midsection/page";
import Image from "next/image";
import Link from "next/link";
import { fooditems } from "@/foodlist";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import Strength from "@/components/strength/page";
import Feedback from "@/components/feedback/page";
import { CartProvider } from "./CartProvider/CartContext";
import { FaShoppingCart } from "react-icons/fa";
import Cards from "@/components/cards/page";

export default function Home() {
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
    <div className="">
      <div className="lg:col-span-3 px-4 lg:pl-10 flex-col-reverse lg:flex-row  flex items-center lg:items-start">
        <div className=" h-3/4 flex flex-col items-center lg:items-start  gap-2 lg:gap-5  lg:mt-52">
          <h1 className="font-extrabold text-center text-slate-900 weight mr-10 lg:mr-0 text-4xl md:text-5xl lg:text-7xl">
            Handmade,
          </h1>
          <h1 className=" w-3/4 font-extrabold text-center  lg:text-start text-slate-900 weight  text-4xl md:text-5xl lg:text-7xl">
            With an Extra
          </h1>
          <h1 className=" w-3/4 font-extrabold text-center lg:text-start text-slate-900 weight  text-4xl md:text-5xl lg:text-7xl">
            Pinch of <span className="love">Love</span>
          </h1>
          <h4 className="lg:text-3xl mt-2 lg:mt-0  text-center  md:w-4/5 lg:w-3/4 lg:text-start lg:leading-10 space-x-4 [word-spacing:5px] font-medium text-gray-800">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </h4>
          <button className="bg-yellow-500 lg:text-lg text-white flex flex-row text-center  px-2 lg:px-8  gap-1  py-2 lg:py-4 mt-4  rounded-full w-36 lg:w-52">
            <FaShoppingCart className=" mt-1 mx-auto" />
            <span className="mx-auto">ORDER NOW</span>
          </button>
        </div>

        <div className="flex justify-center flex-col">
          <div className="hidden lg:block lg:col-span-2 lg:ml-60 bg-yellow-500 mt-2 rounded-l-full pizza-background ">
            <Image
              src="/pizza.png"
              width={500}
              height={500}
              alt="pizza image"
            />
            <Image
              className=""
              src="/pizza-onion.png"
              width={80}
              height={80}
              alt="pizza image"
            />
          </div>
          <Image
            className="lg:ml-32"
            src="/side.png"
            width={200}
            height={200}
            alt="pizza image"
          />
        </div>
      </div>
      <MidSection />
      <div className="mx-10">
        <p className="text-red-500">Popular Dishes</p>
        <strong className="text-2xl">Browse our Menu</strong>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-10">
          {Card}
        </div>
        <div className="flex float-right">
          <Image
            className="flex float-left"
            width={320}
            height={200}
            alt="pizza"
            src="/slice.png"
          />
        </div>
      </div>
      <Strength />
      <Feedback />
    </div>
  );
}
