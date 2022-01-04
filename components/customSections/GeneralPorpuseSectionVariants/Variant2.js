import ButtonLink from "@/components/elements/button-link"
import Image from "next/image"
import { getButtonAppearance } from "utils/button"
import { getStrapiMedia } from "utils/media"
import Markdown from "react-markdown"

const Variant2 = ({ data }) => {
    return (
        <section className="pt-20 text-center">
            <div className="container max-w-4xl space-y-6 px-20">
                <h4 className="text-4xl font-russo">{data.title}</h4>
                <div className="prose mx-auto">
                    <Markdown>{data.text}</Markdown>
                </div>
                <div className="sm:w-full lg:w-auto inline-block">
                    <ButtonLink
                        button={data.CTAs[0]}
                        appearance={getButtonAppearance(data.CTAs[0].type, 'light')}
                        wFull
                    />
                </div>
            </div>
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
        </section>
    )
}

export default Variant2