import React from "react";
import Breadcrumbs from "./Breadcrumbs";
import Image from "next/image";
import { getStrapiMedia } from "utils/media";

export const FeatureList2 = ({ data, prependBreadcrumbs }) => {
  return (
    <>
      {prependBreadcrumbs && <Breadcrumbs />}
      <section className="py-24" data-section-name="FeatureList2">
        <div className="mb-10 text-center">
          <h4 className="font-russo text-4xl text-gray-600"> {data.title} </h4>
          <h6 className="text-lg text-gray-600"> {data.subTitle} </h6>
        </div>
        <div className="mx-auto grid max-w-[1000px] grid-cols-1 place-items-center text-left md:grid-cols-2">
          {data.items.map((card) => (
            <div key={card.id} className="w-full py-10 px-6 lg:w-[380px]">
              <Image
                src={getStrapiMedia(
                  card.image.formats?.medium
                    ? card.image.formats.medium.url
                    : card.image.url
                )}
                width={65}
                height={65}
                objectFit="contain"
              />
              <h4 className="font-russo text-2xl text-gray-600">
                {card.title}
              </h4>
              <p className="text-lg text-gray-600"> {card.subTitle} </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
