import ButtonLink from "@/components/elements/button-link"
import { getButtonAppearance } from "utils/button"
import Markdown from "react-markdown"
import { getStrapiMedia } from "utils/media"
import NextImage from "@/components/elements/image"
import Image from "next/image"

const Variant1 = ({ data }) => {
    return (
        <section className="bg-black text-light-grey-blue">
            <div className="relative py-16 lg:py-28 max-w-6xl mx-auto">
                {data.media.length > 0 && (
                    <div className="px-16 mb-16 hidden">
                        <NextImage media={data.media[0]} />
                    </div>
                )}
                <div className="flex flex-col items-center text-center space-y-4 px-8 lg:px-24 sm:max-w-xl lg:max-w-4xl mx-auto">
                    <h2 className="text-primary-600 text-3xl font-russo font-thin">{data.title}</h2>
                    <div className="prose prose-invert">
                        <Markdown>{data.text}</Markdown>
                    </div>
                    {!!data.CTAs.length && (
                        <div className="flex w-full flex-col space-y-2 pt-8 lg:pt-2 lg:w-64">
                            {data.CTAs.map(cta => (
                                <ButtonLink
                                    button={cta}
                                    appearance={getButtonAppearance(cta.type, 'dark')}
                                    key={cta.id}
                                    wFull
                                />
                            ))}
                        </div>
                    )}
                </div>
                {data.media.length > 0 && (
                    <>
                        <div className="px-16 mt-12 h-28 flex justify-center lg:hidden">
                            <Image src={getStrapiMedia(data.media[0].url)} width={data.media[0].width} height={data.media[0].height} />
                        </div>
                        <div className="hidden lg:flex justify-center absolute top-0 px-16 mt-12 w-96">
                            <Image src={getStrapiMedia(data.media[0].url)} width={data.media[0].width} height={data.media[0].height} />
                        </div>
                        <div className="hidden lg:flex justify-center absolute bottom-0 right-0 px-16 mb-12 w-96">
                            <Image src={getStrapiMedia(data.media[0].url)} width={data.media[0].width} height={data.media[0].height} />
                        </div>
                    </>
                )}
            </div>
        </section>
    )
}

export default Variant1