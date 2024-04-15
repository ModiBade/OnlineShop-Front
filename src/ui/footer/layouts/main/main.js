const { default: Image } = require("next/image");
const { default: Link } = require("next/link");

const Main = () => {
  return (
    <div className="container mx-auto row py-8 px-8 sm:flex-row">
      <div className="md:col-3 sm:col-6 md:pl-5 mt-4">
        <div className="flex flex-col">
          <h2 className="text-1xl text-slate-500">درباره ما</h2>
          <Image
            loading="lazy"
            className="my-2"
            src="/media/images/logo.png"
            width={150}
            height={40}
            alt="logo"
          />
          <p className="leading-6	text-xs font-vazir text-slate-500 font-normal text-justify mt-3">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است.
          </p>
        </div>
      </div>
      <div className="md:col-3 sm:col-6 md:px-2 sm:pr-5 mt-4">
        <div className="flex flex-col">
          <h2 className="text-slate-500">راهنمای خرید</h2>
          <Link
            href="/submit-order"
            className="transition font-vazir font-normal text-xs text-slate-500 my-2 hover:text-emerald-500"
          >
            ثبت سفارش
          </Link>
          <Link
            href="/delivery"
            className="transition font-vazir font-normal text-xs text-slate-500 my-2 hover:text-emerald-500"
          >
            روند ارسال مرسوله ها
          </Link>
          <Link
            href="/track-order"
            className="transition font-vazir font-normal text-xs text-slate-500 my-2 hover:text-emerald-500"
          >
            پیگیری سفارش
          </Link>
          <Link
            href="/payment-guide"
            className="transition font-vazir font-normal text-xs text-slate-500 my-2 hover:text-emerald-500"
          >
            راهنمای پرداخت
          </Link>
        </div>
      </div>
      <div className="md:col-3 sm:col-6 md:px-2 mt-4">
        <div className="flex flex-col">
          <h2 className="text-slate-500">خدمات مشتریان</h2>
          <Link
            href="faq"
            className="transition font-vazir font-normal text-xs text-slate-500 my-2 hover:text-emerald-500"
          >
            سوالات متداول
          </Link>
          <Link
            href="/return-goods"
            className="transition font-vazir font-normal text-xs text-slate-500 my-2 hover:text-emerald-500"
          >
            مرجوعی کالا
          </Link>
          <Link
            href="/terms"
            className="transition font-vazir font-normal text-xs text-slate-500 my-2 hover:text-emerald-500"
          >
            شرایط استفاده
          </Link>
          <Link
            href="/privacy"
            className="transition font-vazir font-normal text-xs text-slate-500 my-2 hover:text-emerald-500"
          >
            حریم خصوصی
          </Link>
        </div>
      </div>
      <div className="md:col-3 sm:col-6 md:pr-5 sm:pr-5 mt-4">
        <div className="flex flex-col">
          <h2 className="text-slate-500">فروشگاه</h2>
          <Link
            href="/about"
            className="transition font-vazir font-normal text-xs text-slate-500 my-2 hover:text-emerald-500"
          >
            درباره ما
          </Link>
          <Link
            href="/contact"
            className="transition font-vazir font-normal text-xs text-slate-500 my-2 hover:text-emerald-500"
          >
            تماس باما
          </Link>
          <Link
            href="/collaboration"
            className="transition font-vazir font-normal text-xs text-slate-500 my-2 hover:text-emerald-500"
          >
            همکاری باما
          </Link>
          <Link
            href="/blog"
            className="transition font-vazir font-normal text-xs text-slate-500 my-2 hover:text-emerald-500"
          >
            مجله
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Main;
