import ThumbnailGallery from "../elements/ThumbnailGallery";
import Markdown from "react-markdown";
import { useState, useEffect } from "react";
import { fetchAPI } from "utils/api";
import Breadcrumbs from "@/components/customSections/Breadcrumbs";

const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) return text;
  let minifierText;
  let slicedText = text.slice(0, maxLength);
  let lastDotIndex = slicedText.lastIndexOf(".");
  if (lastDotIndex !== -1) {
    minifierText = slicedText.slice(0, lastDotIndex + 1);
  }

  return `${minifierText}..`;
};

const FishingReportsSection = ({ data, prependBreadcrumbs }) => {
  const [reports, setReports] = useState(data.fishing_reports);

  useEffect(() => {
    fetchAPI(`/fishing-reports?_sort=date:DESC,id:DESC`).then((reports) => {
      setReports(reports);
    });
  }, []);

  return (
    <>
      {prependBreadcrumbs && <Breadcrumbs bgColor="bg-white" />}
      <div className="bg-white py-12" data-section-name="FishingReportsSection">
        {reports.map((report) => (
          <FishingReport key={report.id} report={report} />
        ))}
      </div>
    </>
  );
};

const FishingReport = ({ report }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  let texto = truncateText(report.text, 800);
  const handleView = () => {
    setIsExpanded((prevState) => !prevState);
  };

  return (
    <>
      <article className="overflow-x-hidden bg-white py-1 md:py-2">
        <div className="mx-auto flex max-w-md flex-col  justify-center space-y-4 px-4 sm:max-w-4xl sm:flex-row md:space-y-0 md:space-x-4 lg:container lg:max-w-6xl xl:max-w-[1400px] xl:px-16 2xl:max-w-none">
          <div className="relative z-10 w-full max-w-[350px] flex-1 p-4 lg:max-w-xl 2xl:max-w-none">
            <span
              className="absolute bottom-0 left-1/2 -top-3 w-screen -translate-x-1/2 sm:-right-8 sm:-left-24 sm:w-auto sm:translate-x-0"
              style={{
                backgroundImage:
                  "radial-gradient(var(--light-grey-blue) 1px, transparent 2px)",
                backgroundSize: "10px 10px",
              }}
            ></span>
            <ThumbnailGallery mediaList={report.media} />
          </div>
          <div
            className="relative z-10 max-w-sm flex-1 space-y-4 sm:self-start sm:pt-12 sm:pl-2 lg:max-w-none lg:pl-16"
            style={{ paddingTop: "0" }}
          >
            <h5>{report.date}</h5>
            <h2 className="font-russo text-3xl font-thin text-primary-600 lg:block 2xl:text-[2vw]">
              {report.title}
            </h2>
            <div className="prose text-gray-700 2xl:text-[1.2vw]">
              {isExpanded ? (
                <Markdown>{report.text}</Markdown>
              ) : (
                <Markdown>{texto}</Markdown>
              )}
              <button
                style={{ color: "#0000EE", "text-decoration": "underline" }}
                onClick={handleView}
              >
                {" "}
                {isExpanded ? "Read Less" : "Read More"}{" "}
              </button>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default FishingReportsSection;
