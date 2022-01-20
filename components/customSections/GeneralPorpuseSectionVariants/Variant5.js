import ButtonLink from "@/components/elements/button-link"
import Image from "next/image"
import ReactMarkdown from "react-markdown"
import { getButtonAppearance } from "utils/button"
import { getStrapiMedia } from "utils/media"

const Variant5 = ({ data }) => {
    return (
        <section className="py-16 overflow-x-hidden bg-black">
            <div className="flex flex-col items-center text-center text-gray-600">
                {data.extraIcon && (
                    <div className="w-16 stroke-gray-600">
                        <Image src={getStrapiMedia(data.extraIcon.url)} width={100} height={60} />
                    </div>
                )}
                <h4 className="text-3xl text-primary-600 mt-6 font-russo tracking-wider">{data.title}</h4>
                <div className="flex w-full px-16 space-x-8 items-end">
                    <div className="grow shrink-0">
                        <Image src="/icons/figure1.svg" layout="responsive" width={491} height={129} />
                    </div>
                    <div className="prose prose-invert mt-4">
                        <ReactMarkdown>{data.text}</ReactMarkdown>
                    </div>
                    <div className="grow shrink-0">
                        <Image src="/icons/figure1.svg" layout="responsive" width={491} height={129} />
                    </div>
                </div>
                {!!data.CTAs.length && (
                    <div className="flex space-x-2 pt-12">
                        {data.CTAs.map(cta => (
                            <ButtonLink
                                button={cta}
                                appearance={getButtonAppearance(cta.type, 'dark')}
                                key={cta.id}
                            />
                        ))}
                    </div>
                )}
            </div>
        </section>
    )
}

export default Variant5