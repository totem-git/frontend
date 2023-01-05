import Markdown from "react-markdown";
import Breadcrumbs from "@/components/customSections/Breadcrumbs";

const FeatureList = ({ data, prependBreadcrumbs }) => {
  return (
    <>
      {prependBreadcrumbs && <Breadcrumbs />}
      <section className="py-24" data-section-name="FeatureList">
        <h1 className="text-center font-russo text-4xl text-primary-600">
          {data.heading}
        </h1>
        <div className="prose mx-auto mt-4 text-center leading-tight text-gray-600 xl:text-lg">
          <Markdown>{data.text}</Markdown>
        </div>
        <div className="grid px-8 py-8 text-gray-600 lg:grid-cols-2 xl:px-16 xl:text-lg">
          {data.featureListItems.map((item, index) =>
            index < data.featureListItems.length - 2 ? (
              <div
                key={item.id}
                className="flex items-end border-b-2 border-slate-300 py-10 leading-none before:mr-6 before:inline-block before:h-6 before:w-6 before:shrink-0 before:rounded-full before:bg-primary-600"
              >
                {item.label}
              </div>
            ) : null
          )}
          <div className="flex items-end border-b-2 border-slate-300 py-10 leading-none before:mr-6 before:inline-block before:h-6 before:w-6 before:shrink-0 before:rounded-full before:bg-primary-600 lg:border-0">
            {data.featureListItems[data.featureListItems.length - 2].label}
          </div>
          <div className="flex items-end py-10 leading-none before:mr-6 before:inline-block before:h-6 before:w-6 before:shrink-0 before:rounded-full before:bg-primary-600">
            {data.featureListItems[data.featureListItems.length - 1].label}
          </div>
        </div>
      </section>
    </>
  );
};

export default FeatureList;
