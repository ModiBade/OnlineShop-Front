import { IoIosArrowForward } from "react-icons/io";
import { useSwiper } from "swiper/react";

const NextButton = ({ color }) => {

    const swiper = useSwiper();

    return <button className={`text-${color} ml-4 text-2xl`} onClick={() => swiper.slideNext()}><IoIosArrowForward /></button>

}

export default NextButton;