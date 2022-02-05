import Image from "next/image";
import Markdown from "react-markdown";
import { getStrapiMedia } from "utils/media";
import ButtonLink from "@/components/elements/button-link";
import { getButtonAppearance } from "../../../utils/button";

const Variant9 = ({ data }) => {
  let picture = data.media[0];

  return (
    <section className="overflow-x-hidden bg-light-grey-blue pt-10 pb-8">
      <div className="container flex max-w-none flex-col items-center space-y-4 lg:flex-row-reverse xl:px-16">
        <div className="relative hidden w-full max-w-xl flex-1 p-4 lg:block">
          <Image
            src={getStrapiMedia(picture.url)}
            layout="responsive"
            objectPosition="center"
            objectFit="cover"
            width={picture.width}
            height={picture.height}
          />
          <div className="mt-8">
            <Image src="/icons/variant6_icon2.svg" width={142} height={17} />
          </div>
        </div>
        <div className="relative flex-1 space-y-4 lg:w-1/2 lg:min-w-0 lg:pr-16">
          <h4 className="text-center font-russo text-3xl font-medium text-gray-600 lg:text-left">
            <span className="mr-4 hidden lg:inline">
              <Image src="/icons/variant6_icon2.svg" width={142} height={17} />
            </span>
            {data.title}
          </h4>
          <div className="prose px-2 text-center leading-tight text-gray-700 lg:px-0 lg:text-left">
            <Markdown>{data.text}</Markdown>
          </div>
          <div className="flex-col items-center space-y-6 pt-4 sm:flex lg:flex-col-reverse lg:items-start lg:space-y-reverse lg:pt-0">
            <Image
              src={
                data.extraIcon
                  ? getStrapiMedia(data.extraIcon.url)
                  : "/icons/variant6_icon_1.svg"
              }
              width={148}
              height={26}
            />
            {data.CTAs.length > 0 && (
              <div className="w-full sm:w-auto">
                <ButtonLink
                  button={data.CTAs[0]}
                  appearance={getButtonAppearance(data.CTAs[0].type, "light")}
                  size="px-28"
                  wFull
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Variant9;
