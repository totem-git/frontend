import { getButtonAppearance } from "utils/button";
import ButtonLink from "../elements/button-link";
import Image from "next/image";
import { getStrapiMedia } from "utils/media";
import HighlightedText from "../elements/HighlightedText";
import { useEffect, useRef, useState } from "react";
import NextImage from "../elements/image";
import Link from "next/link";

const Hero = ({ data }) => {
  const isLanding = data.type === "landing" || data.type === "home";
  const isHome = data.type === "home";
  const isMenu = data.type === "menu";
  const navRef = useRef();
  const [currentUrl, setCurrentUrl] = useState("");
  const mainRef = useRef();

  const navLinks = [
    {
      url: "/lodging",
      text: "Lodging",
      icon: "lodging-icon-solid",
    },
    {
      url: "/the-fishing-experience",
      text: "The fishing experience",
      icon: "fishing-exp-icon-solid",
    },
    {
      url: "/events",
      text: "Events",
      icon: "events-icon-solid",
    },
  ];

  useEffect(() => {
    let url = window.location.pathname;
    if (url.indexOf("?") != -1) url = url.slice(0, url.indexOf("?"));
    if (url.indexOf("#") != -1) url = url.slice(0, url.indexOf("#"));

    setCurrentUrl(url);
  }, []);

  useEffect(() => {
    mainRef.current.style.height = isMenu ? `60vh` : `${window.innerHeight}px`;
  }, []);

  return (
    <main
      ref={mainRef}
      className="flex h-screen flex-col bg-black text-center text-white"
    >
      <div className={`relative flex grow items-center justify-center pt-10`}>
        <div className="absolute inset-0">
          {data.picture.mime.startsWith("image") && (
            <Image
              src={getStrapiMedia(data.picture.url)}
              objectFit="cover"
              layout="fill"
            />
          )}
          {data.picture.mime.startsWith("video") && (
            /* TODO[epic=To do] add poster attribute */
            <video
              playsInline
              autoPlay
              muted
              loop
              id="bgvid"
              className="h-full w-full object-cover"
            >
              <source src={getStrapiMedia(data.picture.url)} type="video/mp4" />
            </video>
          )}
        </div>
        <div
          className={`absolute inset-0 m-0 bg-black ${
            isLanding ? "opacity-0" : isMenu ? "opacity-50" : "opacity-30"
          }`}
        ></div>
        {isHome && (
          <div className="absolute left-12 bottom-28 z-10 m-0 hidden h-1/2 w-1.5 flex-col lg:flex">
            <div className="h-32 w-full bg-white"></div>
            <div className="h-full w-full bg-primary-600"></div>
          </div>
        )}
        <div className="relative z-10 flex w-full flex-col items-center justify-between space-y-16">
          <div className="flex w-full flex-col items-center space-y-5 px-4 sm:space-y-4">
            {data.extraIcon && (
              <div className="w-40">
                <NextImage media={data.extraIcon} />
              </div>
            )}
            <HighlightedText
              tag="h1"
              className={`${
                isLanding ? "text-4xl md:text-6xl" : "text-3xl md:text-5xl"
              } text-primary-600 ${
                isHome ? "font-basker" : "font-russo"
              } xl:mt-[8%] 2xl:text-[3.5vw]`}
              highlightClasses={["text-bg-effect before:right-2"]}
              text={data.title}
            />
            <h6
              className={`${
                isHome ? "text-3xl" : "text-xl md:text-3xl"
              } font-russo 2xl:text-[2vw]`}
            >
              {data.label &&
                data.label.split("<br>").map((labelPart, i) => (
                  <span key={i}>
                    {labelPart} <br className="sm:hidden" />
                  </span>
                ))}
            </h6>
            {!!data.buttons.length && (
              <div className={`w-full px-6 sm:w-96 sm:px-0 sm:pt-6`}>
                <ButtonLink
                  wFull
                  button={data.buttons[0]}
                  appearance={getButtonAppearance(data.buttons[0].type, "dark")}
                  size="text-base md:text-2xl lg:text-xl"
                />
              </div>
            )}
            {isHome && (
              <div className="flex items-center xl:!mt-20">
                {/* <div className="hidden w-48 sm:block lg:w-32 2xl:w-[12vw]">
                  <Image
                    src="/icons/rectangle-with-squiggly.svg"
                    width={500}
                    height={100}
                  />
                </div> */}
                <div className="w-52 px-4 sm:w-80 lg:mx-20 lg:w-52 2xl:w-[16vw]">
                  <Image src="/icons/stars.svg" width={500} height={100} />
                </div>
                {/* <div className="hidden w-48 sm:block lg:w-32 2xl:w-[12vw]">
                  <Image
                    src="/icons/rectangle-with-squiggly.svg"
                    className=" rotate-180"
                    width={500}
                    height={100}
                  />
                </div> */}
              </div>
            )}
          </div>
          {/* <div className="hidden lg:block">
            <Image src="/icons/arrow-down.svg" width={32} height={32} />
          </div> */}
        </div>
      </div>
      {isLanding && (
        <div
          ref={navRef}
          className="flex justify-center divide-x-2 border-white lg:mx-auto lg:max-w-lg lg:py-8"
        >
          {navLinks.map((link, i) => (
            <div
              key={i}
              className={`grow pb-4 ${
                i == 1 && "w-[36%]"
              } min-w-max pt-6 lg:px-12 lg:pt-0 lg:pb-0`}
            >
              <Link href={link.url}>
                <a className="group flex flex-col space-y-2 font-russo font-thin">
                  <div className="relative h-6 2xl:h-[2.4vw]">
                    {currentUrl == link.url ? (
                      <Image
                        src={`/icons/${link.icon}-white.svg`}
                        layout="fill"
                      />
                    ) : (
                      <Image src={`/icons/${link.icon}.svg`} layout="fill" />
                    )}
                  </div>
                  <span
                    className={`mx-auto inline-block w-max border-b-4 ${
                      currentUrl == link.url
                        ? "border-white"
                        : "border-transparent"
                    } uppercase transition group-hover:border-white 2xl:text-[1.5vw]`}
                  >
                    {link.text}
                  </span>
                </a>
              </Link>
            </div>
          ))}
        </div>
      )}
    </main>
  );
};

export default Hero;
