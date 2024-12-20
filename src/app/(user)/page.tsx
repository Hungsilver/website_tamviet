import ContainerSection from "@/components/ContainerSection";
import Section1Banner from "@/components/home/Section1-banner";
import Section2Info from "@/components/home/Section2-info";
import Section3InfoProduct from "@/components/home/Section3-InfoProduct";
import React from "react";

const HomePage = () => {
  return (
    <>
      <Section1Banner />
      <Section2Info />
      <Section3InfoProduct />

      <ContainerSection>
        <div className="grid "></div>
      </ContainerSection>
    </>
  );
};

export default HomePage;
