import ProductMini from "@/ui/cards/product/mini";
import ProductsSidebar from "@/modules/products/sidebar/sidebar";
import ProductsHeader from "@/modules/products/header/header";
import LoadMoreProduct from "@/modules/products/loadmore/loadmore";

const Search = () => {
  return (
    <div className="container mx-auto my-10">
      <div className="row md:!flex-nowrap md:!flex-row">
        <div className="col-12 md:col-4 lg:col-3 sm:pl-2">
          <ProductsSidebar />
        </div>
        <div className="col-12 md:col-8 lg:col-9 my-5 sm:pr-2">
          <ProductsHeader />
          <div className="row">
            <div className="col-12 lg:col-4 mt-5 lg:px-4">
              <ProductMini
                id={4}
                image="product-demo.png"
                title="گوشی موبایل شیائومی مدل Redmi 13C دو سیم کارت ظرفیت 256 گیگابایت و رم 8 گیگابایت"
                discount={10}
                price={21675000}
                discountPrice={21260000}
              />
            </div>
            <div className="col-12 lg:col-4 mt-5 lg:px-4">
              <ProductMini
                id={4}
                image="product-demo2.png"
                title="گوشی موبایل شیائومی مدل Redmi 13C دو سیم کارت ظرفیت 256 گیگابایت و رم 8 گیگابایت"
                discount={10}
                price={21675000}
                discountPrice={21260000}
              />
            </div>
            <div className="col-12 lg:col-4 mt-5 lg:px-4">
              <ProductMini
                id={4}
                image="product-demo3.png"
                title="گوشی موبایل شیائومی مدل Redmi 13C دو سیم کارت ظرفیت 256 گیگابایت و رم 8 گیگابایت"
                discount={10}
                price={21675000}
                discountPrice={21260000}
              />
            </div>
            <div className="col-12 lg:col-4 mt-5 lg:px-4">
              <ProductMini
                id={4}
                image="product-demo4.png"
                title="گوشی موبایل شیائومی مدل Redmi 13C دو سیم کارت ظرفیت 256 گیگابایت و رم 8 گیگابایت"
                discount={10}
                price={21675000}
                discountPrice={21260000}
              />
            </div>
            <div className="col-12 lg:col-4 mt-5 lg:px-4">
              <ProductMini
                id={4}
                image="product-demo5.png"
                title="گوشی موبایل شیائومی مدل Redmi 13C دو سیم کارت ظرفیت 256 گیگابایت و رم 8 گیگابایت"
                discount={10}
                price={21675000}
                discountPrice={21260000}
              />
            </div>
            <div className="col-12 lg:col-4 mt-5 lg:px-4">
              <ProductMini
                id={4}
                image="product-demo3.png"
                title="گوشی موبایل شیائومی مدل Redmi 13C دو سیم کارت ظرفیت 256 گیگابایت و رم 8 گیگابایت"
                discount={10}
                price={21675000}
                discountPrice={21260000}
              />
            </div>
            <div className="col-12 lg:col-4 mt-5 lg:px-4">
              <ProductMini
                id={4}
                image="product-demo2.png"
                title="گوشی موبایل شیائومی مدل Redmi 13C دو سیم کارت ظرفیت 256 گیگابایت و رم 8 گیگابایت"
                discount={10}
                price={21675000}
                discountPrice={21260000}
              />
            </div>
            <div className="col-12 lg:col-4 mt-5 lg:px-4">
              <ProductMini
                id={4}
                image="product-demo.png"
                title="گوشی موبایل شیائومی مدل Redmi 13C دو سیم کارت ظرفیت 256 گیگابایت و رم 8 گیگابایت"
                discount={10}
                price={21675000}
                discountPrice={21260000}
              />
            </div>
            <div className="col-12 lg:col-4 mt-5 lg:px-4">
              <ProductMini
                id={4}
                image="product-demo5.png"
                title="گوشی موبایل شیائومی مدل Redmi 13C دو سیم کارت ظرفیت 256 گیگابایت و رم 8 گیگابایت"
                discount={10}
                price={21675000}
                discountPrice={21260000}
              />
            </div>
          </div>
          <LoadMoreProduct />
        </div>
      </div>
    </div>
  );
};

export default Search;
