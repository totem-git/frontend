import Image from "next/image";
import { getStrapiMedia } from "utils/media";

const SpecialHero = ({ data }) => {
  return (
    <main className="bg-black text-center text-white">
      <div
        className={`relative flex h-full items-center justify-center pb-32 pt-40 sm:px-14`}
      >
        <div className="absolute inset-0">
          <Image
            src={getStrapiMedia(data.backgroundImage.url)}
            objectFit="cover"
            layout="fill"
          />
        </div>
        <div className="absolute inset-0 m-0 bg-black opacity-60"></div>
        <div className="relative z-10 flex w-auto flex-col items-center justify-between bg-dark-grey p-4 sm:w-full sm:py-16 lg:w-auto lg:px-16">
          <div className="">
            <h3 className="text-base">{data.subTitle}</h3>
            <h2 className="font-russo text-4xl md:text-6xl">{data.title}</h2>
          </div>
          <div className="mt-2 flex items-center sm:mt-8 sm:flex-col">
            <div className="w-56 sm:w-96">
              <Image
                src="/icons/figure1.svg"
                layout="responsive"
                width={400}
                height={100}
              />
            </div>
            <div className="w-32 pl-8 sm:w-56">
              <Image
                src="/icons/squiggly_line.svg"
                layout="responsive"
                width={400}
                height={50}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SpecialHero;
