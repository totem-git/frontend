import ButtonLink from "@/components/elements/button-link";
import ReservationPopup from "@/components/elements/ReservationPopup";
import Layout from "@/components/layout";
import { AppWrapper, useAppContext } from "context/state";
import Image from "next/image";
import { fetchAPI } from "utils/api";

const Custom404 = ({ global, pageContext }) => {
  return (
    <AppWrapper googleReviews={global.googleReviews}>
      <NotFoundView global={global} pageContext={pageContext} />
    </AppWrapper>
  );
};

export const NotFoundView = ({ global, pageContext }) => {
  const appContext = useAppContext();

  return (
    <Layout bgColor="bg-white" global={global} pageContext={pageContext}>
      <div className="pt-24 pb-12">
        <div className="pt-20">
          <div className="space-y-4 text-center">
            {/* ### SEPARADOR ### */}
            <div className="">
              <div className="mx-auto max-w-4xl">
                <Image
                  src={"/imgs/404.png"}
                  alt="imagen 404 not found"
                  width={1821}
                  height={762}
                />
              </div>
              <hr className="mx-auto max-w-2xl border-2" />
              <h1 className="font-russo text-4xl font-thin uppercase text-primary-600">
                The page you are looking for does not exist.
              </h1>
              <p className="mt-2 text-gray-700">
                Please check the URL in the address bar and try again.
              </p>
            </div>
            <div className="p-4 md:p-6 2xl:p-16">
              <ButtonLink
                button={{ url: "/", text: "GO BACK TO HOME" }}
                appearance="dark"
              />
            </div>
          </div>
        </div>
        <div
          className="h-20 w-full bg-contain bg-repeat-x"
          style={{ backgroundImage: "url(/icons/symbol-1.png)" }}
        ></div>
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
          emailSubject={appContext.reservationPopupState.emailSubject}
        />
      )}
    </Layout>
  );
};

export const getStaticProps = async (req) => {
  let global = await fetchAPI("/global");

  const pageContext = {
    slug: `404`,
  };

  return {
    props: {
      global,
      pageContext,
    },
  };
};

export default Custom404;
