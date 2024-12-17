import Image from "next/image";
import React from "react";
import "./Header.css";
import MenuPC from "./MenuPC";
import MenuMobi from "./MenuMobile";

const Header = () => {
  return (
    <header className="py-[1.5rem] px-5">
      <nav className="max-w-[1200px] w-full my-0 mx-auto flex justify-between">
        <div className="flex gap-1">
          <Image src={"/logo/doraemon.png"} width={40} height={20} alt="logo" />
          <div className="">
            <p className="text-[1rem]">Tâm việt</p>
            <p className="text-xs">Vì 1 Việt Nam phát triển</p>
          </div>
        </div>
        <div className="hidden sm:flex">
          <MenuPC />
        </div>
        <div className="flex sm:hidden">
          <MenuMobi />
        </div>
      </nav>
    </header>
  );
};

export default Header;
