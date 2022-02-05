import Image from "next/image";
import Markdown from "react-markdown";
import { getStrapiMedia } from "utils/media";

const Variant6_Reverse = ({ data }) => {
  let picture = data.media[0];

  return (
    <section className="overflow-x-hidden bg-light-grey-blue py-8 md:px-4">
      <div className="flex max-w-none flex-col items-center space-y-4 md:flex-col-reverse lg:flex-row lg:items-start xl:px-16">
        <div className="relative w-full max-w-xl flex-1 flex-row-reverse items-center md:mt-4 md:flex md:max-w-none">
          <div className="w-full">
            <Image
              src={getStrapiMedia(picture.url)}
              layout="responsive"
              objectPosition="center"
              objectFit="cover"
              width={picture.width}
              height={picture.height}
            />
            <div className="mt-8 hidden w-40 md:block">
              <Image
                src="/icons/variant6_icon2.svg"
                layout="responsive"
                width={142}
                height={17}
              />
            </div>
          </div>
          <div className="mt-8 md:w-2/3 lg:hidden">
            <div className="md:hidden">
              <Image
                src="/icons/variant6_icon2.svg"
                objectPosition="center"
                objectFit="cover"
                width={142}
                height={17}
              />
            </div>
            <div className="hidden p-12 md:block">
              <Image
                src={
                  data.extraIcon
                    ? getStrapiMedia(data.extraIcon.url)
                    : "/icons/variant6_icon_1.svg"
                }
                width={300}
                height={100}
              />
            </div>
          </div>
        </div>
        <div className="container relative mt-auto flex-1 space-y-4 sm:pl-2 lg:min-w-[65ch] lg:pl-6 lg:pr-0">
          <div className="prose text-gray-700 md:mx-auto md:max-w-none">
            <Markdown>{data.text}</Markdown>
          </div>
          <div className="mt-8 md:hidden lg:block">
            <Image
              src={
                data.extraIcon
                  ? getStrapiMedia(data.extraIcon.url)
                  : "/icons/variant6_icon_1.svg"
              }
              width={148}
              height={26}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Variant6_Reverse;
