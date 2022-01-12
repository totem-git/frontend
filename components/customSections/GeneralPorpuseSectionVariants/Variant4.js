import ThumbnailGallery from "@/components/elements/ThumbnailGallery"
import Image from "next/image"
import Markdown from "react-markdown"
import { getStrapiMedia } from "utils/media"

const Variant4 = ({ data }) => {
    return (
        <section className="py-16 overflow-x-hidden bg-white">
            <h4 className="hidden mb-6 text-3xl font-thin text-center sm:block lg:hidden text-primary-600 font-russo">{data.title}</h4>
            <div className="container flex flex-col items-center max-w-md space-y-4 sm:max-w-3xl lg:max-w-6xl xl:max-w-none xl:px-16 sm:flex-row-reverse">
                <div className="relative flex-1 w-full p-4 lg:max-w-xl">
                    <span className="absolute bottom-0 w-screen -translate-x-1/2 sm:w-auto left-1/2 sm:-left-8 sm:-right-24 -top-3 sm:-translate-x-0" style={{
                        backgroundImage: "radial-gradient(var(--light-grey-blue) 1px, transparent 2px)",
                        backgroundSize: "10px 10px",
                    }}></span>
                    <span className="absolute inset-1 right-[15%] bg-light-grey-blue"></span>
                    <ThumbnailGallery mediaList={data.media} />
                </div>
                <div className="relative flex-1 max-w-sm space-y-4 sm:pr-2 lg:max-w-none">
                    <h4 className="text-3xl font-thin sm:hidden lg:block text-primary-600 font-russo">{data.title}</h4>
                    <div className="flex space-x-4">
                        <div className="flex sm:max-w-[80px]">
                            <Image src="/icons/subtitle-figure.svg" width={100} height={15} />
                        </div>
                        {data.extraIcon && (
                            <div className="flex sm:max-w-[80px]">
                                <Image src={getStrapiMedia(data.extraIcon.url)} width={100} height={15} />
                            </div>
                        )}
                        <h5 className="text-xl font-extrabold text-gray-600">{data.subTitle}</h5>
                    </div>
                    <div className="prose text-gray-700">
                        <Markdown>{data.text}</Markdown>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Variant4