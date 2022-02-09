import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { getStrapiMedia } from "utils/media";
import SliderIndicators from "./SliderIndicators";
import css from "classnames";

const ThumbnailGallery = ({ mediaList }) => {
  const sliderRef = useRef();
  const activeSlidesRef = useRef(Array(mediaList.length).fill(0));
  const [activeSlides, setActiveSlides] = useState(activeSlidesRef.current);

  const ioCallback = (entries) => {
    let intersections = [...activeSlidesRef.current];
    entries.forEach((entry) => {
      if (entry.isIntersecting) intersections[entry.target.dataset.index] = 1;
      else intersections[entry.target.dataset.index] = 0;

      if (entry.target.dataset.isVideo == "true") {
        if (entry.isIntersecting) entry.target.querySelector("video").play();
        else entry.target.querySelector("video").pause();
      }
    });
    activeSlidesRef.current = intersections;
    setActiveSlides(intersections);
  };

  useEffect(() => {
    const io = new IntersectionObserver(ioCallback, {
      root: sliderRef.current,
      rootMargin: "-47%",
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
    let slidesCount = activeSlidesRef.current.length;
    let scrollAmount = Math.floor(
      sliderRef.current.getBoundingClientRect().width
    );
    let currentScrollPosition = sliderRef.current.scrollLeft;
    let currentPosition = Math.round(currentScrollPosition / scrollAmount);

    let direction = Number.parseInt(e.currentTarget.dataset.slideDirection);
    let slideSteps = [];
    for (let i = 0; i < slidesCount; i++) {
      slideSteps.push(Math.floor(scrollAmount * i));
    }

    if (
      !slideSteps.includes(currentScrollPosition) &&
      Math.abs(currentScrollPosition - slideSteps[currentPosition]) > 50
    ) {
      return;
    }

    let nextPosition = currentPosition + direction;
    nextPosition =
      nextPosition > slideSteps.length - 1
        ? slideSteps.length - 1
        : nextPosition;
    nextPosition = nextPosition < 0 ? 0 : nextPosition;

    let targetScrollPosition = slideSteps[nextPosition];
    sliderRef.current.scrollTo({ left: targetScrollPosition });
  };

  return (
    <div className="relative w-full px-4">
      <div
        ref={sliderRef}
        className="no-scrollbar flex h-60 w-full snap-x snap-mandatory items-end overflow-y-hidden overflow-x-scroll scroll-smooth bg-black lg:h-80"
      >
        {mediaList.map((mediaObject, i) => (
          <div
            key={i}
            data-index={i}
            data-is-video={mediaObject.mime.startsWith("video")}
            className="relative h-full max-h-full w-full shrink-0 snap-start snap-always"
          >
            {mediaObject.mime.startsWith("image") && (
              <Image
                src={getStrapiMedia(mediaObject.url)}
                layout="fill"
                objectFit="cover"
              />
            )}
            {mediaObject.mime.startsWith("video") && (
              /* TODO[epic=To do] add poster attribute */
              <video
                playsInline
                muted
                loop
                className="h-full w-full object-cover"
              >
                <source
                  src={getStrapiMedia(mediaObject.url)}
                  type="video/mp4"
                />
              </video>
            )}
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `linear-gradient(to top, rgba(0,0,0,.6) 15px, rgba(0,0,0,0) 30px)`,
              }}
            ></div>
          </div>
        ))}
      </div>
      <button
        data-slide-direction="-1"
        onClick={handleSlide}
        className={css(
          "absolute top-1/2 -left-6 flex w-8 -translate-y-1/2 lg:-left-8 lg:w-12",
          { hidden: mediaList.length <= 1 }
        )}
      >
        <Image
          src="/icons/arrow-left-bg-yellow.svg"
          layout="fixed"
          width={50}
          height={50}
        />
      </button>
      <button
        data-slide-direction="1"
        onClick={handleSlide}
        className={css(
          "absolute top-1/2 -right-6 flex w-8 -translate-y-1/2 rotate-180 lg:-right-8 lg:w-12",
          { hidden: mediaList.length <= 1 }
        )}
      >
        <Image
          src="/icons/arrow-left-bg-yellow.svg"
          layout="fixed"
          width={50}
          height={50}
        />
      </button>
      <div
        className={css("absolute bottom-2 left-1/2 -translate-x-1/2", {
          hidden: mediaList.length <= 1,
        })}
      >
        <SliderIndicators activeSlides={activeSlides} />
      </div>
    </div>
  );
};

export default ThumbnailGallery;
