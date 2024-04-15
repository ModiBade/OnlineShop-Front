import Link from "next/link";
import { FaStar } from "react-icons/fa6";

const ProductInfoBar = () => {

    return (
        <ul className="flex items-center text-xs">
            <li className="ml-3">
                <span className="text-gray-400">
                    کد کالا : <span className="text-emerald-500">293859</span>
                </span>
            </li>
            <li className="px-3 border-x">
                <span className="text-gray-400">
                    دسته بندی :{" "}
                    <Link href={`/search/category`} className="text-blue-500">
                        موبایل شیائومی
                    </Link>
                </span>
            </li>
            <li className="mr-3">
                <span className="flex items-center text-gray-400">
                    <div className="flex flex-col items-center">
                        <FaStar className="text-orange-400" />
                        <span>9.3</span>
                    </div>
                    <div className="mr-2 text-violet-500">0 دیدگاه</div>
                </span>
            </li>
        </ul>
    )

}

export default ProductInfoBar;