import ButtonLink from "@/components/elements/button-link";
import HighlightedText from "@/components/elements/HighlightedText";
import ReactMarkdown from "react-markdown";
import { getButtonAppearance } from "utils/button";
import Breadcrumbs from "@/components/customSections/Breadcrumbs";
import viewer from "viewerjs";
import { useEffect, useRef } from "react";

const Variant8 = ({ data, prependBreadcrumbs }) => {
  const viewerRef = useRef();

  const openViewer = (e) => {
    e.preventDefault();
    if (!viewerRef.current) return;

    viewerRef.current.show();
  };
  useEffect(() => {
    let img = document.createElement("img");
    img.src = "/imgs/totem-resorts-lake-chart.jpg";

    viewerRef.current = new viewer(img, {
      navbar: false,
      toolbar: {
        zoomIn: true,
        zoomOut: true,
        oneToOne: false,
        reset: true,
        prev: false,
        play: false,
        next: false,
        rotateLeft: false,
        rotateRight: false,
        flipHorizontal: false,
        flipVertical: false,
      },
      hidden: function () {
        viewerRef.current.destroy();
      },
    });
  }, []);

  return (
    <>
      {prependBreadcrumbs && <Breadcrumbs bgColor="bg-white" />}
      <section
        id={data.identifier}
        data-section-name="GeneralPurposeSection:Variant8"
        className="bg-white p-4 py-16 px-8 sm:px-16 md:p-8 lg:p-16"
      >
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <HighlightedText
            tag="h2"
            text={data.title}
            className="font-russo text-3xl text-[#fdb32e]"
            highlightClasses={[
              "text-highlight before:bg-primary-600 before:-right-6 text-black",
            ]}
          />
          <div className="prose mt-6 max-w-sm">
            <ReactMarkdown>{data.text}</ReactMarkdown>
          </div>
          {!!data.CTAs.length && (
            <div className="mt-6">
              {data.CTAs.map((CTA, i) => (
                <div
                  key={i}
                  onClick={CTA.url ? undefined : openViewer}
                  className="cursor-pointer"
                >
                  <ButtonLink
                    key={i}
                    button={CTA}
                    appearance={getButtonAppearance(CTA.type, "light")}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Variant8;
