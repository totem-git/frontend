import Image from "next/image";
import { useAppContext } from "context/state";
import { useEffect, useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useFormik } from "formik";

const NewsletterPopup = () => {
  const { newsletterPopupVisible, setNewsletterPopupVisible } = useAppContext();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const rcRef = useRef();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
    },
    onSubmit: async (data) => {
      setLoading(true);
      const token = await rcRef.current.executeAsync();
      rcRef.current.reset();
      const { contact_id } = await fetch("/api/mc_subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, token }),
      }).then((res) => res.json());

      setLoading(false);

      if (!contact_id) {
        setError("This email address is already subscribed.");
        return;
      }

      window.location = "/subscription-success";
    },
  });
  // useLockBodyScroll(newsletterPopupVisible);

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
          newsletterPopupVisible ? "block" : "hidden"
        } fixed inset-0 z-50 bg-white bg-opacity-20`}
      ></div>
      <div
        className={`${
          newsletterPopupVisible ? "translate-x-0" : "-translate-x-full"
        } fixed left-0 bottom-0 z-50 w-full max-w-xl overflow-hidden rounded-r-md bg-black p-4 transition-transform lg:p-8`}
      >
        <div className="flex h-full flex-col items-stretch justify-between">
          <div className="mx-auto flex w-full justify-end px-4 lg:max-w-7xl">
            <button
              onClick={() => setNewsletterPopupVisible(false)}
              className="py-1 px-1"
            >
              <Image src="/icons/close-menu-icon.svg" width="25" height="25" />
            </button>
          </div>
          <div className="m-auto lg:flex lg:w-full lg:max-w-7xl lg:grow lg:flex-col lg:justify-center">
            <div className="mx-auto -mt-4 flex flex-col space-y-2 px-4 text-white lg:px-8">
              <h4 className="text-3xl font-semibold text-primary-600">
                Sign up for updates!
              </h4>
              <p>
                Get news from Totem Resorts and LOTW Fishing Reports in your
                inbox.
              </p>
              <form className="space-y-4" onSubmit={formik.handleSubmit}>
                <ReCAPTCHA
                  ref={rcRef}
                  sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                  size="invisible"
                />
                <div className="flex flex-col space-y-1">
                  <label htmlFor="newsletter_form--email" className="relative">
                    <span className="absolute right-full mr-1 text-xl text-red-600">
                      *
                    </span>
                    Email
                  </label>
                  <input
                    className="text-black"
                    placeholder="john.doe@example.com"
                    onChange={formik.handleChange}
                    value={formik.values["email"]}
                    type="email"
                    name="email"
                    id="newsletter_form--email"
                  />
                </div>
                <div className="flex flex-col space-y-1">
                  <label htmlFor="newsletter_form--name">Name</label>
                  <input
                    className="text-black"
                    placeholder="John Doe"
                    onChange={formik.handleChange}
                    value={formik.values["name"]}
                    type="text"
                    name="name"
                    id="newsletter_form--name"
                  />
                </div>
                {error && <p className="text-red-500">{error}</p>}
                <p className="text-xs">
                  By submitting this form, you are consenting to receive
                  marketing emails from: Totem Resorts, Box 180, Sioux Narrows,
                  ON, Ontario, p0x1n0, CA, http://www.totemresorts.com. You can
                  revoke your consent to receive emails at any time by using the
                  SafeUnsubscribe® link, found at the bottom of every email.
                  Emails are serviced by Constant Contact.
                </p>
                <div className="">
                  <button
                    type="submit"
                    className="w-full bg-primary-600 py-4 px-8 font-bold uppercase disabled:cursor-progress disabled:grayscale"
                    disabled={loading}
                  >
                    Sign up
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsletterPopup;
