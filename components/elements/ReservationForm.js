import { useFormik } from "formik";
import { useRouter } from "next/router";
import { sendEvent } from "utils/gtag";

const ReservationForm = ({
  updateScrollTop = () => {},
  selectedPackage,
  submitButtonLabel = "Send",
  gaEventLabel = "book-now",
  closePopup = () => {},
  emailSubject = "Reservations",
}) => {
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      "date-checkin": "",
      "date-checkout": "",
      message: "",
      "package-type": selectedPackage,
      resort: "",
      phone: "",
      newsletter: true,
    },
    onSubmit: async (values) => {
      let response = await fetch("/api/send-contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...values, email_subject: emailSubject }),
      });

      if (response.ok) {
        sendEvent({
          action: "submit-form",
          category: "contact",
          label: gaEventLabel,
        });
        closePopup?.();
        router.push("contact-success");
      }
    },
  });
  return (
    <form
      className="bg-inherit"
      onSubmit={formik.handleSubmit}
      onClick={updateScrollTop}
    >
      <div className="flex flex-col space-y-4 bg-inherit lg:space-y-2">
        <div className="relative bg-inherit">
          <input
            onChange={formik.handleChange}
            value={formik.values["name"]}
            className={`w-full p-2 ${
              formik.values["name"] == "" ? "bg-transparent" : "bg-gray-300"
            } peer text-gray-700 focus:bg-gray-300`}
            type="text"
            name="name"
            id="reservation-form-name"
          />
          {formik.values["name"] == "" && (
            <div className="pointer-events-none absolute inset-2 bg-inherit p-px font-medium text-gray-400 peer-focus:hidden">
              Name
            </div>
          )}
        </div>
        <div className="relative bg-inherit">
          <input
            onChange={formik.handleChange}
            value={formik.values["email"]}
            className={`w-full p-2 ${
              formik.values["email"] == "" ? "bg-transparent" : "bg-gray-300"
            } peer text-gray-700 focus:bg-gray-300`}
            type="email"
            name="email"
            id="reservation-form-email"
            required
          />
          {formik.values["email"] == "" && (
            <div className="pointer-events-none absolute inset-2 bg-inherit p-px font-medium text-gray-400 peer-focus:hidden">
              Email
            </div>
          )}
        </div>
        <div className="relative bg-inherit">
          <input
            onChange={formik.handleChange}
            value={formik.values["phone"]}
            className={`w-full p-2 ${
              formik.values["phone"] == "" ? "bg-transparent" : "bg-gray-300"
            } peer text-gray-700 focus:bg-gray-300`}
            type="tel"
            name="phone"
            id="reservation-form-phone"
          />
          {formik.values["phone"] == "" && (
            <div className="pointer-events-none absolute inset-2 bg-inherit p-px font-medium text-gray-400 peer-focus:hidden">
              Phone
            </div>
          )}
        </div>
        <div className="relative flex  bg-inherit">
          <div className="relative w-full bg-inherit">
            <input
              onChange={formik.handleChange}
              value={formik.values["date-checkin"]}
              className={`w-full p-2 ${
                formik.values["date-checkin"] == ""
                  ? "bg-transparent"
                  : "bg-gray-300"
              } peer text-gray-700 focus:bg-gray-300`}
              type="date"
              name="date-checkin"
              id="reservation-form-date-checkin"
            />
            {formik.values["date-checkin"] == "" && (
              <div className="pointer-events-none absolute inset-2 bg-inherit p-px font-medium text-gray-400 peer-focus:hidden">
                Check-in Date
              </div>
            )}
          </div>
          <div className="relative w-full bg-inherit">
            <input
              onChange={formik.handleChange}
              value={formik.values["date-checkout"]}
              className={`w-full p-2 ${
                formik.values["date-checkout"] == ""
                  ? "bg-transparent"
                  : "bg-gray-300"
              } peer text-gray-700 focus:bg-gray-300`}
              type="date"
              name="date-checkout"
              id="reservation-form-date-checkout"
            />
            {formik.values["date-checkout"] == "" && (
              <div className="pointer-events-none absolute inset-2 bg-inherit p-px font-medium text-gray-400 peer-focus:hidden">
                Check-out Date
              </div>
            )}
          </div>
        </div>
        <div className="flex">
          <div className="relative w-full bg-inherit">
            <select
              onChange={formik.handleChange}
              value={formik.values["resort"]}
              className={`w-full p-2 ${
                formik.values["resort"] == "" ? "bg-transparent" : "bg-gray-300"
              } peer text-gray-700 focus:bg-gray-300`}
              name="resort"
              id="reservation-form-resort"
            >
              <option value="">Choose your Resort</option>
              <option value="totem-lodge">Totem Lodge</option>
              <option value="wiley-point">Wiley Point Lodge</option>
              <option value="yellowbird-lodge-and-chalet">
                Yellowbird Lodge & Chalet
              </option>
              <option value="french-portage-outpost">
                French Portage Outpost
              </option>
              <option value="private-island">Private Islands Lodge</option>
              <option value="sunset-channel-island-outpost">
                Sunset Channel Outpost
              </option>
            </select>
            {formik.values["resort"] == "" && (
              <div className="pointer-events-none absolute inset-2 bg-inherit p-px font-medium text-gray-400 peer-focus:hidden">
                Choose your Resort
              </div>
            )}
          </div>
          <div className="ml-2 flex w-min items-stretch border-[1px] border-gray-400 hover:border-gray-100">
            <a
              href={`/lodging/${formik.values["resort"]}`}
              target={"_blank"}
              className="flex w-max items-center px-4 text-white"
            >
              View details
            </a>
          </div>
        </div>
        <div className="flex">
          <div className="relative w-full bg-inherit">
            <select
              onChange={formik.handleChange}
              value={formik.values["package-type"]}
              className={`w-full p-2 ${
                formik.values["package-type"] == ""
                  ? "bg-transparent"
                  : "bg-gray-300"
              } peer text-gray-700 focus:bg-gray-300`}
              name="package-type"
              id="reservation-form-package-type"
            >
              <option value="">Choose your Package</option>
              <option value="AP">American Plan Package (AP)</option>
              <option value="CAP">Complete American Plan Package (CAP)</option>
              <option value="HSK">Housekeeping Package (HSK)</option>
            </select>
            {formik.values["package-type"] == "" && (
              <div className="pointer-events-none absolute inset-2 bg-inherit p-px font-medium text-gray-400 peer-focus:hidden">
                Choose your Package
              </div>
            )}
          </div>
          <div className="ml-2 flex w-min items-stretch border-[1px] border-gray-400 hover:border-gray-100">
            <a
              href="/the-fishing-experience/fishing-packages"
              target={"_blank"}
              className="flex w-max items-center px-4 text-white"
            >
              View details
            </a>
          </div>
        </div>
        <div className="relative bg-inherit">
          <textarea
            onChange={formik.handleChange}
            value={formik.values["message"]}
            className={`w-full p-2 ${
              formik.values["message"] == "" ? "bg-transparent" : "bg-gray-300"
            } peer text-gray-700 focus:bg-gray-300`}
            name="message"
            id="reservation-form-message"
            cols="30"
            rows="5"
          ></textarea>
          {formik.values["message"] == "" && (
            <div className="pointer-events-none absolute inset-2 bg-inherit p-px font-medium text-gray-400 peer-focus:hidden">
              Message
            </div>
          )}
        </div>
        <div className="relative flex">
          {/* <div
            className={`${
              showNotice ? "" : " pointer-events-none opacity-0"
            } absolute border-2 border-primary-600 bg-white p-4 text-xl text-black`}
          >
            Your message has been sent! <br />
            We will get back to you as soon as possible.
          </div> */}
          <button
            type="submit"
            className="bg-primary-600 py-2 px-8 font-bold uppercase"
          >
            {submitButtonLabel}
          </button>
          <label className="ml-4 inline-flex items-center">
            <input
              type="checkbox"
              name="newsletter"
              id="reservation-form-newsletter"
              checked={formik.values["newsletter"]}
              onChange={formik.handleChange}
            />
            <span className="ml-2 text-gray-300">
              Keep updated with our newsletter
            </span>
          </label>
        </div>
      </div>
    </form>
  );
};

export default ReservationForm;
