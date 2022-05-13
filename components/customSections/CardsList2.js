import Image from "next/image";
import PropTypes from "prop-types";
import { getButtonAppearance } from "utils/button";
import ButtonLink from "../elements/button-link";
import LinkArrowIcon from "../SVGicons/link-arrow";
import { getStrapiMedia } from "utils/media";
import ReactMarkdown from "react-markdown";
import CustomLink from "../elements/custom-link";
import NextImage from "../elements/image";

const CardsList2 = ({ data }) => {
  data.cards = data.cards.map((card) => {
    card.type = card.image ? 1 : 2;

    switch (card.type) {
      case 1:
        break;

      case 2:
        card.titleStyle = {
          color: card.bottomBorderColor,
        };
        card.textAlignment = "text-center";
        break;

      default:
        break;
    }

    return card;
  });

  return (
    <div className="space-y-8 py-8">
      <div className="flex flex-col items-center space-y-4 text-center text-gray-600">
        {data.extraIcon && (
          <div className="w-8 stroke-gray-600">
            <NextImage media={data.extraIcon} />
          </div>
        )}
        {data.title && (
          <h2 className="font-russo text-3xl tracking-wider">{data.title}</h2>
        )}
        {data.subtitle && <h5 className="mt-2 font-normal">{data.subTitle}</h5>}
        {data.text && (
          <div className="prose px-2 text-center leading-tight text-gray-700">
            <ReactMarkdown>{data.text}</ReactMarkdown>
          </div>
        )}
      </div>
      {!!data.cards.length && (
        <div className="flex flex-col flex-wrap items-center justify-center gap-8 px-4 md:flex-row md:items-stretch md:gap-4">
          {data.cards.map((card, i) => (
            <div
              key={i}
              className={`flex w-full max-w-md flex-col border-b-4 border-white bg-white md:max-w-xl lg:max-w-sm`}
              style={{ borderColor: card.bottomBorderColor }}
            >
              {card.type == 1 &&
                (card.CTA ? (
                  <CustomLink
                    link={card.CTA}
                    className="relative block h-64 overflow-hidden md:h-44 2xl:h-56"
                    tabIndex={-1}
                  >
                    <Image
                      src={getStrapiMedia(
                        card.image.formats.medium
                          ? card.image.formats.medium.url
                          : card.image.url
                      )}
                      objectFit="cover"
                      layout="fill"
                    />
                  </CustomLink>
                ) : (
                  <a className="relative block h-64 overflow-hidden md:h-44">
                    <Image
                      src={getStrapiMedia(
                        card.image.formats.medium
                          ? card.image.formats.medium.url
                          : card.image.url
                      )}
                      objectFit="cover"
                      layout="fill"
                    />
                  </a>
                ))}
              <div className="flex grow flex-col px-8 pb-12 pt-4 md:pb-8">
                {card.extraIcon &&
                  (card.CTA ? (
                    <CustomLink
                      link={card.CTA}
                      tabIndex={-1}
                      className="my-3 flex h-20 w-24"
                    >
                      <Image
                        src={getStrapiMedia(card.extraIcon.url)}
                        objectFit="contain"
                        width={card.extraIcon.width}
                        height={card.extraIcon.height}
                      />
                    </CustomLink>
                  ) : (
                    <div className="h-14 py-8">
                      <NextImage media={card.extraIcon} />
                    </div>
                  ))}
                <h3
                  style={card.titleStyle || {}}
                  className={`font-russo text-3xl uppercase tracking-wider text-gray-600 md:text-2xl ${card.textAlignment}`}
                >
                  {card.CTA ? (
                    <CustomLink link={card.CTA} tabIndex={-1}>
                      {card.title}
                    </CustomLink>
                  ) : (
                    card.title
                  )}
                </h3>
                <div
                  className={`prose mt-4 mb-auto pb-8 text-lg leading-tight text-gray-700 md:pb-4 md:text-base ${card.textAlignment}`}
                >
                  <ReactMarkdown>{card.text}</ReactMarkdown>
                </div>
                {card.CTA && (
                  <div className="pt-8 lg:pt-4">
                    <ButtonLink
                      button={{
                        ...card.CTA,
                        icon: LinkArrowIcon,
                      }}
                      wFull
                      compact
                      appearance={getButtonAppearance(card.CTA.type, "light")}
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
      {data.link && (
        <div className="mt-8 flex justify-center">
          <CustomLink link={data.link}>
            <span className="text-xl font-extrabold underline">
              {data.link.text}
            </span>
          </CustomLink>
        </div>
      )}
    </div>
  );
};

CardsList2.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
  }),
};

export default CardsList2;
