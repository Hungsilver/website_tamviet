import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-yellow_root px-5 py-10">
      <div className="max-w-[1200px] my-0 mx-auto flex flex-col gap-6">
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
        <div className="grid gap-[30px] grid-cols-1 mobile:grid-cols-2 md:grid-cols-4">
          <div className="">
            <h3 className="font-semibold">Contact</h3>
            <div className="grid grid-cols-1 mobile:grid-cols-2 gap-3 text-xs mt-3">
              <p>92 Láng Hạ, Đống Đa, Hà Nội</p>
              <p>Phone: 029353252</p>
              <p>Email: Tamviet@gmail.com</p>
              <p>Email: Tamviet@gmail.com</p>
            </div>
          </div>
          <div>
            <h3 className="font-semibold">Quick Links</h3>
            <ul className="text-xs mt-3">
              <li>
                <Link href={"/"}>Term & Conditions</Link>
              </li>
              <li>
                <Link href={"/"}>Privacy Policy</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">Follow</h3>
            <div className="text-xs my-3">
              <div className="flex flex-col rounded-[4px] gap-1 mb-2">
                <label htmlFor="">Email *</label>
                <input
                  className="rounded-[4px] px-2 py-1 bg-yellow_root border-2 border-black"
                  type="text"
                />
              </div>
              <div className="flex gap-1">
                <input type="checkbox" />
                <label htmlFor="">Yes, subscribe</label>
              </div>
            </div>
            <button className="rounded-[4px] px-2 py-1 text-white bg-black text-center w-full">
              Subscribe{" "}
            </button>
          </div>
          <div>
            <h3 className="font-semibold">Social</h3>
            <ul className="text-xs mt-3">
              <li>
                <Link href={"/"}>Linkedln</Link>
              </li>
              <li>
                <Link href={"/"}>Youtube</Link>
              </li>
              <li>
                <Link href={"/"}>Facebook</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
