import Image from "next/image"
import PropTypes from "prop-types"
import { getButtonAppearance } from "utils/button"
import ButtonLink from "../elements/button-link"
import LinkArrowIcon from "../SVGicons/link-arrow"
import { getStrapiMedia } from "utils/media"
import ReactMarkdown from "react-markdown"
import CustomLink from "../elements/custom-link"
import NextImage from "../elements/image"

const CardsList = ({ data }) => {
    data.cards = data.cards.map((card) => {
        card.type = card.image ? 1 : 2

        switch (card.type) {
            case 1:
                break;

            case 2:
                card.titleStyle = {
                    color: card.bottomBorderColor
                }
                card.textAlignment = 'text-center'
                break;

            default:
                break;
        }

        return card
    })

    return (
        <div className="py-8 space-y-8">
            <div className="flex flex-col items-center text-center text-gray-600 space-y-4">
                {data.extraIcon && (
                    <div className="w-8 stroke-gray-600">
                        <NextImage media={data.extraIcon} />
                    </div>
                )}
                {data.title && (<h4 className="text-3xl font-russo tracking-wider">{data.title}</h4>)}
                {data.subtitle && (<h5 className="font-normal mt-2">{data.subTitle}</h5>)}
                {data.text && (
                    <div className="prose text-gray-700 text-center leading-tight px-2">
                        <ReactMarkdown>{data.text}</ReactMarkdown>
                    </div>
                )}
            </div>
            {!!data.cards.length && (
                <div className="flex flex-col md:flex-row items-center justify-center flex-wrap md:items-stretch gap-8 md:gap-4 px-4">
                    {data.cards.map((card, i) => (
                        <div key={i} className={`w-full flex flex-col bg-white max-w-md md:max-w-xs border-b-4 md:basis-1/2 border-white`} style={{ borderColor: card.bottomBorderColor }}>
                            {(card.type == 1) && (
                                <div className="h-64 md:h-44 overflow-hidden relative">
                                    <Image src={getStrapiMedia(card.image.url)} objectFit="cover" layout="fill" />
                                </div>
                            )}
                            <div className="px-8 pb-12 pt-4 flex flex-col grow">
                                {card.extraIcon && (
                                    <div className="w-1/3 py-8">
                                        <NextImage media={card.extraIcon} />
                                    </div>
                                )}
                                <h4 style={card.titleStyle || {}} className={`text-gray-600 text-3xl md:text-2xl uppercase tracking-wider font-russo ${card.textAlignment}`}>{card.title}</h4>
                                <div className={`prose pb-8 text-gray-700 text-lg md:text-base mt-4 mb-auto leading-tight ${card.textAlignment}`}>
                                    <ReactMarkdown>{card.text}</ReactMarkdown>
                                </div>
                                {card.CTA && (
                                    <div className="pt-8">
                                        <ButtonLink
                                            button={{
                                                ...card.CTA,
                                                icon: LinkArrowIcon
                                            }}
                                            wFull
                                            compact
                                            appearance={getButtonAppearance(card.CTA.type, 'light')}
                                        />
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            )}
            {data.link && (
                <div className="flex justify-center mt-8">
                    <CustomLink link={data.link}>
                        <span className="underline text-xl font-extrabold">{data.link.text}</span>
                    </CustomLink>
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