import { CloseOutlined } from "@ant-design/icons";
import Link from "next/link";
import React from "react";

const MobileDrawer = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: (event: React.MouseEventHandler) => void;
}) => {
  return (
    <div
      className={`fixed flex flex-col justify-center items-center z-10 top-0 right-0 h-full w-full bg-white text-black transition-transform duration-300 transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <button className="absolute right-6 top-5 p-3" onClick={() => onClose}>
        <CloseOutlined style={{ fontSize: "24px" }} />
      </button>
      <ul className="flex flex-col text-lg gap-3 items-center">
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

export default MobileDrawer;
