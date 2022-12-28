import PropTypes from "prop-types";
import { linkPropTypes, mediaPropTypes } from "utils/types";
import Image from "next/image";
import CustomLink from "./custom-link";
import RatingStars from "./RatingStars";
import FooterReviews from "./FooterReviews";
import ButtonLink from "./button-link";
import { useRef, useEffect } from "react";
import NewsletterPopup from "./newsletterPopup";

const Footer = ({ footer, googleReviews }) => {
  const gmapEmbedRef = useRef();

  const ioCallback = (entries, io) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      entry.target.src = entry.target.dataset.src;
      io.unobserve(entry.target);
    });
  };

  useEffect(() => {
    const io = new IntersectionObserver(ioCallback, {
      rootMargin: "600px",
      threshold: 0,
    });

    if (gmapEmbedRef.current) {
      io.observe(gmapEmbedRef.current);
    }

    let ref = Object.assign({}, gmapEmbedRef);

    return () => {
      if (ref.current) {
        io.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <footer className="bg-black text-white md:px-4">
      <div className="my-14 flex flex-col items-center">
        <div className="flex w-full items-center lg:mb-8">
          <div className="flex-grow">
            <div className="separator-fish separator-fish-rtl mx-3 hidden h-4 lg:block"></div>
          </div>
          <h3 className="mb-8 w-auto px-8 text-center font-basker text-4xl font-thin text-primary-600 lg:mb-0">
            TOTEM RESORTS
          </h3>
          <div className="flex-grow">
            <div className="separator-fish mx-3 hidden h-4 lg:block"></div>
          </div>
        </div>
        <Image src="/icons/icon-1.svg" width="20" height="20" />
        <p className="mt-4 max-w-2xl text-center">{footer.text}</p>
      </div>
      <div className="lg:px-8">
        <iframe
          data-src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6419933.985147005!2d-97.61758552809744!3d48.64838166240703!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe2a8eda273c4c7f3!2sTotem Resorts!5e0!3m2!1sen!2sfr!4v1649951524507!5m2!1sen!2sfr"
          style={{ border: "0" }}
          allowFullScreen={true}
          loading="lazy"
          ref={gmapEmbedRef}
          className="h-96 w-full lg:container"
        ></iframe>
      </div>
      {/* GOOGLE REVIEWS */}
      <div className="global:google-reviews mt-12 overflow-x-hidden px-2 lg:container">
        <div className="flex flex-col items-center text-primary-600 lg:flex-row lg:items-center lg:px-8">
          <h4 className="text-center font-russo text-2xl">
            <a href="https://www.google.com/search?q=totem+resorts&oq=totem&aqs=chrome.1.69i57j35i19i39l2j0i512j46i512j69i61l3.1990j0j7&sourceid=chrome&ie=UTF-8">
              TOTEM RESORTS ON GOOGLE
            </a>
          </h4>
          <div className="mt-4 flex items-start lg:mt-0 lg:ml-8">
            <span className="mr-4 font-russo text-3xl leading-none tracking-widest">
              {googleReviews.totalRating}
            </span>
            <RatingStars
              rating={googleReviews.totalRating}
              starSize="w-7 h-7"
              starSpacing="space-x-2"
            />
          </div>
        </div>
        <h4 className="mt-8 mb-12 text-center font-russo text-2xl text-primary-600 lg:px-8 lg:text-left">
          LAST 5 REVIEWS:
        </h4>
        <FooterReviews reviews={googleReviews.reviews} />
      </div>
      <div className="container mt-10 flex flex-col">
        <nav className="mb-10 flex grid-cols-[auto_auto_auto] flex-row flex-wrap items-start md:grid md:justify-between lg:grid-cols-[auto_auto_auto_auto_auto] lg:justify-between">
          <div className="mt-10 w-full pr-6 sm:w-6/12 sm:pl-[10%] md:w-auto md:pr-0 md:pl-0 lg:mt-0 lg:w-auto lg:pl-0">
            <p className="font-russo text-xl font-semibold uppercase tracking-wide text-primary-600">
              <a href="mailto:info@totemresorts.com" target={"_blank"}>
                Contact us
              </a>
            </p>
            <ul className="mt-2">
              <li className="-mx-1 py-2 px-1 text-sm text-gray-100 hover:text-gray-400">
                <CustomLink
                  link={{
                    url: "tel:1800668683",
                  }}
                >
                  Phone: 1-800-66-TOTEM
                </CustomLink>
              </li>
              <li className="-mx-1 py-2 px-1 text-sm text-gray-100 hover:text-gray-400">
                <CustomLink
                  link={{
                    url: "mailto:reservations@totemresorts.com",
                    newTab: true,
                  }}
                >
                  Email: reservations@totemresorts.com
                </CustomLink>
              </li>
              <li className="-mx-1 py-2 px-1 text-sm text-gray-100 hover:text-gray-400">
                <CustomLink
                  link={{
                    url: "mailto:info@totemresorts.com",
                    newTab: true,
                  }}
                >
                  Email: info@totemresorts.com
                </CustomLink>
              </li>
              <li className="-mx-1 py-2 px-1 text-sm text-gray-100 hover:text-gray-400">
                <h3>Ontario, Canada</h3>
              </li>
            </ul>
            {/* -ANCHOR- SOCIAL ICONS FOR DESKTOP */}
            <div className="mt-4 hidden flex-col md:flex">
              <p className="font-russo text-xl font-semibold uppercase tracking-wide text-primary-600">
                FOLLOW US ON
                <br />
                SOCIAL MEDIA!
              </p>
              <div className="flex gap-1">
                <a
                  href="https://www.instagram.com/totemresorts/"
                  className="p-2 pt-4 pl-0"
                >
                  <Image src="/icons/ig-icon.svg" width="25" height="28" />
                </a>
                <a
                  href="https://www.facebook.com/TotemLodge/"
                  className="p-2 pt-4"
                >
                  <Image src="/icons/fb-icon.svg" width="25" height="28" />
                </a>
                <a
                  href="https://www.youtube.com/channel/UCpqUq6jJy2rd2GQdOPyDQ9Q"
                  className="p-2 pt-4"
                >
                  <Image src="/icons/yt-icon.svg" width="25" height="28" />
                </a>
                <a href="https://twitter.com/TotemResorts" className="p-2 pt-4">
                  <Image src="/icons/twitter-icon.png" width="25" height="28" />
                </a>
              </div>
              <div className="mt-8 hidden lg:block">
                <ButtonLink
                  button={{
                    url: ":reservationForm",
                    text: "RESERVATIONS",
                  }}
                  appearance="white"
                  wFull
                />
              </div>
              <div className="mt-8 hidden lg:block">
                <ButtonLink
                  button={{
                    url: ":ReservationFormRate",
                    text: "GET RATES",
                  }}
                  appearance="white"
                  wFull
                />
              </div>
              <div className="mt-4 hidden lg:block">
                <ButtonLink
                  button={{
                    url: ":newsletterForm",
                    text: "NEWSLETTER",
                  }}
                  appearance="white"
                  wFull
                />
              </div>
            </div>
          </div>
          {footer.columns.map((footerColumn) => (
            <div
              key={footerColumn.id}
              className="mt-10 w-6/12 pr-6 odd:pr-0 sm:pl-[10%] sm:odd:pr-6 sm:even:pr-0 md:w-auto md:pl-0 md:odd:pr-0 lg:mt-0 lg:w-auto lg:!pr-0"
            >
              <p className="font-russo text-xl font-semibold uppercase tracking-wide text-primary-600 md:w-min">
                {footerColumn.titleUrl ? (
                  <CustomLink link={{ url: footerColumn.titleUrl }}>
                    {footerColumn.title}
                  </CustomLink>
                ) : (
                  footerColumn.title
                )}
              </p>
              <ul className="mt-2">
                {footerColumn.links.map((link) => (
                  <li
                    key={link.id}
                    className="-mx-1 py-2 px-1 text-gray-100 hover:text-gray-400 md:text-sm"
                  >
                    <CustomLink link={link}>{link.text}</CustomLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>
      {/* -ANCHOR- SOCIAL ICONS FOR MOBILE */}
      <div className="container flex flex-col items-center md:hidden">
        <p className="font-russo font-semibold uppercase tracking-wide text-primary-600">
          Follow Us
        </p>
        <div className="mt-4 flex gap-9">
          <a href="https://www.instagram.com/totemresorts/" className="p-4">
            <Image src="/icons/ig-icon.svg" width="40" height="40" />
          </a>
          <a href="https://www.facebook.com/TotemLodge/" className="p-4">
            <Image src="/icons/fb-icon.svg" width="40" height="40" />
          </a>
          <a
            href="https://www.youtube.com/channel/UCpqUq6jJy2rd2GQdOPyDQ9Q"
            className="p-4"
          >
            <Image src="/icons/yt-icon.svg" width="40" height="40" />
          </a>
          <a href="https://twitter.com/TotemResorts" className="p-4">
            <Image src="/icons/twitter-icon.png" width="40" height="40" />
          </a>
        </div>
      </div>
      <div className="mx-auto px-4 md:w-96 lg:hidden">
        <ButtonLink
          button={{
            url: ":ReservationRatePopup",
            text: "RESERVATIONS",
          }}
          appearance="white"
          wFull
        />
      </div>
      <div className="mx-auto px-4 pt-4 md:w-96 lg:hidden">
        <ButtonLink
          button={{
            url: ":newsletterForm",
            text: "NEWSLETTER",
          }}
          appearance="white"
          wFull
        />
      </div>
      <div className="mx-4 mt-16 border-t-[1px] border-gray-600 py-12 text-center text-sm text-gray-500 lg:mt-10">
        <div className="mt-4">{footer.smallText}</div>
      </div>
      <NewsletterPopup />
    </footer>
  );
};

Footer.propTypes = {
  footer: PropTypes.shape({
    logo: mediaPropTypes.isRequired,
    columns: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
          .isRequired,
        title: PropTypes.string.isRequired,
        links: PropTypes.arrayOf(linkPropTypes),
      })
    ),
    smallText: PropTypes.string.isRequired,
  }),
};

export default Footer;
