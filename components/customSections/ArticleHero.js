import ButtonLink from "@/components/elements/button-link";
import ThumbnailGallery from "@/components/elements/ThumbnailGallery";
import Image from "next/image";
import Markdown from "react-markdown";
import { getButtonAppearance } from "utils/button";

const ArticleHero = ({ data, articleDate }) => {
  return (
    <section
      id={data.identifier}
      className="overflow-x-hidden bg-white py-8 pt-36 md:pb-12"
    >
      {/* <h4 className="hidden mb-6 text-3xl font-thin text-center sm:block lg:hidden text-primary-600 font-russo">{data.title}</h4> */}
      <div className="mx-auto flex max-w-md flex-col items-center justify-center space-y-4 px-4 sm:max-w-4xl sm:flex-row-reverse md:space-y-0 md:space-x-4 md:space-x-reverse lg:container lg:max-w-6xl xl:max-w-[1400px] xl:px-16 2xl:max-w-none">
        <div className="relative z-10 w-full max-w-[350px] flex-1 p-4 lg:max-w-xl 2xl:max-w-none">
          <span
            className="absolute bottom-0 left-1/2 -top-3 w-screen -translate-x-1/2 sm:-left-8 sm:-right-24 sm:w-auto sm:-translate-x-0"
            style={{
              backgroundImage:
                "radial-gradient(var(--light-grey-blue) 1px, transparent 2px)",
              backgroundSize: "10px 10px",
            }}
          ></span>
          <ThumbnailGallery mediaList={data.media} />
        </div>
        <div className="relative max-w-sm flex-1 space-y-4 sm:pr-2 lg:max-w-none">
          <h1 className="font-russo text-3xl font-thin text-primary-600 lg:block 2xl:text-[2vw]">
            {data.title}
          </h1>
          <div className="flex flex-wrap space-x-2">
            <div className="flex w-1/3 sm:max-w-[150px]">
              <Image src="/icons/subtitle-figure.svg" width={300} height={15} />
            </div>
            <h5 className="text-xl font-extrabold  text-gray-600 2xl:text-[1.1vw]">
              {new Date(articleDate).toLocaleDateString("en-US", {
                dateStyle: "long",
              })}
            </h5>
          </div>
          <div className="prose text-gray-700 2xl:text-[1.2vw]">
            <Markdown>{data.text}</Markdown>
          </div>
          {!!data.CTAs.length && (
            <div className="pt-4 lg:w-64">
              <ButtonLink
                button={data.CTAs[0]}
                appearance={getButtonAppearance(data.CTAs[0].type, "light")}
                compact
                wFull
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ArticleHero;
