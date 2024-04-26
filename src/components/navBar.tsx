"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import Theme from "./theme";
import Language from "./language";
import MobileNavBar from "./mobileNavBar";
import NavBarItem from "./navBarItem";



function NavBar() {

  return (
    <nav className="border-b-2 top-0 left-0 dark:bg-popover dark:backdrop-blur-sm backdrop-blur-sm bg-white/30 right-0 fixed z-20 xl:pl-8 h-16 shadow-md flex justify-between items-center">
      <Link href="/" className="cursor-pointer flex items-center mx-3 xl:mx-0">
        <Image
          className="p-1 rounded-xl"
          src={"/assets/zedgenixLogo.png"}
          alt="Logo zedgenix"
          width={60}
          height={60}
        />
        <span className="font-bold xl:text-xl">ZEDGENIX</span>
      </Link>
      <div className="xl:hidden mx-3 xl:mx-0">
        <MobileNavBar />
      </div>
      <div className="xl:flex hidden">
        <NavBarItem />
      </div>
      <div className="items-center gap-10 xl:flex hidden">
        <div className="flex items-center gap-3">
          <div>
            <Language />
          </div>
          <div>
            <Theme />
          </div>
        </div>
        <button className="bg-gradient-to-r from-blue-800 to-blue-500 hover:from-blue-500 hover:to-blue-800  transition ease-in-out duration-500 text-white text-lg shadow-lg h-16 flex justify-center items-center px-10 rounded-tl-full rounded-br-full">
          Contact Us
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
