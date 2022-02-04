import Image from "next/image"
import { getStrapiMedia } from "utils/media"

const SpecialHero = ({ data }) => {
    return (
        <main className="text-white text-center bg-black">
            <div className={`relative flex justify-center items-center h-full sm:px-14 pb-32 pt-40`}>
                <div className="absolute inset-0">
                    <Image src={getStrapiMedia(data.backgroundImage.url)} objectFit="cover" layout="fill" />
                </div>
                <div className="absolute inset-0 bg-black opacity-60 m-0"></div>
                <div className="relative bg-dark-grey flex flex-col items-center w-auto sm:w-full lg:w-auto lg:px-16 justify-between p-4 sm:py-16 z-10">
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