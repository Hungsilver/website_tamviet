import React from "react";
import Image from "next/image";

const Section1Banner = () => {
  return (
    <div className="px-5">
      <div className="flex my-0 mx-auto max-w-[980px] w-full">
        <div className="flex-1 flex items-center text-2xl">
          <h2>Tâm Việt</h2>
        </div>
        <div className="flex-1">
          <Image
            src={"./img_section1.svg"}
            alt="imgsection1"
            height={500}
            width={600}
          />
        </div>
      </div>
    </div>
  );
};

export default Section1Banner;
