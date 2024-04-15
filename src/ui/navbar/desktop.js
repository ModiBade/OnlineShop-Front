import { Menu, Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { GoDot, GoDotFill } from "react-icons/go";
import { HiMenuAlt3 } from "react-icons/hi";

const DesktopNavbar = () => {
  return (
    <div className="hidden lg:block mt-5">
      <nav className="flex items-center justify-between">
        <div className="flex items-center">
          <Menu as="div" className="relative ml-3">
            <Menu.Button className="flex items-center border-0 bg-blue-100 text-blue-700 px-3 py-2 rounded-t-lg">
              <HiMenuAlt3 className="text-2xl" />
              <span className="mr-2">دسته بندی محصولات</span>
            </Menu.Button>
            <Transition
              as={Fragment}
              enter="ease-in-out duration-500"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in-out duration-500"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity z-10" />
            </Transition>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute flex justify-around right-0 z-10 mt-2 w-fit origin-top-right rounded-md bg-white py-2 shadow-md py-5 px-5 focus:outline-none">
                <Menu.Item>
                  <div className="w-[14rem]">
                    <Link href="#" className="text-lg flex items-center">
                      <span className="text-blue-500">گوشی های موبایل</span>
                    </Link>
                    <ul className="text-xs mt-2 font-normal font-vazir text-gray-600">
                      <li className="py-2 flex items-center">
                        <Image
                          src="/media/images/3352_bange_60x.png"
                          width={25}
                          height={25}
                          className="ml-1"
                          alt="brand"
                          loading="lazy"
                        />
                        <Link href="#">گوشی آیفون</Link>
                      </li>
                      <li className="py-2 flex items-center">
                        <Image
                          src="/media/images/3352_bange_60x.png"
                          width={25}
                          height={25}
                          className="ml-1"
                          alt="brand"
                          loading="lazy"
                        />
                        <Link href="#">گوشی سامسونگ</Link>
                      </li>
                      <li className="py-2 flex items-center">
                        <Image
                          src="/media/images/3352_bange_60x.png"
                          width={25}
                          height={25}
                          className="ml-1"
                          alt="brand"
                          loading="lazy"
                        />
                        <Link href="#">گوشی شیائومی</Link>
                      </li>
                      <li className="py-2 flex items-center">
                        <Image
                          src="/media/images/3352_bange_60x.png"
                          width={25}
                          height={25}
                          className="ml-1"
                          alt="brand"
                          loading="lazy"
                        />
                        <Link href="#">گوشی هواوی</Link>
                      </li>
                      <li className="py-2 flex items-center">
                        <Image
                          src="/media/images/3352_bange_60x.png"
                          width={25}
                          height={25}
                          className="ml-1"
                          alt="brand"
                          loading="lazy"
                        />
                        <Link href="#">گوشی آنر</Link>
                      </li>
                      <li className="py-2 flex items-center">
                        <Image
                          src="/media/images/3352_bange_60x.png"
                          width={25}
                          height={25}
                          className="ml-1"
                          alt="brand"
                          loading="lazy"
                        />
                        <Link href="#">گوشی نوکیا</Link>
                      </li>
                    </ul>
                  </div>
                </Menu.Item>
                <Menu.Item>
                  <div className="w-[14rem]">
                    <Link href="#" className="text-lg flex items-center">
                      <span className="text-blue-500">تبلت</span>
                    </Link>
                    <ul className="text-xs mt-2 font-normal font-vazir text-gray-600">
                      <li className="py-2 flex items-center">
                        <Image
                          src="/media/images/3352_bange_60x.png"
                          width={25}
                          height={25}
                          className="ml-1"
                          alt="brand"
                          loading="lazy"
                        />
                        <Link href="#">سامسونگ</Link>
                      </li>
                      <li className="py-2 flex items-center">
                        <Image
                          src="/media/images/3352_bange_60x.png"
                          width={25}
                          height={25}
                          className="ml-1"
                          alt="brand"
                          loading="lazy"
                        />
                        <Link href="#">لنوو</Link>
                      </li>
                    </ul>
                  </div>
                </Menu.Item>
                <Menu.Item>
                  <div className="w-[14rem]">
                    <Link href="#" className="text-lg flex items-center">
                      <span className="text-blue-500">لوازم جانبی</span>
                    </Link>
                    <ul className="text-xs mt-2 font-normal font-vazir text-gray-600">
                      <li className="py-2 flex items-center">
                        <Image
                          src="/media/images/3352_bange_60x.png"
                          width={25}
                          height={25}
                          className="ml-1"
                          alt="brand"
                          loading="lazy"
                        />
                        <Link href="#">هدفون و هندزفری</Link>
                      </li>
                      <li className="py-2 flex items-center">
                        <Image
                          src="/media/images/3352_bange_60x.png"
                          width={25}
                          height={25}
                          className="ml-1"
                          alt="brand"
                          loading="lazy"
                        />
                        <Link href="#">شارژر و کابل</Link>
                      </li>
                      <li className="py-2 flex items-center">
                        <Image
                          src="/media/images/3352_bange_60x.png"
                          width={25}
                          height={25}
                          className="ml-1"
                          alt="brand"
                          loading="lazy"
                        />
                        <Link href="#">پاور بانک</Link>
                      </li>
                      <li className="py-2 flex items-center">
                        <Image
                          src="/media/images/3352_bange_60x.png"
                          width={25}
                          height={25}
                          className="ml-1"
                          alt="brand"
                          loading="lazy"
                        />
                        <Link href="#">اسپیکر</Link>
                      </li>
                      <li className="py-2 flex items-center">
                        <Image
                          src="/media/images/3352_bange_60x.png"
                          width={25}
                          height={25}
                          className="ml-1"
                          alt="brand"
                          loading="lazy"
                        />
                        <Link href="#">محافظ و گارد</Link>
                      </li>
                    </ul>
                  </div>
                </Menu.Item>
                <Menu.Item>
                  <div className="w-[14rem]">
                    <Link href="#" className="text-lg flex items-center">
                      <span className="text-blue-500">رایانه و ذخیره سازی</span>
                    </Link>
                    <ul className="text-xs mt-2 font-normal font-vazir text-gray-600">
                      <li className="py-2 flex items-center">
                        <Image
                          src="/media/images/3352_bange_60x.png"
                          width={25}
                          height={25}
                          className="ml-1"
                          alt="brand"
                          loading="lazy"
                        />
                        <Link href="#">کارت حافظه ( مموری )</Link>
                      </li>
                      <li className="py-2 flex items-center">
                        <Image
                          src="/media/images/3352_bange_60x.png"
                          width={25}
                          height={25}
                          className="ml-1"
                          alt="brand"
                          loading="lazy"
                        />
                        <Link href="#">حافظه جانبی ( فلش )</Link>
                      </li>
                      <li className="py-2 flex items-center">
                        <Image
                          src="/media/images/3352_bange_60x.png"
                          width={25}
                          height={25}
                          className="ml-1"
                          alt="brand"
                          loading="lazy"
                        />
                        <Link href="#">حافظه جانبی موبایل ( OTG )</Link>
                      </li>
                    </ul>
                  </div>
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>
          <Link
            href="/"
            className="ml-4 text-sm font-bold font-bakh text-gray-600 border-b-4 border-transparent transition hover:border-pink-500 hover:text-pink-500"
          >
            ویترین
          </Link>
          <Link
            href="?type=here"
            className="ml-4 text-sm font-bold font-bakh text-gray-600 border-b-4 border-transparent transition hover:border-pink-500 hover:text-pink-500"
          >
            پرفروش ترین ها
          </Link>
          <Link
            href="#"
            className="ml-4 text-sm font-bold font-bakh text-gray-600 border-b-4 border-transparent transition hover:border-pink-500 hover:text-pink-500"
          >
            پیشنهادات داغ
          </Link>
          <Link
            href="/faq"
            className="ml-4 text-sm font-bold font-bakh text-gray-600 border-b-4 border-transparent transition hover:border-pink-500 hover:text-pink-500"
          >
            سوالات متداول
          </Link>
          <Link
            href="#"
            className="ml-4 text-sm font-bold font-bakh text-gray-600 border-b-4 border-transparent transition hover:border-pink-500 hover:text-pink-500"
          >
            مجله
          </Link>
          <Link
            href="/about"
            className="ml-4 text-sm font-bold font-bakh text-gray-600 border-b-4 border-transparent transition hover:border-pink-500 hover:text-pink-500"
          >
            درباره ما
          </Link>
        </div>
        <div>
          <Link
            href="/contact"
            className=" bg-slate-100 text-slate-700 px-3 py-2 rounded-t-lg"
          >
            ارتباط با ما
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default DesktopNavbar;
