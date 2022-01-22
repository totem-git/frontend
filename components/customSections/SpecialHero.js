import Image from "next/image"
import { getStrapiMedia } from "utils/media"

const SpecialHero = ({ data }) => {
    return (
        <main className="text-white text-center bg-black">
            <div className={`relative flex justify-center items-center h-screen`}>
                <div className="absolute inset-0">
                    <Image src={getStrapiMedia(data.backgroundImage.url)} objectFit="cover" layout="fill" />
                </div>
                <div className="absolute inset-0 bg-black opacity-60 m-0"></div>
                <div className="relative bg-dark-grey flex flex-col items-center w-auto justify-between p-4 z-10">
                    <div className="">
                        <h3 className="text-base">{data.subTitle}</h3>
                        <h2 className="text-4xl font-russo">{data.title}</h2>
                    </div>
                    <div className="flex items-center mt-2">
                        <div className="w-56">
                            <Image src='/icons/figure1.svg' layout="responsive" width={400} height={100} />
                        </div>
                        <div className="w-32 pl-8">
                            <Image src='/icons/squiggly_line.svg' layout="responsive" width={400} height={50} />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default SpecialHero