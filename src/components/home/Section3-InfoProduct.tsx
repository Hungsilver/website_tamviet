import Image from "next/image";
import React from "react";

const Section3InfoProduct = () => {
  return (
    <div className="py-20 px-1 sm:px-0">
      <div className="my-0 mx-auto max-w-[980px] w-full flex flex-col gap-16">
        <div className="flex flex-col gap-3">
          <p className="text-3xl">What We Offer</p>
          <p className="flex max-w-[500px]">
            I am a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 sm:gap-3 justify-center ">
          <div className="flex flex-col gap-6">
            <div>
              <Image
                className="object-cover w-full px-10 sm:px-0 "
                // src={"/images/avtphuong.png"}
                src={"/images/img-section3-1.png"}
                width={300}
                height={300}
                alt="img1"
              />
            </div>
            <div className="flex flex-col gap-3 text-center  sm:text-left">
              <h3 className="text-xl">Workflows That Work</h3>
              <p className="line-clamp-3">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium asperiores dignissimos doloribus modi eos! Dolorum
                similique tempore, sit exercitationem quasi rerum voluptatem
                incidunt voluptatibus molestiae quibusdam, ea, explicabo nemo
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div>
              <Image
                className="object-cover w-full px-10 sm:px-0 "
                src={"/images/img-section3-2.png"}
                width={300}
                height={300}
                alt="img1"
              />
            </div>
            <div className="flex flex-col gap-3 text-center  sm:text-left">
              <h3 className="text-xl">Workflows That Work</h3>
              <p className="line-clamp-3">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium asperiores dignissimos doloribus modi eos! Dolorum
                similique tempore, sit exercitationem quasi rerum voluptatem
                incidunt voluptatibus molestiae quibusdam, ea, explicabo nemo
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div>
              <Image
                className="object-cover w-full px-10 sm:px-0 "
                src={"/images/img-section3-3.png"}
                width={300}
                height={300}
                alt="img1"
              />
            </div>
            <div className="flex flex-col gap-3 text-center sm:text-left">
              <h3 className="text-xl">Workflows That Work</h3>
              <p className="line-clamp-3">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium asperiores dignissimos doloribus modi eos! Dolorum
                similique tempore, sit exercitationem quasi rerum voluptatem
                incidunt voluptatibus molestiae quibusdam, ea, explicabo nemo
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div>
              <Image
                className="object-cover w-full px-10 sm:px-0 "
                src={"/images/img-section3-4.png"}
                width={300}
                height={300}
                alt="img1"
              />
            </div>
            <div className="flex flex-col gap-3 text-center  sm:text-left">
              <h3 className="text-xl">Workflows That Work</h3>
              <p className="line-clamp-3">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium asperiores dignissimos doloribus modi eos! Dolorum
                similique tempore, sit exercitationem quasi rerum voluptatem
                incidunt voluptatibus molestiae quibusdam, ea, explicabo nemo
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3InfoProduct;
