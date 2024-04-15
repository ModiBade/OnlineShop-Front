import AddProductToBasket from "@/modules/products/basket/basket";
import ProductsCompare from "@/modules/products/compare/compare";
import AddProductToWishlist from "@/modules/products/wishlist/wishlist";
import ProductsSlider from "@/modules/sliders/products/products";
import Image from "next/image";
import { MdDeliveryDining } from "react-icons/md";
import { LuShieldCheck } from "react-icons/lu";
import ProductGallery from "@/modules/products/gallery/gallery";
import ProductInfoBar from "@/modules/products/infoBar/infoBar";
import ProductAttributes from "@/modules/products/attributes/attributes";
import ProductTabs from "@/modules/products/tabs/tabs";

const ProductDetails = () => {
  return (
    <>
      <div className="container mx-auto bg-white my-5 rounded-2xl">
        <div className="row">
          <div className="relative col-12 md:col-6 lg:col-3 xl:col-3 border-l border-dashed">
            <div className="absolute px-3">
              <ProductsCompare />
              <AddProductToWishlist />
            </div>
            <ProductGallery />
          </div>
          <div className="col-12 md:col-6 lg:col-5 xl:col-6">
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
          <div className="col-12 lg:col-4 xl:col-3 border-r border-dashed">
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
        <hr className="border-dashed" />
        <div className="p-5">
          <ProductTabs />
        </div>
      </div>
      <div className="container mx-auto mb-10">
        <div className="row">
          <div className="col-12">
            <ProductsSlider
              title="کالا های مشابه"
              subtitle="سایر محصولات مرتبط"
              color="primary"
              delay={2000}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
