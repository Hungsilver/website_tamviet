import ContainerSection from "@/components/ContainerSection";
import Image from "next/image";
import React from "react";

const HomePage = () => {
  return (
    <>
      <ContainerSection>
        <div className="flex">
          <div className="flex-1 flex items-center text-2xl">
            <h2>Tâm BA lỏ</h2>
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
      </ContainerSection>
      <ContainerSection>
        <div className="">
          <div>
            <p>With the Right Software, Great Things Can Happen</p>
          </div>
          <div>
            <p>
              I am a paragraph. Click here to add your own text and edit me.
              It’s easy. Just click “Edit Text” or double click me to add your
              own content and make changes to the font. Feel free to drag and
              drop me anywhere you like on your page. I’m a great place for you
              to tell a story and let your users know a little more about you.
            </p>
          </div>
        </div>
      </ContainerSection>
      <ContainerSection>
        <div className="grid "></div>
      </ContainerSection>
    </>
  );
};

export default HomePage;
