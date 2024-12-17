import React from "react";
import Link from "next/link";

const MenuPC = () => {
  return (
    <div>
      <ul className="flex text-sm gap-3 items-center">
        <li>
          <Link href={"/"}>Trang chủ</Link>
        </li>
        <li>
          <Link href={"/san-pham"}>Sản phẩm</Link>
        </li>
        <li>
          <Link href={"/lien-he"}>Liên hệ</Link>
        </li>
        <li>
          <Link href={"/tin-tuc"}>Tin tức</Link>
        </li>
        <li>
          <Link href={"/tuyen-dung"}>Tuyển dụng</Link>
        </li>
        <li>
          <button className="border border-black font-medium rounded-md bg-yellow_root px-2 py-1">
            Get Started
          </button>
        </li>
      </ul>
    </div>
  );
};

export default MenuPC;
