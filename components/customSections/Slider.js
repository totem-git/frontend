import { getStrapiMedia } from "utils/media";
import ButtonLink from "@/components/elements/button-link";
import { getButtonAppearance } from "utils/button";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import SliderIndicators from "../elements/SliderIndicators";
import Breadcrumbs from "@/components/customSections/Breadcrumbs";

const Slider = ({ data, prependBreadcrumbs }) => {
  const sliderRef = useRef();
  const activeSlidesRef = useRef(Array(data.slides.length).fill(0));
  const [activeSlides, setActiveSlides] = useState(activeSlidesRef.current);

  const ioCallback = (entries) => {
    let intersections = [...activeSlidesRef.current];
    entries.forEach((entry) => {
      if (entry.isIntersecting) intersections[entry.target.dataset.index] = 1;
      else intersections[entry.target.dataset.index] = 0;
    });
    activeSlidesRef.current = intersections;
    setActiveSlides(intersections);
  };

  useEffect(() => {
    const io = new IntersectionObserver(ioCallback, {
      root: sliderRef.current,
      rootMargin: "-100px",
      threshold: 0,
    });
    if (sliderRef.current) {
      Array.from(sliderRef.current.children).forEach((slide) => {
        io.observe(slide);
      });
    }

    let ref = Object.assign({}, sliderRef);

    return () => {
      if (ref.current) {
        Array.from(ref.current.children).forEach((slide) => {
          io.unobserve(slide);
        });
      }
    };
  }, []);

  const handleSlide = (e) => {
    let skipAmount = innerWidth >= 1024 ? 2 : 1;
    let slidesCount = Number.parseInt(sliderRef.current.dataset.slidesCount);
    let scrollAmount = Math.floor(
      sliderRef.current.getBoundingClientRect().width / skipAmount
    );
    let currentScrollPosition = sliderRef.current.scrollLeft;
    let currentPosition = Math.floor(currentScrollPosition / scrollAmount);

    let direction = Number.parseInt(e.target.dataset.slideDirection);
    let slideSteps = [];
    for (let i = 0; i < slidesCount - (skipAmount - 1); i++) {
      slideSteps.push(Math.floor(scrollAmount * i));
    }

    if (
      !slideSteps.includes(currentScrollPosition) &&
      Math.abs(currentScrollPosition - slideSteps[currentPosition]) > 50
    ) {
      return;
    }

    let nextPosition = currentPosition + direction * skipAmount;
    nextPosition =
      nextPosition > slideSteps.length - 1
        ? slideSteps.length - 1
        : nextPosition;
    nextPosition = nextPosition < 0 ? 0 : nextPosition;

    if (nextPosition == currentPosition) {
      nextPosition = nextPosition == 0 ? slideSteps.length - 1 : 0;
    }

    let targetScrollPosition = slideSteps[nextPosition];
    sliderRef.current.scrollTo({ left: targetScrollPosition });
  };

  return (
    <>
      {prependBreadcrumbs && <Breadcrumbs />}
      <div className="relative overflow-hidden" data-section-name="Slider">
        <div
          ref={sliderRef}
          data-slides-count={data.slides.length}
          className="no-scrollbar flex h-screen snap-x snap-mandatory overflow-x-scroll scroll-smooth"
        >
          {data.slides.map((slide, index) => (
            <div
              key={index}
              data-index={index}
              className="relative flex h-full w-full shrink-0 snap-start snap-always flex-col justify-end bg-black bg-cover bg-center pb-20 text-white sm:pt-24 sm:pb-12 lg:w-1/2 lg:pb-10"
            >
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute inset-0 sm:w-1/2 lg:w-auto">
                  <Image
                    unoptimized
                    src={getStrapiMedia(slide.backgroundImage.url)}
                    className="blur-[2px] contrast-150"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="absolute inset-0 ml-[50%] hidden w-1/2 border-l-2 border-white sm:block lg:hidden">
                  <Image
                    unoptimized
                    src={getStrapiMedia(slide.backgroundImage.url)}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,0) 5%, rgba(0,0,0,.7), rgba(0,0,0,.9))`,
                  }}
                ></div>
              </div>
              <div className="relative flex flex-col justify-between pb-12 pl-8 pr-16 sm:w-1/2 sm:pl-20 sm:pr-20 lg:h-56 lg:w-auto lg:justify-start">
                <div className="space-y-4 md:space-y-8 lg:space-y-4">
                  <h2
                    style={{ textShadow: "1px 1px 2px rgba(0,0,0,.7)" }}
                    className="font-russo text-2xl text-primary-600 md:text-4xl"
                  >
                    {slide.title}
                  </h2>
                  <p>{slide.text}</p>
                  <div>
                    {slide.CTAs &&
                      slide.CTAs.map((CTA) => (
                        <ButtonLink
                          key={CTA.id}
                          button={CTA}
                          appearance={getButtonAppearance(CTA.type, "dark")}
                          compact
                        />
                      ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="pointer-events-auto absolute bottom-20 left-8 flex sm:bottom-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:translate-y-1/2">
          <button
            data-slide-direction="-1"
            onClick={handleSlide}
            style={{
              backgroundImage: "linear-gradient(to left, #000, transparent)",
              boxShadow: "3px 3px 4px rgba(0,0,0,.5)",
            }}
            className="absolute top-0 bottom-0 left-0 w-1/2 rounded-l-full opacity-0 hover:opacity-100"
          ></button>
          <button
            data-slide-direction="1"
            onClick={handleSlide}
            style={{
              backgroundImage: "linear-gradient(to right, #000, transparent)",
              boxShadow: "3px 3px 4px rgba(0,0,0,.5)",
            }}
            className="absolute top-0 bottom-0 right-0 w-1/2 rounded-r-full opacity-0 hover:opacity-100"
          ></button>
          <div className="pointer-events-none flex">
            <Image src="/icons/slide-icon.svg" width="131" height="35" />
          </div>
        </div>
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2">
          <SliderIndicators activeSlides={activeSlides} />
        </div>
      </div>
    </>
  );
};

export default Slider;
