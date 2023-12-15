import Image from "next/image";

function Feedback() {
  return (
    <div className="p-10">
      <div className="mb-10">
        <p className="text-red-600 mb-2">Customer Feedback</p>
        <strong className="text-2xl">Client Testimonials</strong>
      </div>
      <div className="flex lg:flex-row gap-4 flex-col">
        <div className="flex border rounded-sm flex-col items-center">
          <div className="rounded-full overflow-hidden mt-6">
            <Image width={80} height={80} alt="client" src="/patrik.jpg" />
          </div>
          <strong className="pt-4">Takar Bowa</strong>
          <p className="p-10">
            Lorem Ipsum is simply dummy text of the print book it has survived
            not only five centuries, but alsi the leap
          </p>
        </div>
        <div className="flex border rounded-sm flex-col items-center">
          <div className="rounded-full overflow-hidden mt-6">
            <Image width={80} height={80} alt="client" src="/client-3.jpg" />
          </div>
          <strong className="pt-4">Takar Bowa</strong>
          <p className="p-10">
            Lorem Ipsum is simply dummy text of the print book it has survived
            not only five centuries, but alsi the leap
          </p>
        </div>
        <div className="flex border rounded-sm flex-col items-center">
          <div className="rounded-full overflow-hidden mt-6">
            <Image width={80} height={80} alt="client" src="/client-2.jpg" />
          </div>
          <strong className="pt-4">Takar Bowa</strong>
          <p className="p-10">
            Lorem Ipsum is simply dummy text of the print book it has survived
            not only five centuries, but alsi the leap
          </p>
        </div>
        <div className="flex border rounded-sm flex-col items-center">
          <div className="rounded-full overflow-hidden mt-6">
            <Image width={80} height={80} alt="client" src="/client-4.jpg" />
          </div>
          <strong className="pt-4">Takar Bowa</strong>
          <p className="p-10">
            Lorem Ipsum is simply dummy text of the print book it has survived
            not only five centuries, but alsi the leap
          </p>
        </div>
      </div>
    </div>
  );
}

export default Feedback;
