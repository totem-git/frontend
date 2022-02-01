import Image from "next/image"
import { useEffect, useRef } from "react"
import { getStrapiMedia } from "utils/media"

const SpecialHero = ({ data }) => {
    const mainRef = useRef()

    useEffect(() => {
        mainRef.current.style.height = `${window.innerHeight}px`
    }, [])
    return (
        <main ref={mainRef} className="text-white text-center bg-black h-screen">
            <div className={`relative flex justify-center items-center h-full sm:px-14`}>
                <div className="absolute inset-0">
                    <Image src={getStrapiMedia(data.backgroundImage.url)} objectFit="cover" layout="fill" />
                </div>
                <div className="absolute inset-0 bg-black opacity-60 m-0"></div>
                <div className="relative bg-dark-grey flex flex-col items-center w-auto sm:w-full justify-between p-4 sm:py-16 z-10">
                    <div className="">
                        <h3 className="text-base">{data.subTitle}</h3>
                        <h2 className="text-4xl md:text-6xl font-russo">{data.title}</h2>
                    </div>
                    <div className="flex items-center mt-2 sm:mt-8 sm:flex-col">
                        <div className="w-56 sm:w-96">
                            <Image src='/icons/figure1.svg' layout="responsive" width={400} height={100} />
                        </div>
                        <div className="w-32 sm:w-56 pl-8">
                            <Image src='/icons/squiggly_line.svg' layout="responsive" width={400} height={50} />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default SpecialHero