import { numberFormat } from "@/lib/tools/utils";
import Image from "next/image";
import { CiSquareMinus, CiSquarePlus } from "react-icons/ci";
import { TbDiscount2 } from "react-icons/tb";

const { BsBasket } = require("react-icons/bs")

const AddProductToBasket = ({ type }) => {
    return (
        <>
            {
                type === "preview" &&
                <button className="flex transition bg-blue-100 hover:bg-sky-500 text-sky-600 hover:text-white px-3 py-2 rounded-lg">
                    <BsBasket className="text-lg" />
                    <span className="!text-md mr-2">بره تو سبد خرید</span>
                </button>
            }
            {
                type === "full" &&
                <>
                    <div className="flex items-center justify-between mt-5 py-3 px-6">
                        <div className="flex items-center bg-orange-100 text-orange-600 rounded-2xl px-2 py-2">
                            <span className="text-[18px]">10</span>
                            <TbDiscount2 className="text-xl" />
                        </div>
                        <div>
                            <div className="flex">
                                <span className="ml-1 text-3xl text-slate-600 line-through">
                                    {numberFormat(25650000)}
                                </span>
                                <span className="svg-sm svg-slate">
                                    <Image
                                        src="/media/icons/svg/toman-fade.svg"
                                        width={25}
                                        height={25}
                                        alt="toman"
                                    />
                                </span>
                            </div>
                            <div className="flex">
                                <span className="ml-1 text-3xl text-emerald-600">
                                    {numberFormat(22650000)}
                                </span>
                                <span className="svg-sm svg-success">
                                    <Image
                                        src="/media/icons/svg/toman.svg"
                                        width={25}
                                        height={25}
                                        alt="toman"
                                    />
                                </span>
                            </div>
                        </div>
                    </div>
                    <hr className="border-dashed my-5" />
                    <div className="flex flex-col py-3 px-6">
                        <div className="flex items-center justify-between mb-5">
                            <p className="text-gray-600">رنگ : </p>
                            <ul className="flex items-center justify-around">
                                <li className="cursor-pointer w-[28px] bg-pink-300 text-pink-300 rounded-md border-2 border-pink-300 mr-2">.</li>
                                <li className="cursor-pointer w-[28px] bg-blue-300 text-blue-300 rounded-md border-2 border-blue-300 mr-2">.</li>
                                <li className="cursor-pointer w-[28px] bg-emerald-300 text-emerald-300 rounded-md border-2 border-emerald-600 mr-2">.</li>
                                <li className="cursor-pointer w-[28px] bg-orange-300 text-orange-300 rounded-md border-2 border-orange-300 mr-2">.</li>
                                <li className="cursor-pointer w-[28px] bg-violet-300 text-violet-300 rounded-md border-2 border-violet-300 mr-2">.</li>
                            </ul>
                        </div>
                        <div className="flex items-center justify-between">
                            <p className="text-gray-600">سایز : </p>
                            <ul className="flex items-center justify-around">
                                <li className="cursor-pointer text-xs mr-2 text-gray-500 border-2 px-3 py-1 rounded-lg">بزرگ</li>
                                <li className="cursor-pointer text-xs mr-2 text-gray-500 border-2 px-3 py-1 rounded-lg">متوسط</li>
                                <li className="cursor-pointer text-xs mr-2 text-gray-500 border-2 border-gray-500 px-3 py-1 rounded-lg">کوچیک</li>
                            </ul>
                        </div>
                    </div>
                    <hr className="border-dashed my-5" />
                    <div className="flex items-center justify-between py-3 px-6">
                        <div className="flex items-center justify-between border border-gray-100 w-[5em] py-1 px-2 rounded-xl text-2xl">
                            <button><CiSquarePlus className="text-gray-400" /></button>
                            <span className="text-gray-600">1</span>
                            <button><CiSquareMinus className="text-gray-400" /></button>
                        </div>
                        <button className="flex transition bg-blue-100 hover:bg-sky-500 text-sky-600 hover:text-white px-3 py-2 rounded-lg">
                            <BsBasket className="text-lg" />
                            <span className="!text-md mr-2">بره تو سبد خرید</span>
                        </button>
                    </div>
                </>
            }
        </>
    )
}

export default AddProductToBasket;