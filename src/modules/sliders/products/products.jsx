"use client"

import ProductMini from "@/ui/cards/product/mini";
import { GiBasket } from "react-icons/gi";
import { Swiper, SwiperSlide } from "swiper/react";
import NextButton from "./tools/nextButton";
import PrevButton from "./tools/prevButton";
import SwiperCore from 'swiper';
import { Autoplay } from "swiper/modules";

import 'swiper/css';

const ProductsSlider = ({ products, title, subtitle, color, delay }) => {

    SwiperCore.use([Autoplay]);

    return (
        <div className="bg-white mt-5 rounded-2xl p-5">
            <Swiper
                className="!pt-8"
                spaceBetween={30}
                slidesPerView={'auto'}
                autoplay={{
                    "delay": delay,
                    "pauseOnMouseEnter": true,
                }}
            >
                <SwiperSlide className="py-4 px-2 !w-[18em]">
                    <ProductMini id={1} image="product-demo.png" title="گوشی موبایل شیائومی مدل Redmi 13C دو سیم کارت ظرفیت 256 گیگابایت و رم 8 گیگابایت" discount={10} price={21675000} discountPrice={21260000} />
                </SwiperSlide>
                <SwiperSlide className="py-4 px-2 !w-[18em]">
                    <ProductMini id={5} image="product-demo2.png" title="گوشی موبایل شیائومی مدل Redmi 13C دو سیم کارت ظرفیت 256 گیگابایت و رم 8 گیگابایت" discount={10} price={21675000} discountPrice={21260000} />
                </SwiperSlide>
                <SwiperSlide className="py-4 px-2 !w-[18em]">
                    <ProductMini id={3} image="product-demo3.png" title="گوشی موبایل شیائومی مدل Redmi 13C دو سیم کارت ظرفیت 256 گیگابایت و رم 8 گیگابایت" discount={10} price={21675000} discountPrice={21260000} />
                </SwiperSlide>
                <SwiperSlide className="py-4 px-2 !w-[18em]">
                    <ProductMini id={4} image="product-demo4.png" title="گوشی موبایل شیائومی مدل Redmi 13C دو سیم کارت ظرفیت 256 گیگابایت و رم 8 گیگابایت" discount={10} price={21675000} discountPrice={21260000} />
                </SwiperSlide>
                <SwiperSlide className="py-4 px-2 !w-[18em]">
                    <ProductMini id={2} image="product-demo5.png" title="گوشی موبایل شیائومی مدل Redmi 13C دو سیم کارت ظرفیت 256 گیگابایت و رم 8 گیگابایت" discount={10} price={21675000} discountPrice={21260000} />
                </SwiperSlide>
                <SwiperSlide className="py-4 px-2 !w-[18em]">
                    <ProductMini id={2} image="product-demo.png" title="گوشی موبایل شیائومی مدل Redmi 13C دو سیم کارت ظرفیت 256 گیگابایت و رم 8 گیگابایت" discount={10} price={21675000} discountPrice={21260000} />
                </SwiperSlide>
                <div className="absolute flex items-center justify-between left-0 top-[-10px] w-full mt-2">
                    <div className="flex items-center">
                        <GiBasket className={`text-3xl text-${color}`} />
                        <div className="mr-2">
                            <h3 className={`text-${color}`}>{title}</h3>
                            <p className="font-iran font-normal text-[11px] text-slate-500">{subtitle}</p>
                        </div>
                    </div>
                    <div>
                        <NextButton color={color} />
                        <PrevButton color={color} />
                    </div>
                </div>
            </Swiper>
        </div>
    )

}

export default ProductsSlider;