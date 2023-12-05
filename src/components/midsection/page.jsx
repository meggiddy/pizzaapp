import Image from "next/image";

function MidSection() {
  return (
    <div className="flex m-20 flex-col lg:gap-5  text-center lg:w-4/5 lg:ml-8  -mt-96 lg:-mt-10">
      <div className="mx-20 flex flex-row">
        <Image width={320} height={200} alt="pizza" src="/mid.png" />
        <div className="p-10">
          <strong className="font-bold z-50 lg:w-3/4 text-4xl items-center">Daily fresh and always tasty</strong>
          <p className="leading-loose text-black mt-2 lg:text-xl">
            There are many variations of passages of Lorem Ipsum available, but
            the majority haved
          </p>
        </div>
        <div className="pt-20">
          <Image width={70} height={70} alt="pizza" src="/garlic.png" />
        </div>
      </div>
    </div>
  );
}

export default MidSection;
