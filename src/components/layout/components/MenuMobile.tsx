"use client";
import { MenuOutlined } from "@ant-design/icons";
import React from "react";

const MenuMobi = ({ onClick }: { onClick: React.MouseEventHandler }) => {
  return (
    <>
      <button className="" onClick={onClick}>
        <MenuOutlined style={{ fontSize: "24px" }} />
      </button>
      {/* <CloseOutlined /> */}
    </>
  );
};

export default MenuMobi;
