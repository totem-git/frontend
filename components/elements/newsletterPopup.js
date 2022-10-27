import Image from "next/image";
import { useLockBodyScroll } from "utils/hooks";
import { useAppContext } from "context/state";
import { useEffect } from "react";

const NewsletterPopup = () => {
  const { newsletterPopupVisible, setNewsletterPopupVisible } = useAppContext();
  useLockBodyScroll(newsletterPopupVisible);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      const [newsletterShown, time] =
        window.localStorage.getItem("newsletter_shown")?.split(",") || [];
      const currentTime = Date.now();
      const millisecondsInOneDay = 86_400_000;
      if (
        newsletterShown !== "1" ||
        parseInt(time || 0) < currentTime - millisecondsInOneDay
      ) {
        setNewsletterPopupVisible(true);
        window.localStorage.setItem("newsletter_shown", `1,${Date.now()}`);
      }
    }, 10000);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <>
      <div
        onClick={() => setNewsletterPopupVisible(false)}
        className={`${
          newsletterPopupVisible ? "fixed" : "hidden"
        } inset-0 z-50 bg-white bg-opacity-20 backdrop-blur-sm`}
      ></div>
      <div
        className={`${
          newsletterPopupVisible ? "fixed" : "hidden"
        } inset-y-12 left-1/2 z-50 w-full max-w-3xl -translate-x-1/2 overflow-hidden rounded-md bg-black p-4 lg:inset-y-12`}
      >
        <div className="flex h-full flex-col items-stretch justify-between">
          <div className="mx-auto flex w-full justify-end px-4 lg:max-w-7xl">
            <button
              onClick={() => setNewsletterPopupVisible(false)}
              className="py-1 px-1"
            >
              <Image src="/icons/close-menu-icon.svg" width="50" height="50" />
            </button>
          </div>
          <div className="m-auto lg:flex lg:w-full lg:max-w-7xl lg:grow lg:flex-col lg:justify-center lg:px-8">
            <div className="mx-auto flex flex-col space-y-12 px-4 lg:mt-4 lg:flex-row lg:items-stretch lg:space-y-0 lg:px-0">
              <div
                className="ctct-inline-form"
                data-form-id="b1c01114-4472-4dc3-b722-d109d71baf0d"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsletterPopup;
