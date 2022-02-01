import ButtonLink from "@/components/elements/button-link"
import HighlightedText from "@/components/elements/HighlightedText"
import ReactMarkdown from "react-markdown"
import { getButtonAppearance } from "utils/button"

const Variant8 = ({ data }) => {
    return (
        <section className="py-16 px-8 sm:px-16 bg-white p-4 md:p-8 lg:p-16">
            <div className="flex flex-col items-center max-w-3xl mx-auto text-center">
                <HighlightedText
                    tag="h4"
                    text={data.title}
                    className="text-3xl font-russo"
                    highlightClasses={['text-highlight before:bg-primary-600 before:-right-6 text-black']}
                />
                <div className="prose max-w-sm mt-6">
                    <ReactMarkdown>{data.text}</ReactMarkdown>
                </div>
                {!!data.CTAs.length && (
                    <div className="mt-6">
                        {data.CTAs.map((CTA, i) => (
                            <ButtonLink
                                key={i}
                                button={CTA}
                                appearance={getButtonAppearance(CTA.type, 'light')}
                            />
                        ))}
                    </div>)}
            </div>
        </section>
    )
}

export default Variant8