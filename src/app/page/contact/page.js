import { BaseConfig } from "@/lib/config/base";
import Ask from "@/lib/fetch/fetch";
import BreadCrumbs from "@/ui/breadcrumbs/breadcrumbs";
import PageCard from "@/ui/cards/page/page";
import Image from "next/image";
import { FaMapPin } from "react-icons/fa6";
import { FaHeadphonesSimple } from "react-icons/fa6";
import { HiOutlineEnvelopeOpen } from "react-icons/hi2";

const getData = async () => {
  const data = await Ask(
    `${BaseConfig.apiUrl}/official/page/contact`,
    "get",
    "no-store"
  );
  return data;
};

const Contact = async () => {
  const data = await getData();

  return (
    <>
      <BreadCrumbs items={[{ name: data.name, active: true }]} />
      <PageCard title={data.name} subtitle={data.subtitle}>
        <div className="flex items-center justify-between">
          <div className="flex items-center bg-green-100 text-emerald-600 rounded-xl px-3 py-2 w-[33%]">
            <FaMapPin className="text-4xl" />
            <div className="mr-3">
              <div className="text-2xl font-normal">آدرس</div>
              <div className="font-iran font-normal text-sm">
                تهران، چهارراه عزیزخان، پاساژ اداری ایرانیان، پلاک 191، طبقه 4،
                واحد 134
              </div>
            </div>
          </div>
          <div className="flex items-center bg-pink-100 text-pink-600 rounded-xl px-3 py-2 w-[16.5%]">
            <FaHeadphonesSimple className="text-4xl" />
            <div className="mr-3">
              <div className="text-2xl font-normal">تماس</div>
              <div className="font-iran font-normal text-sm">021-91099012</div>
            </div>
          </div>
          <div className="flex items-center bg-orange-100 text-orange-600 rounded-xl px-3 py-2 w-[16.5%]">
            <HiOutlineEnvelopeOpen className="text-4xl" />
            <div className="mr-3">
              <div className="text-2xl font-normal">ایمیل</div>
              <div className="font-iran font-normal text-sm">info@shop.com</div>
            </div>
          </div>
          <div className="flex items-center bg-blue-100 text-blue-600 rounded-xl px-3 py-2 w-[33%]">
            <FaMapPin className="text-4xl" />
            <div className="mr-3">
              <div className="text-2xl font-normal">ساعت کاری</div>
              <div className="font-iran font-normal text-sm">
                شنبه تا چهارشنبه : 10:00 - 17:00 پنجشنبه : 10:00 - 13:00
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between flex-wrap lg:flex-nowrap px-10 mt-5">
          <Image src="/media/images/contact-us.jpg" width={600} height={600} />
          <div className="mr-5">
            <p
              className="font-iran font-normal text-justify"
              dangerouslySetInnerHTML={{ __html: data.description }}
            />
            <form className="mt-5">
              <div className="flex items-center justify-between">
                <div className="w-[49%]">
                  <label className="text-gray-600 text-2xl font-normal">
                    موضوع
                  </label>
                  <input className="bg-slate-100 focus:outline-0 font-iran font-normal px-3 py-2 rounded-xl w-full mt-3" />
                </div>
                <div className="w-[50%]">
                  <label className="text-gray-600 text-2xl font-normal">
                    ایمیل
                  </label>
                  <input className="bg-slate-100 focus:outline-0 font-iran font-normal px-3 py-2 rounded-xl w-full mt-3" />
                </div>
              </div>
              <div className="mt-5">
                <label className="text-gray-600 text-2xl font-normal">
                  متن
                </label>
                <textarea className="w-full bg-slate-100 focus:outline-0 font-iran font-normal px-3 py-2 rounded-xl w-full mt-3" />
              </div>
              <button className="float-left transition bg-green-100 hover:bg-emerald-500 text-emerald-500 hover:text-white px-4 py-1 rounded-xl mt-5">
                ارسال
              </button>
            </form>
          </div>
        </div>
      </PageCard>
    </>
  );
};

export const generateMetadata = async ({ params }) => {
  const data = await getData(params);
  let meta = {
    title: `${BaseConfig.appName} | ${data.name}`,
  };

  return meta;

  return meta;
};

export default Contact;
