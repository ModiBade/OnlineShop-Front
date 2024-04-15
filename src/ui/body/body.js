import ShowcaseSlider from "@/modules/sliders/showcase/showcase";
import Image from "next/image";
import ProductsSlider from "@/modules/sliders/products/products";

const Body = () => {
  return (
    <div className="container mx-auto mb-10">
      <div className="mb-5">
        <ShowcaseSlider />
      </div>
      <div className="row sm:!flex-row">
        <div className="sm:col-6 col-12 pl-2">
          <ProductsSlider
            title="جدیدترین های شیائومی"
            subtitle="جدیدترین محصولات برند شیائومی"
            color="success"
            delay={3500}
          />
        </div>
        <div className="sm:col-6 col-12 pr-2.">
          <ProductsSlider
            title="سامسونگ اینجاست :)"
            subtitle="جدیدترین محصولات برند سامسونگ"
            color="danger"
            delay={2000}
          />
        </div>
      </div>
      <div className="row !flex-row mt-2">
        <div className="lg:col-2 md:col-4 col-6 lg:pl-2 md:pl-2 pl-1 mt-3">
          <Image
            className="rounded-2xl shadow-md"
            src="/media/images/airpod-accessories.webp"
            width={450}
            height={40}
            alt="logo"
            loading="lazy"
          />
        </div>
        <div className="lg:col-2 md:col-4 col-6 lg:px-1 md:px-1 pr-1 mt-3">
          <Image
            className="rounded-2xl shadow-md"
            src="/media/images/apple-watch-accessories.webp"
            width={450}
            height={40}
            alt="logo"
            loading="lazy"
          />
        </div>
        <div className="lg:col-2 md:col-4 col-6 lg:px-1 md:pr-2 pr-1 pl-1 mt-3">
          <Image
            className="rounded-2xl shadow-md"
            src="/media/images/car-accessories.webp"
            width={450}
            height={40}
            alt="logo"
            loading="lazy"
          />
        </div>
        <div className="lg:col-2 md:col-4 col-6 lg:px-1 md:pl-2 pr-1 mt-3">
          <Image
            className="rounded-2xl shadow-md"
            src="/media/images/carcharger.webp"
            width={450}
            height={40}
            alt="logo"
            loading="lazy"
          />
        </div>
        <div className="lg:col-2 md:col-4 col-6 lg:px-1 md:px-1 pl-1 mt-3">
          <Image
            className="rounded-2xl shadow-md"
            src="/media/images/apple-watch-accessories.webp"
            width={450}
            height={40}
            alt="logo"
            loading="lazy"
          />
        </div>
        <div className="lg:col-2 md:col-4 col-6 lg:pr-2 md:pr-2 pr-1 mt-3">
          <Image
            className="rounded-2xl shadow-md"
            src="/media/images/airpod-accessories.webp"
            width={450}
            height={40}
            alt="logo"
            loading="lazy"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <ProductsSlider
            title="انکر آوردیم بیا و ببین :)"
            subtitle="جدیدترین محصولات برند انکر"
            color="primary"
            delay={2000}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <ProductsSlider
            title="انکر آوردیم بیا و ببین :)"
            subtitle="جدیدترین محصولات برند انکر"
            color="primary"
            delay={2000}
          />
        </div>
      </div>
    </div>
  );
};

export default Body;
