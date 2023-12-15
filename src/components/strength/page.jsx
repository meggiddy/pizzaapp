import Image from "next/image";

function Strength() {
  return (
    <div className="p-10 bg-orange-100 ">
      <div className="m-10">
        <p className="text-red-600">Our Strength</p>
        <strong className="text-2xl">Why We Are The Best?</strong>
      </div>
      <div className="mx-20 flex lg:flex-row flex-col">
        <div>
          <Image src="/rice.png" className="my-3" width={30} height={30} alt="icon" />
          <strong className="my-2">All Kinds of Foods</strong>
          <p>
            Lorem Ipsum is simply dummy text of the printing and type setting
            industry.
          </p>
        </div>
        <div className="">
          <Image src="/fan.png" className="my-3" width={30} height={30} alt="icon" />
          <strong className="my-2">All Kinds of Foods</strong>
          <p>
            Lorem Ipsum is simply dummy text of the printing and type setting
            industry.
          </p>
        </div>
        <div>
          <Image src="/happy.png" className="my-3" width={30} height={30} alt="icon" />
          <strong className="my-2">All Kinds of Foods</strong>
          <p>
            Lorem Ipsum is simply dummy text of the printing and type setting
            industry.
          </p>
        </div>
        <div>
          <Image src="/pin.png" className="my-3" width={30} height={30} alt="icon" />
          <strong className="my-2">All Kinds of Foods</strong>
          <p>
            Lorem Ipsum is simply dummy text of the printing and type setting
            industry.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Strength;
