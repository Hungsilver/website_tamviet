import React from "react";

const ContainerSection = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="px-5">
      <div className="my-0 mx-auto max-w-[980px] w-full">{children}</div>
    </div>
  );
};

export default ContainerSection;
