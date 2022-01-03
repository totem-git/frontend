import { getStrapiMedia } from "utils/media"
import ButtonLink from "@/components/elements/button-link"
import { getButtonAppearance } from "utils/button"
import Image from "next/image"
import { useRef, useEffect, useState } from "react"

const SliderIndicators = ({ activeSlides }) => {
    return (
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center space-x-2">
            {activeSlides.map((isActive, i) => (
                <div key={i} className={`${isActive ? 'p-1 bg-white' : 'p-0.5 bg-gray-500'} rounded-full transition-all`}></div>
            ))}
        </div>
    )
}

const Slider = ({ data }) => {
    const sliderRef = useRef()
    const activeSlidesRef = useRef(Array(data.slides.length).fill(0))
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
            rootMargin: '-100px',
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
        let skipAmount = innerWidth >= 1024 ? 2 : 1
        let slidesCount = Number.parseInt(sliderRef.current.dataset.slidesCount)
        let scrollAmount = Math.floor(sliderRef.current.getBoundingClientRect().width / skipAmount)
        let currentScrollPosition = sliderRef.current.scrollLeft
        let currentPosition = Math.floor(currentScrollPosition / scrollAmount)

        let direction = Number.parseInt(e.target.dataset.slideDirection)
        let slideSteps = []
        for (let i = 0; i < slidesCount - (skipAmount - 1); i++) {
            slideSteps.push(Math.floor(scrollAmount * i))
        }

        if (!slideSteps.includes(currentScrollPosition) && Math.abs(currentScrollPosition - slideSteps[currentPosition]) > 50) {
            return
        }

        let nextPosition = currentPosition + (direction * skipAmount)
        nextPosition = nextPosition > slideSteps.length - 1 ? slideSteps.length - 1 : nextPosition
        nextPosition = nextPosition < 0 ? 0 : nextPosition

        let targetScrollPosition = slideSteps[nextPosition]
        sliderRef.current.scrollTo({ left: targetScrollPosition })
    }

    return (
        <div className="relative overflow-hidden">
            <div ref={sliderRef} data-slides-count={data.slides.length} className="flex overflow-x-scroll scroll-smooth snap-x snap-mandatory no-scrollbar">
                {data.slides.map((slide, index) => (
                    <div key={slide.id} data-index={index} className="text-white pt-60 sm:pt-24 pb-20 sm:pb-12 lg:pb-10 relative w-full lg:w-1/2 h-full shrink-0 bg-black snap-start snap-always bg-cover bg-center">
                        <div className="absolute inset-0 overflow-hidden">
                            <div className="absolute inset-0 sm:w-1/2 lg:w-auto">
                                <Image unoptimized src={getStrapiMedia(slide.backgroundImage.url)} className="blur-[2px] contrast-150" layout="fill" objectFit="cover" />
                            </div>
                            <div className="hidden sm:block lg:hidden absolute inset-0 ml-[50%] border-l-2 border-white w-1/2">
                                <Image unoptimized src={getStrapiMedia(slide.backgroundImage.url)} layout="fill" objectFit="cover" />
                            </div>
                            <div className="absolute inset-0" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,0) 5%, rgba(0,0,0,.7), rgba(0,0,0,.9))` }}></div>
                        </div>
                        <div className="h-96 sm:h-64 lg:h-72 sm:w-1/2 lg:w-auto relative pl-8 sm:pl-20 pr-16 sm:pr-20 flex flex-col justify-between lg:justify-end">
                            <div className="space-y-8 lg:space-y-4">
                                <h4 style={{ textShadow: '1px 1px 2px rgba(0,0,0,.7)' }} className="text-primary-600 text-4xl font-russo">{slide.title}</h4>
                                <p>{slide.text}</p>
                                <div>
                                    {slide.CTAs && slide.CTAs.map(CTA => (
                                        <ButtonLink
                                            key={CTA.id}
                                            button={CTA}
                                            appearance={getButtonAppearance(CTA.type, 'dark')}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex absolute bottom-20 left-8 sm:bottom-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:translate-y-1/2 pointer-events-auto">
                <button data-slide-direction="-1" onClick={handleSlide} style={{ backgroundImage: 'linear-gradient(to left, #000, transparent)', boxShadow: '3px 3px 4px rgba(0,0,0,.5)' }} className="absolute w-1/2 rounded-l-full top-0 bottom-0 left-0 opacity-0 hover:opacity-100"></button>
                <button data-slide-direction="1" onClick={handleSlide} style={{ backgroundImage: 'linear-gradient(to right, #000, transparent)', boxShadow: '3px 3px 4px rgba(0,0,0,.5)' }} className="absolute w-1/2 rounded-r-full top-0 bottom-0 right-0 opacity-0 hover:opacity-100"></button>
                <div className="flex pointer-events-none">
                    <Image src="/icons/slide-icon.svg" width="131" height="35" />
                </div>
            </div>
            <SliderIndicators activeSlides={activeSlides} />
        </div>
    )
}

export default Slider
