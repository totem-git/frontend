import ButtonLink from "@/components/elements/button-link";
import HighlightedText from "@/components/elements/HighlightedText";
import ReactMarkdown from "react-markdown";
import { getButtonAppearance } from "utils/button";

const Variant8 = ({ data }) => {
  return (
    <section
      data-section-name="GeneralPurposeSection:Variant8"
      className="bg-white p-4 py-16 px-8 sm:px-16 md:p-8 lg:p-16"
    >
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <HighlightedText
          tag="h4"
          text={data.title}
          className="font-russo text-3xl"
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
              <ButtonLink
                key={i}
                button={CTA}
                appearance={getButtonAppearance(CTA.type, "light")}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Variant8;
