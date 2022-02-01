import ButtonLink from "@/components/elements/button-link"
import ThumbnailGallery from "@/components/elements/ThumbnailGallery"
import Image from "next/image"
import Markdown from "react-markdown"
import { getButtonAppearance } from "utils/button"
import { getStrapiMedia } from "utils/media"

const Variant4_Reverse = ({ data }) => {
    return (
        <section className="py-8 md:py-12 overflow-x-hidden bg-light-grey-blue">
            {/* <h4 className="hidden mb-6 text-3xl font-thin text-center sm:block lg:hidden text-primary-600 font-russo">{data.title}</h4> */}
            <div className="lg:container px-4 mx-auto flex flex-col justify-center items-center max-w-md space-y-4 md:space-y-0 md:space-x-4 md:space-x-reverse sm:max-w-4xl lg:max-w-6xl xl:max-w-none xl:px-16 sm:flex-row-reverse">
                <div className="relative flex-1 w-full p-4 max-w-[350px] lg:max-w-xl">
                    <span className="absolute bottom-0 w-screen -translate-x-1/2 sm:w-auto left-1/2 sm:-left-8 sm:-right-24 -top-3 sm:-translate-x-0" style={{
                        backgroundImage: "radial-gradient(var(--light-grey-blue) 1px, transparent 2px)",
                        backgroundSize: "10px 10px",
                    }}></span>
                    <span className="absolute inset-1 right-[15%] bg-light-grey-blue"></span>
                    <ThumbnailGallery mediaList={data.media} />
                </div>
                <div className="relative flex-1 max-w-sm space-y-4 sm:pr-2 lg:max-w-none">
                    <h4 className="text-3xl font-thin lg:block text-primary-600 font-russo">{data.title}</h4>
                    <div className="flex space-x-2 flex-wrap">
                        <div className="flex w-1/3 sm:max-w-[150px]">
                            <Image src="/icons/subtitle-figure.svg" width={300} height={15} />
                        </div>
                        {data.extraIcon && (
                            <div className="flex sm:max-w-[80px]">
                                <Image src={getStrapiMedia(data.extraIcon.url)} width={data.extraIcon.width} height={data.extraIcon.height} />
                            </div>
                        )}
                        <h5 className={`${data.extraIcon ? 'text-primary-600 font-bold !ml-0 mt-4 w-full' : 'text-gray-600 text-xl font-extrabold'}`}>{data.subTitle}</h5>
                    </div>
                    <div className="prose text-gray-700">
                        <Markdown>{data.text}</Markdown>
                    </div>
                    {!!data.CTAs.length && (
                        <div className="pt-4">
                            <ButtonLink
                                button={data.CTAs[0]}
                                appearance={getButtonAppearance(data.CTAs[0].type, 'light')}
                                compact
                                wFull
                            />
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}

export default Variant4_Reverse