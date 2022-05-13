import { useFormik } from "formik";
import { useState } from "react";

const EmploymentForm = () => {
  const [showNotice, setShowNotice] = useState(false);
  const [resumeIsOk, setResumeIsOk] = useState(true);

  const formik = useFormik({
    initialValues: {
      job_title: "",
      location: "",
      position_length: "",
      resume: "",
      name: "",
      email: "",
      phone: "",
    },
    onSubmit: async (values) => {
      if (values.resume === "" || !values.resume.name.endsWith(".pdf")) {
        return;
      }

      let formData = new FormData();
      formData.append("job_title", values.job_title);
      formData.append("location", values.location);
      formData.append("position_length", values.position_length);
      formData.append("name", values.name);
      formData.append("email", values.email);
      formData.append("phone", values.phone);
      formData.append("resume", values.resume, values.resume.name);

      let response = await fetch("/api/send-employment-application", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setShowNotice(true);
      }
    },
  });

  return (
    <div className="mx-2 mt-10 flex flex-col items-center justify-center pb-20">
      <div className="max-w-xl space-y-4">
        <p>Thank you for your interest in joining the Totem Resorts team!</p>
        <p>
          Please select the information that best suites you below and submit
          your resumetoday to live and work ’the lake life!’
        </p>
        <p>
          <b>Must be 19 years of age or older to apply</b>
        </p>
      </div>
      <form
        className="mt-10 w-full max-w-xl bg-inherit"
        onSubmit={formik.handleSubmit}
      >
        <div className="flex flex-col space-y-4 bg-inherit lg:space-y-2">
          <div className="relative bg-inherit">
            <select
              onChange={formik.handleChange}
              value={formik.values["job_title"]}
              className={`peer w-full bg-white p-2 text-gray-900`}
              name="job_title"
              id="employment-form-job_title"
              required
            >
              <option value="">Choose your job title</option>
              <option value="Front Desk">Front Desk</option>
              <option value="Reservations Coordinator">
                Reservations Coordinator
              </option>
              <option value="Guest Services">Guest Services</option>
              <option value="Shuttle Bus Driver (F Class License)">
                Shuttle Bus Driver (F Class License)
              </option>
              <option value="Housekeeping">Housekeeping</option>
              <option value="Housekeeping Manager">Housekeeping Manager</option>
              <option value="Dock Hand">Dock Hand</option>
              <option value="Shuttle Boat Driver (Ontario Boater’s License Required)">
                Shuttle Boat Driver (Ontario Boater’s License Required)
              </option>
              <option value="Groundskeeper">Groundskeeper</option>
              <option value="Shorelunch Prep Cook">Shorelunch Prep Cook</option>
              <option value="Fishing Guide">Fishing Guide</option>
              <option value="Chef">Chef</option>
              <option value="Sous Chef">Sous Chef</option>
              <option value="Breakfast Cook">Breakfast Cook</option>
              <option value="Prep Cook">Prep Cook</option>
              <option value="Dishwasher">Dishwasher</option>
            </select>
            {formik.values["job_title"] == "" && (
              <div className="pointer-events-none absolute inset-2 bg-white p-px font-medium text-gray-700 peer-focus:hidden">
                Which job would you like to apply for?
              </div>
            )}
          </div>
          <div className="relative bg-inherit">
            <select
              onChange={formik.handleChange}
              value={formik.values["location"]}
              className={`peer w-full bg-white p-2 text-gray-900`}
              name="location"
              id="employment-form-location"
            >
              <option value="">Choose your preferred location</option>
              <option value="Totem Lodge">Totem Lodge</option>
              <option value="Yellowbird Lodge">Yellowbird Lodge</option>
              <option value="Wiley Point Lodge">Wiley Point Lodge</option>
            </select>
            {formik.values["location"] == "" && (
              <div className="pointer-events-none absolute inset-2 bg-white p-px font-medium text-gray-700 peer-focus:hidden">
                Which location would you like to work in?
              </div>
            )}
          </div>
          <div className="relative bg-inherit">
            <select
              onChange={formik.handleChange}
              value={formik.values["position_length"]}
              className={`peer w-full bg-white p-2 text-gray-900`}
              name="position_length"
              id="employment-form-position_length"
              required
            >
              <option value="">
                Choose the position length you would like
              </option>
              <option value="Seasonal">Seasonal</option>
              <option value="Year-round">Year-round</option>
            </select>
            {formik.values["position_length"] == "" && (
              <div className="pointer-events-none absolute inset-2 bg-white p-px font-medium text-gray-700 peer-focus:hidden">
                Are you looking for a seasonal or year-round employment?
              </div>
            )}
          </div>
          <div className="relative bg-inherit">
            <label htmlFor="employment-form-resume">
              <input
                type="file"
                name="resume"
                required
                onChange={(evt) => {
                  if (
                    evt.target.files.length === 1 &&
                    evt.target.files[0].name.endsWith(".pdf")
                  ) {
                    setResumeIsOk(true);
                    formik.setFieldValue("resume", evt.target.files[0]);
                  } else {
                    setResumeIsOk(false);
                  }
                }}
                id="employment-form-resume"
              />
              <span className="flex-1">Upload your resume in PDF format</span>
            </label>
            {!resumeIsOk && (
              <p className="text-red-500">Your resume should be PDF file.</p>
            )}
          </div>
          <div className="relative bg-inherit">
            <input
              onChange={formik.handleChange}
              value={formik.values["name"]}
              className={`peer w-full bg-white p-2 text-gray-900`}
              type="text"
              name="name"
              id="employment-form-name"
              required
            />
            {formik.values["name"] == "" && (
              <div className="pointer-events-none absolute inset-2 bg-white p-px font-medium text-gray-700 peer-focus:hidden">
                Name
              </div>
            )}
          </div>
          <div className="relative bg-inherit">
            <input
              onChange={formik.handleChange}
              value={formik.values["email"]}
              className={`peer w-full bg-white p-2 text-gray-900`}
              type="email"
              name="email"
              id="employment-form-email"
              required
            />
            {formik.values["email"] == "" && (
              <div className="pointer-events-none absolute inset-2 bg-white p-px font-medium text-gray-700 peer-focus:hidden">
                Email
              </div>
            )}
          </div>
          <div className="relative bg-inherit">
            <input
              onChange={formik.handleChange}
              value={formik.values["phone"]}
              className={`peer w-full bg-white p-2 text-gray-900`}
              type="tel"
              name="phone"
              id="employment-form-phone"
              required
            />
            {formik.values["phone"] == "" && (
              <div className="pointer-events-none absolute inset-2 bg-white p-px font-medium text-gray-700 peer-focus:hidden">
                Phone
              </div>
            )}
          </div>
          <div className="relative">
            <div
              className={`${
                showNotice ? "" : " pointer-events-none opacity-0"
              } absolute border-2 border-primary-600 bg-white p-4 text-xl text-black`}
            >
              Your application has been sent! <br />
              We will get back to you as soon as possible.
            </div>
            <button
              type="submit"
              className="bg-primary-600 py-2 px-8 font-bold uppercase"
            >
              Send
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EmploymentForm;
