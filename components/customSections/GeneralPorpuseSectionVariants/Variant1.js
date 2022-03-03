import ButtonLink from "@/components/elements/button-link";
import { getButtonAppearance } from "utils/button";
import Markdown from "react-markdown";
import { getStrapiMedia } from "utils/media";
import NextImage from "@/components/elements/image";
import Image from "next/image";

const Variant1 = ({ data }) => {
  return (
    <section id={data.identifier} className="bg-black text-light-grey-blue">
      <div className="relative mx-auto max-w-6xl py-16 lg:py-28">
        {data.media.length > 0 && (
          <div className="mb-16 hidden px-16">
            <NextImage media={data.media[0]} />
          </div>
        )}
        <div className="mx-auto flex flex-col items-center space-y-4 px-8 text-center sm:max-w-xl lg:max-w-4xl lg:px-24">
          <h2 className="font-russo text-3xl font-thin text-primary-600">
            {data.title}
          </h2>
          <div className="prose prose-invert">
            <Markdown>{data.text}</Markdown>
          </div>
          {!!data.CTAs.length && (
            <div className="flex w-full flex-col space-y-2 pt-8 lg:w-64 lg:pt-2">
              {data.CTAs.map((cta) => (
                <ButtonLink
                  button={cta}
                  appearance={getButtonAppearance(cta.type, "dark")}
                  key={cta.id}
                  wFull
                />
              ))}
            </div>
          )}
        </div>
        {data.media.length > 0 && (
          <>
            <div className="mt-12 flex h-28 justify-center px-16 lg:hidden">
              <Image
                src={getStrapiMedia(data.media[0].url)}
                width={data.media[0].width}
                height={data.media[0].height}
              />
            </div>
            <div className="absolute top-0 mt-12 hidden w-96 justify-center px-16 lg:flex">
              <Image
                src={getStrapiMedia(data.media[0].url)}
                width={data.media[0].width}
                height={data.media[0].height}
              />
            </div>
            <div className="absolute bottom-0 right-0 mb-12 hidden w-96 justify-center px-16 lg:flex">
              <Image
                src={getStrapiMedia(data.media[0].url)}
                width={data.media[0].width}
                height={data.media[0].height}
              />
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Variant1;
