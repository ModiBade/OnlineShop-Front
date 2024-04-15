import Image from "next/image";

const ProductGallery = () => {

    return (
        <div className="flex flex-col items-center p-8">
            <Image
                src="/media/images/product-demo3.png"
                width={300}
                height={300}
                alt="title"
            />
            <div className="flex items-center flex-wrap">
                <Image
                    src="/media/images/product-demo.png"
                    width={70}
                    height={70}
                    alt="title"
                    className="border p-1 ml-1 mt-1 rounded-md"
                    loading="lazy"
                />
                <Image
                    src="/media/images/product-demo2.png"
                    width={70}
                    height={70}
                    alt="title"
                    className="border p-1 ml-1 mt-1 rounded-md"
                    loading="lazy"
                />
                <Image
                    src="/media/images/product-demo3.png"
                    width={70}
                    height={70}
                    alt="title"
                    className="border p-1 ml-1 mt-1 rounded-md"
                    loading="lazy"
                />
                <Image
                    src="/media/images/product-demo4.png"
                    width={70}
                    height={70}
                    alt="title"
                    className="border p-1 ml-1 mt-1 rounded-md"
                    loading="lazy"
                />
            </div>
        </div>
    )

}

export default ProductGallery;