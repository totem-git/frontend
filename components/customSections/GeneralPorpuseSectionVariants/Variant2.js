import ButtonLink from "@/components/elements/button-link"
import Image from "next/image"
import { getButtonAppearance } from "utils/button"
import { getStrapiMedia } from "utils/media"
import Markdown from "react-markdown"
import NextImage from "@/components/elements/image"
import HighlightedText from "@/components/elements/HighlightedText"

const Variant2 = ({ data }) => {
    return (
        <section className="pt-12 text-center">
            <div className="container max-w-4xl space-y-6 px-4">
                {data.extraIcon && (
                    <div className="w-20 mx-auto">
                        <NextImage media={data.extraIcon} />
                    </div>
                )}
                <HighlightedText
                    tag="h4"
                    text={data.title}
                    className="text-4xl font-russo w-full text-center pt-4 text-gray-600"
                    highlightClasses={[
                        'text-highlight before:bg-black text-primary-600 w-ful block pt-2',
                        'text-highlight before:bg-primary-600 before:-left-3 before:-right-3 before:-inset-0 text-black',
                    ]}
                />
                <div className="prose mx-auto leading-snug">
                    <Markdown>{data.text}</Markdown>
                </div>
                {data.CTAs[0] ? (
                    <div className="sm:w-full lg:w-auto inline-block">
                        <ButtonLink
                            button={data.CTAs[0]}
                            appearance={getButtonAppearance(data.CTAs[0].type, 'light')}
                            wFull
                        />
                    </div>
                ) : (
                    <>
                        <br />
                        <br />
                        <br />
                    </>
                )}
            </div>
            {!!data.media.length && (
                <div className="lg:mx-24 relative h-[400px] !mt-16">
                    <Image src={getStrapiMedia(data.media[0].url)} objectFit="cover" layout="fill" />
                    <span
                        style={{
                            backgroundImage: "radial-gradient(rgba(255, 255, 255, .4), transparent 25%)",
                            backgroundSize: "14px 10px"
                        }}
                        className="absolute top-1/3 left-1/4 right-0 bottom-10"
                    ></span>
                </div>
            )}
        </section>
    )
}

export default Variant2