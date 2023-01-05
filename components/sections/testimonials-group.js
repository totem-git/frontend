import { useAppContext } from "context/state";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { getStrapiMedia } from "utils/media";
import CustomLink from "../elements/custom-link";
import RatingStars from "../elements/RatingStars";
import SliderIndicators from "../elements/SliderIndicators";
import Breadcrumbs from "@/components/customSections/Breadcrumbs";

const TestimonialsGroup = ({ data, prependBreadcrumbs }) => {
  let reviews = data.testimonials;
  const sliderRef = useRef();
  const activeSlidesRef = useRef(Array(reviews.length).fill(0));
  const [activeSlides, setActiveSlides] = useState(activeSlidesRef.current);
  const { googleReviews } = useAppContext();

  if (reviews.length == 0) reviews = googleReviews.reviews;

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
      rootMargin: "-10%",
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
    let skipAmount =
      innerWidth >= 1280
        ? 4
        : innerWidth >= 1024
        ? 3
        : innerWidth >= 768
        ? 2
        : 1;
    let slidesCount = Number.parseInt(sliderRef.current.dataset.slidesCount);
    let scrollAmount = Math.floor(
      sliderRef.current.getBoundingClientRect().width / skipAmount
    );
    let currentScrollPosition = sliderRef.current.scrollLeft;
    let currentPosition = Math.round(currentScrollPosition / scrollAmount);

    let direction = Number.parseInt(e.currentTarget.dataset.slideDirection);
    let slideSteps = [];
    for (let i = 0; i < slidesCount - (skipAmount - 1); i++) {
      slideSteps.push(Math.floor(scrollAmount * i));
    }

    if (
      !slideSteps.includes(currentScrollPosition) &&
      Math.abs(currentScrollPosition - slideSteps[currentPosition]) > 100
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
      {prependBreadcrumbs && <Breadcrumbs bgColor="bg-white" />}
      <section
        className="overflow-hidden bg-white px-4 pt-12 pb-16 text-center text-lg lg:px-8"
        data-section-name="TestimonialsGroup"
      >
        <h2 className="font-russo text-4xl text-primary-600">{data.title}</h2>
        <p className="mx-auto mt-2 max-w-3xl px-6 font-normal text-gray-600">
          {data.description}
        </p>
        <div className="overflow relative mt-16 px-8">
          <div
            ref={sliderRef}
            data-slides-count={reviews.length}
            className="no-scrollbar flex w-full snap-x snap-mandatory items-stretch space-x-4 overflow-y-hidden overflow-x-scroll scroll-smooth lg:h-52"
          >
            {reviews.map((review, i) => (
              <div
                data-index={i}
                key={i}
                className="relative max-h-full w-full shrink-0 snap-start snap-always bg-light-grey-blue p-4 text-left text-dark-grey md:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.666rem)] xl:w-[calc(25%-0.75rem)]"
              >
                <div className="flex items-stretch">
                  <div className="h-10 w-10 shrink-0 self-center overflow-hidden rounded-full">
                    <Image
                      src={getStrapiMedia(review.authorPicture.url)}
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="grow pl-2 leading-none">
                    <div className="flex grow flex-wrap items-center">
                      <h6 className="min-w-max font-russo text-xl text-gray-600">
                        {review.authorName}
                      </h6>
                      <div className="ml-auto">
                        <RatingStars
                          rating={review.rating}
                          starSize="w-3 h-3"
                        />
                      </div>
                    </div>
                    {review.label && (
                      <span className="font-medium text-gray-600">
                        {review.label}
                      </span>
                    )}
                  </div>
                </div>
                <p className="pt-4 text-sm md:text-xs">{review.text}</p>
              </div>
            ))}
          </div>
          <button
            data-slide-direction="-1"
            onClick={handleSlide}
            className="absolute top-1/2 -left-2 flex w-8 -translate-y-1/2 lg:-left-8 lg:w-12"
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
            className="absolute top-1/2 -right-2 flex w-8 -translate-y-1/2 rotate-180 lg:-right-8 lg:w-12"
          >
            <Image
              src="/icons/arrow-left-bg-yellow.svg"
              layout="fixed"
              width={50}
              height={50}
            />
          </button>
          <div className="mt-4 flex justify-center">
            <SliderIndicators
              activeSlides={activeSlides}
              inactiveClassName="p-1"
              activeClassName="p-1.5"
              className="rounded-full bg-gray-800 shadow-md transition-all"
            />
          </div>
        </div>
        {data.link && (
          <div className="mt-10 flex justify-center">
            <CustomLink link={data.link}>
              <span className="font-medium text-gray-700 underline hover:text-primary-600">
                {data.link.text}
              </span>
            </CustomLink>
          </div>
        )}
      </section>
    </>
  );
};

export default TestimonialsGroup;
