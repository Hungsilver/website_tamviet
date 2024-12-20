"use client";
import Image from "next/image";
import React, { useState } from "react";
import "./Header.css";
import MenuPC from "./MenuPC";
import MenuMobi from "./MenuMobile";
import MobileDrawer from "./MobileDrawer";

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <header className="py-[1.5rem] px-1 sm:px-5">
      <nav className="max-w-[1200px] w-full my-0 mx-auto flex justify-between">
        <div className="flex gap-1">
          <Image
            src={"/logo/logo-tamviet.png"}
            width={40}
            height={20}
            alt="logo"
          />
          <div className="">
            <p className="text-[1rem]">Tâm việt</p>
            <p className="text-xs">Vì 1 Việt Nam phát triển</p>
          </div>
        </div>
        <div className="hidden sm:flex">
          <MenuPC />
        </div>
        <div className="flex sm:hidden items-center">
          <div className="cursor-pointer" onClick={handleDrawerToggle}>
            <MenuMobi onClick={handleDrawerToggle} />
            <MobileDrawer isOpen={isDrawerOpen} onClose={handleDrawerToggle} />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
