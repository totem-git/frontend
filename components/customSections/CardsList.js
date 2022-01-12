import Image from "next/image"
import PropTypes from "prop-types"
import { getButtonAppearance } from "utils/button"
import ButtonLink from "../elements/button-link"
import LinkArrowIcon from "../SVGicons/link-arrow"
import { getStrapiMedia } from "utils/media"
import Icon1Icon from "../SVGicons/icon-1"

const CardsList = ({ data }) => {
    return (
        <div className="py-16">
            <div className="flex flex-col items-center text-center text-gray-600">
                <div className="w-4 stroke-gray-600">
                    <Icon1Icon />
                </div>
                <h4 className="text-3xl mt-6 font-russo tracking-wider">{data.title}</h4>
                <h5 className="font-normal mt-2">{data.subTitle}</h5>
            </div>
            {data.cards && (
                <div className="flex flex-col md:flex-row items-center justify-center flex-wrap md:items-stretch gap-8 md:gap-4 mt-8">
                    {data.cards.map((card, i) => (
                        <div key={i} className={`w-full flex flex-col bg-white max-w-md md:max-w-xs border-b-4 md:basis-1/2 border-black`} style={{ borderColor: card.bottomBorderColor }}>
                            <div className="h-64 md:h-44 overflow-hidden relative">
                                <Image src={getStrapiMedia(card.image.url)} objectFit="cover" layout="fill" />
                            </div>
                            <div className="px-8 pb-12 pt-4 flex flex-col grow">
                                <h4 className="text-gray-600 text-3xl md:text-2xl uppercase tracking-wider font-russo">{card.title}</h4>
                                <p className="pb-8 text-gray-700 text-lg md:text-base mt-2 mb-auto">{card.text}</p>
                                {card.CTA && (
                                    <ButtonLink
                                        button={{
                                            ...card.CTA,
                                            icon: LinkArrowIcon
                                        }}
                                        compact
                                        appearance={getButtonAppearance(card.CTA.type, 'light')}
                                    />
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

CardsList.propTypes = {
    data: PropTypes.shape({
        title: PropTypes.string,
    }),
}

export default CardsList