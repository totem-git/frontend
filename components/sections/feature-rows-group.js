import classNames from "classnames";
import NextImage from "../elements/image";
import Video from "../elements/video";
import CustomLink from "../elements/custom-link";

const FeatureRowsGroup = ({ data }) => {
  return (
    <div className="container flex flex-col gap-12 py-12">
      {data.features.map((feature, index) => (
        <div
          className={classNames(
            // Common classes
            "flex flex-col justify-start gap-10 md:items-center md:justify-between",
            {
              "lg:flex-row": index % 2 === 0,
              "lg:flex-row-reverse": index % 2 === 1,
            }
          )}
          key={feature.id}
        >
          {/* Text section */}
          <div className="w-full text-lg lg:w-6/12 lg:pr-6">
            <h3 className="title">{feature.title}</h3>
            <p className="my-6">{feature.description}</p>
            <CustomLink link={feature.link}>
              <div className="with-arrow text-blue-600 hover:underline">
                {feature.link.text}
              </div>
            </CustomLink>
          </div>
          {/* Media section */}
          <div className="sm:9/12 max-h-full w-full lg:w-4/12">
            {/* Images */}
            {feature.media.mime.startsWith("image") && (
              <div className="h-auto w-full">
                <NextImage media={feature.media} />
              </div>
            )}
            {/* Videos */}
            {feature.media.mime.startsWith("video") && (
              <Video
                media={feature.media}
                className="h-auto w-full"
                autoPlay
                controls={false}
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeatureRowsGroup;
