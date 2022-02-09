import ButtonLink from "@/components/elements/button-link";
import Image from "next/image";
import { getButtonAppearance } from "utils/button";
import { getStrapiMedia } from "utils/media";
import Markdown from "react-markdown";
import NextImage from "@/components/elements/image";
import HighlightedText from "@/components/elements/HighlightedText";

const Variant2 = ({ data }) => {
  return (
    <section className="pt-12 text-center">
      <div className="container max-w-4xl space-y-6 px-4">
        {data.extraIcon && (
          <div className="mx-auto w-20">
            <NextImage media={data.extraIcon} />
          </div>
        )}
        <HighlightedText
          tag="h4"
          text={data.title}
          className="w-full pt-4 text-center font-russo text-4xl text-gray-600"
          highlightClasses={[
            "text-highlight before:bg-black text-primary-600 block md:inline-block px-16 pt-2",
            "text-highlight before:bg-primary-600 before:-left-3 before:-right-3 before:-inset-0 text-black",
          ]}
        />
        <div className="prose mx-auto leading-snug lg:max-w-none">
          <Markdown>{data.text}</Markdown>
        </div>
        {data.CTAs[0] && (
          <div className=":w-full mb-4 inline-block sm:w-96">
            <ButtonLink
              button={data.CTAs[0]}
              appearance={getButtonAppearance(data.CTAs[0].type, "light")}
              wFull
            />
          </div>
        )}
      </div>
      {!!data.media.length ? (
        <div className="relative !mt-16 h-[500px] lg:mx-24">
          <Image
            src={getStrapiMedia(data.media[0].url)}
            objectPosition="center"
            objectFit="cover"
            layout="fill"
          />
          <span
            style={{
              backgroundImage:
                "radial-gradient(rgba(255, 255, 255, .4), transparent 25%)",
              backgroundSize: "14px 10px",
            }}
            className="absolute top-1/3 left-1/4 right-0 bottom-10"
          ></span>
        </div>
      ) : (
        <>
          <br />
          <br />
        </>
      )}
    </section>
  );
};

export default Variant2;
