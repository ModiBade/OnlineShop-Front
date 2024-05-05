import { numberFormat } from "@/lib/tools/utils";
import Image from "next/image";
import { TbDiscount2 } from "react-icons/tb";
import ProductPreview from "@/modules/products/preview/preview";
import ProductsCompare from "@/modules/products/compare/compare";
import AddProductToWishlist from "@/modules/products/wishlist/wishlist";
import AddProductToBasket from "@/modules/products/basket/basket";
import Link from "next/link";
import { BaseConfig } from "@/lib/config/base";

const ProductMini = ({ data }) => {
  return (
    <div className="relative group bg-white rounded-2xl transition hover:shadow-lg">
      <div className="flex flex-col items-center">
        <Image
          loading="lazy"
          className="rounded-2xl"
          src={`${
            BaseConfig.baseUrl
          }/media/images/products/${data.avatar.replace("*", "250")}`}
          width={300}
          height={40}
          alt="product picture"
        />
      </div>
      <div className="mt-2 p-5">
        <Link href={`/product/${data.slug}`}>
          <h2 className=" text-slate-700 text-sm text-justify">
            {data.nameFa.substring(0, 65)}...
          </h2>
        </Link>
        <div className="flex items-center justify-between mt-5">
          <div className="flex items-center bg-orange-100 text-orange-600 rounded-2xl px-2 py-2">
            <span className="text-[18px]">{data.discountPercent}</span>
            <TbDiscount2 className="text-xl" />
          </div>
          <div>
            <div className="flex">
              <span className="ml-1 text-lg text-slate-600 line-through">
                {numberFormat(data.price)}
              </span>
              <Image
                src="/media/icons/svg/toman-fade.svg"
                width={18}
                height={18}
                alt="toman"
              />
            </div>
            <div className="flex">
              <span className="ml-1 text-lg text-emerald-600">
                {numberFormat(data.discountPrice)}
              </span>
              <Image
                src="/media/icons/svg/toman.svg"
                width={18}
                height={18}
                alt="toman"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between p-3">
        <AddProductToWishlist type="preview" />
        <AddProductToBasket type="preview" />
      </div>
      <div className="transition bg-white rounded-r-lg absolute hidden group-hover:block top-0 left-0 bg-transparent flex flex-col px-3 py-4">
        <ProductPreview data={data} />
        <ProductsCompare />
      </div>
    </div>
  );
};

export default ProductMini;
