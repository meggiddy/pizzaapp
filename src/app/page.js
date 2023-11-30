"use client";

import MidSection from "@/components/midsection/page";
import Image from "next/image";
import Link from "next/link";
import { fooditems } from "@/foodlist";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import Strength from "@/components/strength/page";
import Feedback from "@/components/feedback/page";

export default function Home() {
  return (
    <div className="">
      <div className="flex flex-col-reverse lg:flex-row justify-between py-8 lg:py-32 mx-4 lg:mx-10">
        <div className="text-center lg:text-left lg:pt-40 lg:ml-16">
          <h3 className="text-3xl lg:text-5xl m-2">Handmade,</h3>
          <h3 className="text-3xl lg:text-5xl m-2">With an Extra</h3>
          <h3 className="text-3xl lg:text-5xl m-2">
            Pinch of <span className="text-red-600">Love</span>
          </h3>
          <p className="text-sm lg:text-lg m-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <button className="rounded-full mt-6 flex flex-row text-white p-3 bg-yellow-500">
            <ShoppingCartIcon className="h-6 w-6" aria-hidden="true" />
            ORDER NOW
          </button>
        </div>
        <div>
          <div className="flex justify-center flex-col">
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
            className="ml-32"
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
          {fooditems.map((fooditem) => (
            <div
              key={fooditem.id}
              className="border border-solid border-slate-200 p-4 flex flex-col"
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
              <p className="text-center m-2">{fooditem.title}</p>
              <button className="rounded-full flex flex-row text-white p-3 bg-yellow-500 justify-center">
                <ShoppingCartIcon className="h-6 w-6" aria-hidden="true" />
                ORDER NOW
              </button>
            </div>
          ))}
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
