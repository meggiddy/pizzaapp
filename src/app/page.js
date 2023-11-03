"use client";

import Image from "next/image";

export default function Home() {
  return (
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
      </div>
      <div className="flex justify-center">
        <Image src="/pizza.png" width={600} height={600} alt="pizza image" />
      </div>
    </div>
  );
}


/* import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-between py-32">
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
 */
