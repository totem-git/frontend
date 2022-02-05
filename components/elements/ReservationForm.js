import { useFormik } from "formik";

const ReservationForm = (props) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      "date-checkin": "",
      "date-checkout": "",
      message: "",
    },
    onSubmit: (values) => {},
  });

  return (
    <form className="bg-inherit">
      <div className="flex flex-col space-y-4 bg-inherit lg:space-y-2">
        <div className="relative bg-inherit">
          <input
            onChange={formik.handleChange}
            value={formik.values["name"]}
            className={`w-full pt-2 ${
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
            className={`w-full pt-2 ${
              formik.values["email"] == "" ? "bg-transparent" : "bg-gray-300"
            } peer text-gray-700 focus:bg-gray-300`}
            type="email"
            name="email"
            id="reservation-form-email"
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
            value={formik.values["date-checkin"]}
            className={`w-full pt-2 ${
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
              Check-in date
            </div>
          )}
        </div>
        <div className="relative bg-inherit">
          <input
            onChange={formik.handleChange}
            value={formik.values["date-checkout"]}
            className={`w-full pt-2 ${
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
              Check-out date
            </div>
          )}
        </div>
        <div className="relative bg-inherit">
          <textarea
            onChange={formik.handleChange}
            value={formik.values["message"]}
            className={`w-full pt-2 ${
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
        <div>
          <button
            type="submit"
            className="bg-primary-600 py-2 px-8 font-bold uppercase"
          >
            Send
          </button>
        </div>
      </div>
    </form>
  );
};

export default ReservationForm;
