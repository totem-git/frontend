import FooterReviews from "@/components/elements/FooterReviews";
import RatingStars from "@/components/elements/RatingStars";
import ReservationForm from "@/components/elements/ReservationForm";
import ReservationPopup from "@/components/elements/ReservationPopup";
import Layout from "@/components/layout";
import { useAppContext } from "context/state";
import Image from "next/image";
import { useRouter } from "next/router";
import { useCallback, useRef } from "react";
import { fetchAPI } from "utils/api";
import { sendEvent } from "utils/gtag";

const ContactPage = ({ global, pageContext }) => {
  const appContext = useAppContext();
  const router = useRouter();
  const formContainerRef = useRef();

  const updateScrollTop = useCallback(() => {
    const containerScrollTop =
      formContainerRef.current.getBoundingClientRect().top;
    const currentDocumentScrollTop = document.documentElement.scrollTop;
    document.documentElement.scrollTo({
      top: containerScrollTop + currentDocumentScrollTop - 150,
    });
  }, []);

  return (
    <Layout bgColor="bg-black" global={global} pageContext={pageContext}>
      <div className="mx-auto max-w-6xl pt-32 pb-12 lg:pt-64">
        <div className=" flex h-full flex-col items-stretch justify-between">
          <div className="mx-auto max-w-md lg:flex lg:w-full lg:max-w-7xl lg:grow lg:flex-col lg:justify-center lg:px-8">
            <div className="mx-auto flex flex-col space-y-12 px-4 lg:mt-4 lg:flex-row lg:items-stretch lg:space-y-0 lg:px-0">
              <div className="shrink-0 space-y-4 text-center text-gray-300 lg:w-1/2 lg:pr-16 lg:text-left">
                <h4 className="font-russo text-4xl uppercase text-primary-600">
                  GET OUR RATES IN A FEW MINUTES BY EMAIL {/* title  */}
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
                      <span className="ml-2">Phone: 1-800-666-TOTEM</span>
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
              <div
                ref={formContainerRef}
                className="shrink-0 bg-black pb-8 lg:w-1/2"
              >
                <ReservationForm
                  key={router.query.selected_package}
                  selectedPackage={router.query.selected_package}
                  submitButtonLabel={"Get Rates"}
                  gaEventLabel={"contact-form-page"}
                  updateScrollTop={updateScrollTop}
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
                    {global.googleReviews.totalRating}
                  </span>
                  <RatingStars
                    rating={global.googleReviews.totalRating}
                    starSize="w-6 h-6"
                    starSpacing="space-x-2"
                  />
                </div>
              </div>
              <h4 className="mt-8 mb-12 text-center font-russo text-xl text-primary-600 lg:mt-2 lg:mb-4 lg:pl-8 lg:text-left">
                LAST 5 REVIEWS:
              </h4>
              <FooterReviews reviews={global.googleReviews.reviews} />
            </div>
          </div>
        </div>
      </div>
      {appContext.reservationPopupState.visible && (
        <ReservationPopup
          closeSelf={() => {
            appContext.setReservationPopupState({
              visible: false,
              selectedPackage: "",
            });
          }}
          title={appContext.reservationPopupState.title}
          submitButtonLabel={appContext.reservationPopupState.submitButtonLabel}
          selectedPackage={appContext.reservationPopupState.selectedPackage}
          gaSubmitEventLabel={
            appContext.reservationPopupState.gaSubmitEventLabel
          }
          googleReviews={global.googleReviews}
        />
      )}
    </Layout>
  );
};

export const getStaticProps = async (req) => {
  let global = await fetchAPI("/global");

  const pageContext = {
    slug: `contact`,
  };

  return {
    props: {
      global,
      pageContext,
    },
  };
};

export default ContactPage;
