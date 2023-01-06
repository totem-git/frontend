import Image from "next/image";
import ReservationForm from "./ReservationForm";
import { useLockBodyScroll } from "utils/hooks";
import FooterReviews from "./FooterReviews";
import RatingStars from "./RatingStars";
import { useCallback, useRef } from "react";
import { useAppContext } from "context/state";
import { sendEvent } from "utils/gtag";

const ReservationPopup = ({
  closeSelf,
  googleReviews,
  selectedPackage,
  title = "Reservations",
  submitButtonLabel = "Send",
  gaSubmitEventLabel = "book-now",
}) => {
  useLockBodyScroll();
  const scrollContainerRef = useRef();
  const updateScrollTop = useCallback(() => {
    scrollContainerRef.current.scrollTo({ top: 1000 });
  }, []);

  return (
    <>
      <div
        onClick={closeSelf}
        className="fixed inset-0 z-50 bg-white bg-opacity-20 backdrop-blur-sm"
      ></div>
      <div className="fixed inset-y-12 inset-x-4 z-50 overflow-hidden rounded-md bg-black p-4 lg:inset-x-24 lg:inset-y-12">
        <div
          className=" flex h-full flex-col items-stretch justify-between overflow-y-scroll"
          ref={scrollContainerRef}
        >
          <div className="mx-auto flex w-full justify-end px-4 lg:max-w-7xl">
            <button onClick={closeSelf} className="py-1 px-1">
              <Image src="/icons/close-menu-icon.svg" width="50" height="50" />
            </button>
          </div>
          <div className="mx-auto max-w-md lg:flex lg:w-full lg:max-w-7xl lg:grow lg:flex-col lg:justify-center lg:px-8">
            <div className="mx-auto flex flex-col space-y-12 px-4 lg:mt-4 lg:flex-row lg:items-stretch lg:space-y-0 lg:px-0">
              <div className="shrink-0 space-y-4 text-center text-gray-300 lg:w-1/2 lg:pr-16 lg:text-left">
                <h4 className="font-russo text-4xl uppercase text-primary-600">
                  {title}
                </h4>
                <p>
                  For a custom quote, please provide us with the following
                  information: <br />
                  <br />- Number of adults/ teens/ or children under 12
                  <br />- Any other relevant information
                  <br />
                  <br />
                  Our rates start at 115 USD per person per night. Our
                  reservation specialists will use this information to help you
                  create a package that meets your needs.
                </p>
                {/* -ANCHOR- CONTACT INFO DESKTOP */}
                <div className="hidden lg:block">
                  <p className="mt-14 font-russo text-lg text-primary-600">
                    <a
                      href="mailto:info@totemresorts.com"
                      target={"_blank"}
                      onClick={() => {
                        sendEvent({ action: "clic", category: "mailto" });
                      }}
                    >
                      CONTACT US
                    </a>
                  </p>
                  <div className="mt-8 flex flex-col items-start space-y-4 text-white">
                    <a
                      href="tel:1800668683"
                      className="flex items-center"
                      onClick={() => {
                        sendEvent({ action: "clic", category: "phone-call" });
                      }}
                    >
                      <Image
                        src="/icons/phone-icon.svg"
                        width="18"
                        height="18"
                      />
                      <span className="ml-2">Phone: 1-800-66-TOTEM</span>
                    </a>
                    <a
                      href="mailto:reservations@totemresorts.com"
                      target={"_blank"}
                      className="flex items-center"
                      onClick={() => {
                        sendEvent({ action: "clic", category: "mailto" });
                      }}
                    >
                      <Image
                        src="/icons/mail-icon.svg"
                        width="18"
                        height="18"
                      />
                      <span className="ml-2">
                        Email: reservations@totemresorts.com
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="shrink-0 bg-black pb-8 lg:w-1/2">
                <ReservationForm
                  closePopup={closeSelf}
                  selectedPackage={selectedPackage}
                  updateScrollTop={updateScrollTop}
                  submitButtonLabel={submitButtonLabel}
                  gaEventLabel={gaSubmitEventLabel}
                />
              </div>
            </div>
          </div>
          {/* -ANCHOR- CONTACT INFO MOBILE */}
          <div className="flex flex-col items-center lg:hidden">
            <p className="mt-14 font-russo text-lg text-primary-600">
              <a
                href="mailto:info@totemresorts.com"
                target={"_blank"}
                onClick={() => {
                  sendEvent({ action: "clic", category: "mailto" });
                }}
              >
                CONTACT US
              </a>
            </p>
            <div className="mt-8 flex flex-col items-center space-y-4 text-white">
              <a
                href="tel:1800668683"
                className="flex items-center"
                onClick={() => {
                  sendEvent({ action: "clic", category: "phone-call" });
                }}
              >
                <Image src="/icons/phone-icon.svg" width="18" height="18" />
                <span className="ml-2">Phone: 1-800-66-TOTEM</span>
              </a>
              <a
                href="mailto:reservations@totemresorts.com"
                target={"_blank"}
                className="flex items-center"
                onClick={() => {
                  sendEvent({ action: "clic", category: "mailto" });
                }}
              >
                <Image src="/icons/mail-icon.svg" width="18" height="18" />
                <span className="ml-2">
                  Email: reservations@totemresorts.com
                </span>
              </a>
            </div>
          </div>
          {/* GOOGLE REVIEWS */}
          <div className="global:google-reviews">
            <div className="container mt-12 overflow-x-hidden lg:mt-0">
              <div className="flex flex-col items-center text-primary-600 lg:flex-row lg:items-end lg:pl-8">
                <h4 className="text-center font-russo text-xl">
                  <a href="https://www.google.com/search?q=totem+resorts&oq=totem&aqs=chrome.1.69i57j35i19i39l2j0i512j46i512j69i61l3.1990j0j7&sourceid=chrome&ie=UTF-8">
                    TOTEM RESORTS ON GOOGLE
                  </a>
                </h4>
                <div className="mt-4 flex items-start lg:mt-0 lg:ml-8 lg:mb-0.5">
                  <span className="mr-4 font-russo text-2xl leading-none tracking-widest">
                    {googleReviews.totalRating}
                  </span>
                  <RatingStars
                    rating={googleReviews.totalRating}
                    starSize="w-6 h-6"
                    starSpacing="space-x-2"
                  />
                </div>
              </div>
              <h4 className="mt-8 mb-12 text-center font-russo text-xl text-primary-600 lg:mt-2 lg:mb-4 lg:pl-8 lg:text-left">
                LAST 5 REVIEWS:
              </h4>
              <FooterReviews reviews={googleReviews.reviews} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReservationPopup;
