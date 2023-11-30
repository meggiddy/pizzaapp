import Image from "next/image";

function MidSection() {
  return (
    <div className="mx-20 flex flex-row">
      <Image width={320} height={200} alt="pizza" src="/mid.png" />
      <div className="p-10">
        <strong className="text-2xl">Daily fresh and always tasty</strong>
        <p className="py-3">
          There are many variations of passages of Lorem Ipsum available, but
          the majority haved
        </p>
      </div>
      <div className="pt-20">
        <Image width={70} height={70} alt="pizza" src="/garlic.png" />
      </div>
    </div>
  );
}

export default MidSection;
