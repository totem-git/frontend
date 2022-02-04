import { useAppContext } from "context/state"
import Image from "next/image"
import { useRef, useState, useEffect } from "react"
import { getStrapiMedia } from "utils/media"
import CustomLink from "../elements/custom-link"
import RatingStars from "../elements/RatingStars"
import SliderIndicators from "../elements/SliderIndicators"

const TestimonialsGroup = ({ data }) => {
  let reviews = data.testimonials
  const sliderRef = useRef()
  const activeSlidesRef = useRef(Array(reviews.length).fill(0))
  const [activeSlides, setActiveSlides] = useState(activeSlidesRef.current)
  const { googleReviews } = useAppContext()

  if (reviews.length == 0) reviews = googleReviews.reviews

  const ioCallback = (entries) => {
    let intersections = [...activeSlidesRef.current]
    entries.forEach(entry => {
      if (entry.isIntersecting) intersections[entry.target.dataset.index] = 1
      else intersections[entry.target.dataset.index] = 0
    });
    activeSlidesRef.current = intersections
    setActiveSlides(intersections)
  }

  useEffect(() => {
    const io = new IntersectionObserver(ioCallback, {
      root: sliderRef.current,
      rootMargin: '-10%',
      threshold: 0
    })
    if (sliderRef.current) {
      Array.from(sliderRef.current.children).forEach((slide) => {
        io.observe(slide)
      })
    }

    let ref = Object.assign({}, sliderRef)

    return () => {
      if (ref.current) {
        Array.from(ref.current.children).forEach((slide) => {
          io.unobserve(slide)
        })
      }
    }
  }, [])

  const handleSlide = (e) => {
    let skipAmount =
      innerWidth >= 1280
        ? 4
        : innerWidth >= 1024
          ? 3
          : innerWidth >= 768
            ? 2
            : 1
    let slidesCount = Number.parseInt(sliderRef.current.dataset.slidesCount)
    let scrollAmount = Math.floor(sliderRef.current.getBoundingClientRect().width / skipAmount)
    let currentScrollPosition = sliderRef.current.scrollLeft
    let currentPosition = Math.round(currentScrollPosition / scrollAmount)

    let direction = Number.parseInt(e.currentTarget.dataset.slideDirection)
    let slideSteps = []
    for (let i = 0; i < slidesCount - (skipAmount - 1); i++) {
      slideSteps.push(Math.floor(scrollAmount * i))
    }

    if (!slideSteps.includes(currentScrollPosition) && Math.abs(currentScrollPosition - slideSteps[currentPosition]) > 100) {
      return
    }

    let nextPosition = currentPosition + (direction * skipAmount)
    nextPosition = nextPosition > slideSteps.length - 1 ? slideSteps.length - 1 : nextPosition
    nextPosition = nextPosition < 0 ? 0 : nextPosition

    if (nextPosition == currentPosition) {
      nextPosition = nextPosition == 0
        ? slideSteps.length - 1
        : 0
    }

    let targetScrollPosition = slideSteps[nextPosition]
    sliderRef.current.scrollTo({ left: targetScrollPosition })
  }

  return (
    <section className="text-center text-lg bg-white pt-12 pb-16 px-4 lg:px-8 overflow-hidden">
      <h4 className="text-4xl text-primary-600 font-russo">{data.title}</h4>
      <p className="text-gray-600 font-normal mx-auto mt-2 px-6 max-w-3xl">{data.description}</p>
      <div className="relative px-8 overflow mt-16">
        <div ref={sliderRef} data-slides-count={reviews.length} className="flex w-full lg:h-52 items-stretch overflow-y-hidden overflow-x-scroll snap-x snap-mandatory no-scrollbar scroll-smooth space-x-4">
          {reviews.map((review, i) => (
            <div data-index={i} key={i} className="relative w-full md:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.666rem)] xl:w-[calc(25%-0.75rem)] max-h-full shrink-0 bg-light-grey-blue snap-start snap-always text-dark-grey p-4 text-left">
              <div className="flex items-stretch">
                <div className="w-10 h-10 self-center overflow-hidden rounded-full shrink-0">
                  <Image src={getStrapiMedia(review.authorPicture.url)} width={100} height={100} />
                </div>
                <div className="leading-none pl-2 grow">
                  <div className="flex items-center grow flex-wrap">
                    <h6 className="text-xl text-gray-600 font-russo min-w-max">{review.authorName}</h6>
                    <div className="ml-auto">
                      <RatingStars rating={review.rating} starSize="w-3 h-3" />
                    </div>
                  </div>
                  {review.label && (<span className="font-medium text-gray-600">{review.label}</span>)}
                </div>
              </div>
              <p className="text-sm md:text-xs pt-4">{review.text}</p>
            </div>
          ))}
        </div>
        <button data-slide-direction="-1" onClick={handleSlide} className="flex absolute w-8 lg:w-12 top-1/2 -translate-y-1/2 -left-2 lg:-left-8">
          <Image src="/icons/arrow-left-bg-yellow.svg" layout="fixed" width={50} height={50} />
        </button>
        <button data-slide-direction="1" onClick={handleSlide} className="flex absolute w-8 lg:w-12 top-1/2 -translate-y-1/2 rotate-180 -right-2 lg:-right-8">
          <Image src="/icons/arrow-left-bg-yellow.svg" layout="fixed" width={50} height={50} />
        </button>
        <div className="flex justify-center mt-4">
          <SliderIndicators activeSlides={activeSlides} inactiveClassName="p-1" activeClassName="p-1.5" className="bg-gray-800 rounded-full shadow-md transition-all" />
        </div>
      </div>
      {data.link && (
        <div className="flex justify-center mt-10">
          <CustomLink link={data.link}>
            <span className="underline font-medium text-gray-700 hover:text-primary-600">{data.link.text}</span>
          </CustomLink>
        </div>
      )}
    </section>
  )
}

export default TestimonialsGroup
