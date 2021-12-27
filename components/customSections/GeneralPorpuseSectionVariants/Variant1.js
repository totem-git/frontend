import ButtonLink from "@/components/elements/button-link"
import { getButtonAppearance } from "utils/button"

const Variant1 = ({ data }) => {
    return (
        <section className="lg:px-24">
            <div className="py-16 bg-black text-light-grey-blue">
                <div className="px-8 lg:px-24 sm:max-w-xl lg:max-w-4xl mx-auto flex flex-col lg:items-center lg:text-center space-y-4">
                    <h2 className="text-primary-600 text-3xl font-russo font-thin">{data.title}</h2>
                    <p>{data.text}</p>
                    <div className="flex space-x-2 pt-8">
                        {data.CTAs && data.CTAs.map(cta => (
                            <ButtonLink
                                button={cta}
                                appearance={getButtonAppearance(cta.type, 'dark')}
                                key={cta.id}
                            />
                        ))}
                    </div>
                </div>
                <div className="separator-fish separator-fish h-6 !mt-16"></div>
            </div>
        </section>
    )
}

export default Variant1