import Link from "next/link";
import { FaClipboardList } from "react-icons/fa6";
import { GoDot, GoDotFill } from "react-icons/go";

const Categories = () => {

    return (
        <div>
            <div className="flex mb-4">
                <FaClipboardList className="text-xl text-gray-500" />
                <h3 className="text-gray-500 mr-2">دسته بندی ها</h3>
            </div>
            <div className="text-gray-500">
                <Link href="#" className="text-sm flex items-center">
                    <GoDotFill className="text-blue-500 ml-1" />
                    <span>گوشی های موبایل</span>
                </Link>
                <ul className="text-xs mt-2 font-normal font-vazir mr-4 text-gray-400">
                    <li className="py-1 flex items-center">
                        <GoDot className="text-blue-500 ml-1" />
                        <Link href="#">گوشی آیفون</Link>
                    </li>
                    <li className="py-1 flex items-center">
                        <GoDot className="text-blue-500 ml-1" />
                        <Link href="#">گوشی سامسونگ</Link>
                    </li>
                    <li className="py-1 flex items-center">
                        <GoDot className="text-blue-500 ml-1" />
                        <Link href="#">گوشی شیائومی</Link>
                    </li>
                    <li className="py-1 flex items-center">
                        <GoDot className="text-blue-500 ml-1" />
                        <Link href="#">گوشی هواوی</Link>
                    </li>
                    <li className="py-1 flex items-center">
                        <GoDot className="text-blue-500 ml-1" />
                        <Link href="#">گوشی آنر</Link>
                    </li>
                    <li className="py-1 flex items-center">
                        <GoDot className="text-blue-500 ml-1" />
                        <Link href="#">گوشی نوکیا</Link>
                    </li>
                </ul>
            </div>
            <div className="text-gray-500 mt-4">
                <Link href="#" className="text-sm flex items-center">
                    <GoDotFill className="text-blue-500 ml-1" />
                    <span>لوازم جانبی</span>
                </Link>
                <ul className="text-xs mt-2 font-normal font-vazir mr-4 text-gray-400">
                    <li className="py-1 flex items-center">
                        <GoDot className="text-blue-500 ml-1" />
                        <Link href="#">کابل و شارژر</Link>
                    </li>
                    <li className="py-1 flex items-center">
                        <GoDot className="text-blue-500 ml-1" />
                        <Link href="#">کاور گوشی</Link>
                    </li>
                    <li className="py-1 flex items-center">
                        <GoDot className="text-blue-500 ml-1" />
                        <Link href="#">محافظ صفحه</Link>
                    </li>
                    <li className="py-1 flex items-center">
                        <GoDot className="text-blue-500 ml-1" />
                        <Link href="#">شارژر فندکی</Link>
                    </li>
                    <li className="py-1 flex items-center">
                        <GoDot className="text-blue-500 ml-1" />
                        <Link href="#">پاور بانک</Link>
                    </li>
                    <li className="py-1 flex items-center">
                        <GoDot className="text-blue-500 ml-1" />
                        <Link href="#">اسپیکر</Link>
                    </li>
                </ul>
            </div>
        </div>
    )

}

export default Categories;