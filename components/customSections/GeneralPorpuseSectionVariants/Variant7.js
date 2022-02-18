import HighlightedText from "@/components/elements/HighlightedText";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { getStrapiMedia } from "utils/media";

const Variant7 = ({ data }) => {
  return (
    <section
      data-section-name="GeneralPurposeSection:Variant7"
      className="overflow-x-hidden bg-black md:p-8 lg:p-16"
    >
      <div
        style={{
          backgroundImage: 'url("/icons/variant7-icon-1.svg")',
          backgroundRepeat: "repeat-x",
          backgroundSize: "auto 100%",
          backgroundPosition: "center",
        }}
        className="h-12"
      ></div>
      <div className="flex items-start justify-center px-4">
        {/* <div className="justify-center hidden md:flex w-1/3">
                    <Image src="/icons/subtitle-figure.svg" width="100" height="20" />
                </div> */}
        {/* <div className="justify-center hidden md:flex w-1/3 h-32" style={{
                    backgroundImage: "radial-gradient(rgba(255,255,255,.4), transparent 2px)",
                    backgroundSize: "7px 7px",
                }}>
                </div> */}
      </div>
      <div className="px-4 text-white">
        <HighlightedText
          text={data.title}
          tag="h4"
          className="mx-auto mt-16 max-w-3xl text-center font-russo text-3xl leading-tight"
          highlightClasses={[
            "text-highlight before:bg-primary-600 before:-right-6 before:-bottom-2 before:top-0",
          ]}
        />
        <div className="prose mx-auto mt-8 text-center text-gray-300">
          <ReactMarkdown>{data.text}</ReactMarkdown>
        </div>
      </div>
      {!!data.media.length && (
        <div className="mt-8 flex justify-center">
          <Image
            src={getStrapiMedia(data.media[0].url)}
            width={data.media[0].width}
            height={data.media[0].height}
          />
        </div>
      )}
      {!!data.extraIcon && (
        <div className="mx-auto mt-16 flex max-w-md justify-between px-4 lg:mt-24 lg:max-w-2xl">
          <div>
            <Image
              src={getStrapiMedia(data.extraIcon.url)}
              width={data.extraIcon.width}
              height={data.extraIcon.height}
            />
          </div>
          <div className="">
            <Image
              src={getStrapiMedia(data.extraIcon.url)}
              width={data.extraIcon.width}
              height={data.extraIcon.height}
            />
          </div>
          <div className="">
            <Image
              src={getStrapiMedia(data.extraIcon.url)}
              width={data.extraIcon.width}
              height={data.extraIcon.height}
            />
          </div>
          <div className="hidden lg:block">
            <Image
              src={getStrapiMedia(data.extraIcon.url)}
              width={data.extraIcon.width}
              height={data.extraIcon.height}
            />
          </div>
        </div>
      )}
      <div
        style={{
          backgroundImage: 'url("/icons/variant7-icon-1.svg")',
          backgroundRepeat: "repeat-x",
          backgroundSize: "auto 100%",
          backgroundPosition: "center",
        }}
        className="mt-16 h-12 lg:hidden"
      ></div>
    </section>
  );
};

export default Variant7;
