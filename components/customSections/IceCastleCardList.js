import React from "react";
import classNames from "classnames";
import ReactMarkdown from "react-markdown";
import NextImage from "@/components/elements/image";

const IceCastleCardList = ({ data, prependBreadcrumbs }) => {
  return (
    <section className="">
      <h2 className="mt-7 flex justify-center text-[34px] text-[#636363]">
        {data.Title}
      </h2>
      <div className="flex flex-wrap justify-center">
        {data.items.map((card) => (
          <div
            key={card.id}
            className="relative mx-10 mt-20 mb-16 flex w-96 flex-col  bg-white"
          >
            <div className="relative h-56 overflow-hidden ">
              <NextImage
                className="h-full w-full object-cover"
                media={card.image}
              />
              <div className="absolute top-0 h-full w-full bg-black/20 "></div>
              <div className="header-title absolute top-[10%] left-[5%] text-white">
                {card.imageTitle1}
              </div>
              <div className=" header-subtitle absolute bottom-[10%] left-[5%] text-white">
                {card.imageText2}
              </div>
            </div>

            <div className="p-4">
              <div className="body-title">
                <p className="text-xl text-[#636363]">{card.title}</p>
              </div>
              <div className="body-subtitle">
                <p className="text-lg font-bold	 text-[#636363]">
                  {card.subText}
                </p>
              </div>
              <div className="body-description">
                <p className=" pt-2 text-lg text-[#636363]">
                  {card.description}
                </p>
                <ReactMarkdown className="characteristics-list">
                  {card.characteristics}
                </ReactMarkdown>
              </div>
            </div>
            <div className="p-4">
              <div className="footer-price">
                <p className="text-center text-2xl text-[#FDB32E]">
                  {card.price}
                </p>
              </div>
              <div className="footer-capacity">
                <ReactMarkdown className="pb-6 text-center leading-loose">
                  {card.capacityDisclaimer}
                </ReactMarkdown>
              </div>
            </div>
            <span
              className={classNames(
                `relative flex h-5 justify-center bg-[#fdb32e]`,
                `before:absolute before:bottom-[100%] before:block before:h-7
          before:w-7
          before:border-[18px] 
          before:border-solid 
          before:border-b-[#fdb32e] 
          before:border-t-transparent
          before:border-l-transparent
          before:border-r-transparent
          `
              )}
            ></span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default IceCastleCardList;
