"use client";

import DesktopSearch from "@/ui/header/layouts/search/desktop";
import Profile from "@/ui/header/layouts/profile/profile";
import Image from "next/image";
import Icons from "@/ui/header/layouts/icons/icons";
import MobileSearch from "@/ui/header/layouts/search/mobile";
import MobileNavbar from "../navbar/mobile";
import DesktopNavbar from "../navbar/desktop";
import { useEffect, useState } from "react";

const Header = () => {
  // const [isFixed, setIsFixed] = useState(false);

  // useEffect(() => {
  //   const fixer = () => {
  //     const currentY = window.scrollY;
  //     if (currentY > 200) {
  //       setIsFixed(true);
  //     } else {
  //       setIsFixed(false);
  //     }
  //   };

  //   setIsFixed(true);

  //   window.addEventListener("scroll", fixer);

  //   return () => {
  //     window.removeEventListener("scroll", fixer);
  //   };
  //   //eslint-disable-next-line
  // }, []);

  return (
    <>
      {/* <div className="text-center bg-pink-500 text-sm text-white font-vazir py-3">این یک اطلاعیه می باشد</div> */}
      <div
        // className={
        //   isFixed
        //     ? `transition fixed z-[10] w-full bg-white px-7 pt-4 pb-4 border-t-4 border-lime-500 shadow-md mb-5`
        //     : `transition bg-white px-7 pt-4 pb-4 lg:pb-0 border-t-4 border-lime-500 shadow-md mb-5`
        // }
        className="transition bg-white px-7 pt-4 pb-4 lg:pb-0 border-t-4 border-lime-500 shadow-md mb-5"
      >
        <div className="container mx-auto flex items-center justify-between">
          <MobileNavbar />
          <Image
            className="hidden xs:inline"
            src="/media/images/logo.png"
            width={150}
            height={40}
            alt="logo"
            priority
          />
          <Image
            className="inline xs:hidden"
            src="/media/images/icon-logo.png"
            width={40}
            height={40}
            alt="logo"
            priority
          />
          <DesktopSearch />
          <div className="flex items-center">
            <Icons />
            <Profile />
          </div>
        </div>
        <div className="container mx-auto">
          <MobileSearch />
          <DesktopNavbar />
        </div>
      </div>
    </>
  );
};

export default Header;
