import ReactMarkdown from "react-markdown";
import { useState, useEffect } from "react";
import { fetchAPI } from "utils/api";
import Image from "next/image";
import { getStrapiMedia } from "utils/media";

const RestaurantMenuSection = ({ data }) => {
  if (!data.menu) return null;

  const [menuGroups, setMenuGroups] = useState(data.menu.menuGroups);

  useEffect(() => {
    fetchAPI(`/menus/${data.menu.id}`).then((menu) => {
      setMenuGroups(menu.menuGroups);
    });
  }, []);

  return (
    <div className="py-12 pt-28">
      {menuGroups.map((menuGroup) => (
        <MenuGroup key={menuGroup.id} group={menuGroup} />
      ))}
      <div className="mt-24 text-center font-bold text-slate-700">
        <p>*All Pricing is in USD funds and does not include HST or Gratuity</p>
      </div>
    </div>
  );
};

const MenuGroup = ({ group }) => {
  return (
    <section className="space-y-8 py-8">
      {!!group.menuEntries.length && (
        <>
          <div className="flex flex-col items-center space-y-4 text-center text-gray-600">
            <h2 className="font-russo text-3xl tracking-wider 2xl:text-[1.8vw]">
              {group.name}
            </h2>
            {group.text && (
              <div className="prose px-2 text-center leading-tight text-gray-700">
                <ReactMarkdown>{group.text}</ReactMarkdown>
              </div>
            )}
          </div>
          <div className="no-scrollbar flex items-stretch gap-8 overflow-scroll px-4 md:gap-4 lg:flex-wrap lg:justify-center">
            {group.menuEntries.map((entry, i) => (
              <div
                key={i}
                className={`flex w-[90%] max-w-md shrink-0 flex-col border-b-4 border-white bg-white md:w-[calc(50%-1rem)] lg:max-w-xs 2xl:max-w-sm`}
              >
                {entry.image && (
                  <div className="relative h-64 overflow-hidden md:h-44">
                    <Image
                      src={getStrapiMedia(
                        entry.image.formats.medium
                          ? entry.image.formats.medium.url
                          : entry.image.url
                      )}
                      objectFit="cover"
                      layout="fill"
                    />
                  </div>
                )}
                <div
                  style={{
                    backgroundImage:
                      "radial-gradient(var(--light-grey-blue) 1px, transparent 2px)",
                    backgroundSize: "10px 10px",
                  }}
                  className="flex grow flex-col px-8 pb-12 pt-4 md:pb-8 lg:pb-4"
                >
                  <h3
                    className={`font-russo text-3xl uppercase tracking-wider text-gray-500 md:text-2xl`}
                  >
                    {entry.name}
                  </h3>
                  {entry.description && (
                    <div
                      className={`prose mt-4 mb-auto pb-8 font-roboto text-lg leading-tight text-gray-500 md:pb-4 md:text-base lg:text-sm`}
                    >
                      <ReactMarkdown>{entry.description}</ReactMarkdown>
                    </div>
                  )}
                  {entry.price && <MenuEntryPrice price={entry.price} />}
                </div>
                <div>
                  <Image
                    src="/svg/squiggly-line-menu-card.svg"
                    width={320}
                    height={5}
                    layout="responsive"
                  />
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </section>
  );
};

const MenuEntryPrice = ({ price }) => {
  const hasMultiplePrices = price.indexOf("|") > 0;
  if (!hasMultiplePrices)
    return (
      <div className="mt-auto">
        <span className={` font-russo text-3xl text-primary-600 `}>
          {price}
        </span>
      </div>
    );

  return (
    <div className="mt-auto">
      <span className={` font-russo text-2xl text-primary-600 `}>
        {price.split("|").map((price, i) => (
          <span key={i}>
            {price} <br />
          </span>
        ))}
      </span>
    </div>
  );
};

export default RestaurantMenuSection;
