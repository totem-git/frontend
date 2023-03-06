import React from "react";
import ReactMarkdown from "react-markdown";

const CancellationPolicy = ({ data, prependBreadcrumbs }) => {
  return (
    <section
      data-section-name="cancellation-policy"
      className=" flex justify-center bg-white text-[#505452]"
    >
      <div className="py-16">
        <h2 className="mb-7 pt-32 text-3xl text-[#FEBE4B]">{data.title}</h2>
        <ReactMarkdown className="cancellation-policy-text prose max-w-[1400px] ">
          {data.text}
        </ReactMarkdown>
      </div>
    </section>
  );
};

export default CancellationPolicy;
