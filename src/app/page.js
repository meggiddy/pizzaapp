"use client";

import Image from "next/image";

export default function Home() {
  return (
    <div className="flex">
      <div className="pt-40 ml-16">
        <h3 className="text-5xl m-2">Handmade,</h3>
        <h3 className="text-5xl m-2">With an Extra</h3>
        <h3 className="text-5xl m-2">
          Pinch of <span className="text-red-600">Love</span>
        </h3>
        <p className="m-2 text-lg">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>
      <div>
        <Image src="/pizza.png" width={600} height={600} alt="pizza image" />
      </div>
    </div>
  );
}
