import BreadCrumbs from "@/ui/breadcrumbs/breadcrumbs";
import PageCard from "@/ui/cards/page/page";
import Image from "next/image";

const TrackOrder = () => {
  return (
    <>
      <BreadCrumbs items={[{ name: "پیگیری سفارش", active: true }]} />
      <PageCard title="پیگیری سفارش" subtitle="پیگیری مرسوله های پستی">
        <div className="flex items-center justify-between flex-wrap lg:flex-nowrap px-10">
          <Image
            src="/media/images/tracking-order.jpg"
            width={600}
            height={600}
          />
          <div className="mr-5">
            <p className="font-iran font-normal text-justify">
              با استفاده از این صفحه، می‌توانید وضعیت سفارش خود را به راحتی
              پیگیری کنید. در این صفحه، اطلاعات جامعی از وضعیت فعلی سفارش شما
              ارائه شده است، از جمله زمان تحویل پیش‌بینی شده و جزئیات ارسال.
              برای هرگونه پرسش یا اطلاعات بیشتر، با تیم پشتیبانی ما تماس بگیرید.
            </p>
            <div className="mt-5">
              <label className="text-gray-600 text-2xl font-normal">
                شماره سفارش
              </label>
              <input className="bg-slate-100 focus:outline-0 font-iran font-normal px-3 py-2 rounded-xl w-full mt-3" />
              <button className="float-left transition bg-green-100 hover:bg-emerald-500 text-emerald-500 hover:text-white px-4 py-1 rounded-xl mt-5">
                پیگیری سفارش
              </button>
            </div>
          </div>
        </div>
      </PageCard>
    </>
  );
};

export default TrackOrder;
