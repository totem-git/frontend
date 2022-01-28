import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { getStrapiMedia } from "utils/media"
import RatingStars from "./RatingStars"
import SliderIndicators from "./SliderIndicators"

const FooterReviews = ({ reviews }) => {
    const sliderRef = useRef()
    const activeSlidesRef = useRef(Array(reviews.length).fill(0))
    const [activeSlides, setActiveSlides] = useState(activeSlidesRef.current)

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
            rootMargin: '-47%',
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
        let skipAmount = innerWidth >= 768 ? 2 : 1
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
            // console.log({ currentScrollPosition });
            // console.log({ scrollAmount });
            // console.log({ currentPosition });
            // console.log({ slideSteps });
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
        // console.log({
        //     skipAmount,
        //     slidesCount,
        //     scrollAmount,
        //     currentScrollPosition,
        //     currentPosition,
        //     direction,
        //     slideSteps,
        //     nextPosition,
        //     targetScrollPosition,
        // })
    }

    return (
        <div className="relative px-8 overflow">
            <div ref={sliderRef} data-slides-count={reviews.length} className="flex w-full lg:h-80 items-stretch overflow-y-hidden overflow-x-scroll snap-x snap-mandatory no-scrollbar scroll-smooth space-x-4">
                {reviews.map((review, i) => (
                    <div data-index={i} key={i} className="relative w-full md:w-[calc(50%-0.5rem)] max-h-full shrink-0 bg-white snap-start snap-always text-dark-grey p-4">
                        <div className="flex items-stretch">
                            <div className="w-10 h-10 self-center overflow-hidden rounded-full shrink-0">
                                <Image src={getStrapiMedia(review.authorPicture.url)} width={100} height={100} />
                            </div>
                            <div className="leading-none pl-2 grow">
                                <div className="flex items-center grow flex-wrap">
                                    <h6 className="text-xl text-primary-600 font-russo min-w-max">{review.authorName}</h6>
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
                <SliderIndicators activeSlides={activeSlides} inactiveClassName="p-1" activeClassName="p-1.5" className="bg-white rounded-full transition-all" />
            </div>
        </div>
    )
}

export default FooterReviews