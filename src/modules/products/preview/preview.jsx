"use client"

import Modal from "@/ui/modal/modal";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaStar } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import AddProductToBasket from "../basket/basket";
import { LuShieldCheck } from "react-icons/lu";
import { MdDeliveryDining } from "react-icons/md";
import ProductGallery from "../gallery/gallery";
import ProductInfoBar from "../infoBar/infoBar";
import ProductAttributes from "../attributes/attributes";

const ProductPreview = () => {

    const [show, setShow] = useState(false);

    return (
        <>
            <Modal show={show} onClose={setShow} size="w-[75rem]">
                <Modal.Body>
                    <div className="row">
                        <div className="relative col-12 md:col-6 lg:col-3 xl:col-3 border-l border-dashed">
                            <ProductGallery />
                        </div>
                        <div className="col-12 md:col-6 lg:col-5 xl:col-5">
                            <div className="p-4">
                                <div>
                                    <Image
                                        src="/media/images/3352_bange_60x.png"
                                        width={50}
                                        height={50}
                                        alt="title"
                                        loading="lazy"
                                    />
                                </div>
                                <div className="mt-5">
                                    <h2 className="font-bakh font-normal mt-3 text-gray-600 text-xl">
                                        گوشی موبایل شیائومی مدل Redmi 13C دو سیم کارت ظرفیت 256
                                        گیگابایت و رم 8 گیگابایت
                                    </h2>
                                    <h4 className="font-[calibri] text-slate-400 tracking-wide text-lg">
                                        Xiaumi Redmi 13C - 8GB - 256GB Dual sim
                                    </h4>
                                </div>
                                <hr className="border-dashed my-5" />
                                <ProductInfoBar />
                                <ProductAttributes />
                            </div>
                        </div>
                        <div className="col-12 lg:col-4 xl:col-4 border-r border-dashed">
                            <div className="group relative">
                                <AddProductToBasket type="full" />
                                <div className="flex items-center justify-between py-3 px-6">
                                    <div className="flex items-center bg-violet-100 text-violet-600 text-xs px-3 py-1 rounded-lg">
                                        <LuShieldCheck className="text-lg" />
                                        <span className="mr-1">ضمانت اصالت و گارانتی کالا</span>
                                    </div>
                                    <div className="flex items-center bg-green-100 text-emerald-600 text-xs px-3 py-1 rounded-lg">
                                        <MdDeliveryDining className="text-lg" />
                                        <span className="mr-1">ارسال رایگان</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
            <button onClick={() => setShow(true)} className="transition block text-slate-600 hover:bg-violet-100 hover:text-violet-600 text-xl p-1 rounded-md">
                <IoSearch />
            </button>
        </>
    )

}

export default ProductPreview;