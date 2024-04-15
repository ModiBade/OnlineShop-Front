import Image from "next/image";

const Certificates = () => {
  return (
    <div className="container mx-auto flex justify-between items-center py-8 px-8">
      <div className="flex flex-col">
        <p className="font-vazir font-normal text-sm text-gray-600">
          پاسخگوی مشتریان عزیز هستیم از شنبه تا چهارشنبه ساعت{" "}
          <span className="text-emerald-500 font-bold">10 تا 17</span> پنجشنبه{" "}
          <span className="text-emerald-500 font-bold">10 تا 13</span>
        </p>
        <p className="mt-3 text-gray-800">
          شماره تماس پشتیبانی{" "}
          <span className="text-blue-500 text-xl mr-3">54408-021</span>
        </p>
      </div>
      <div>
        <Image
          loading="lazy"
          src="/media/images/enamad.png"
          width={110}
          height={40}
          alt="logo"
        />
      </div>
    </div>
  );
};

export default Certificates;
