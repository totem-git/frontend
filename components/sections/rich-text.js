import PropTypes from "prop-types";
import Markdown from "react-markdown";
import ButtonLink from "../elements/button-link";

const RichText = ({ data }) => {
  return (
    <div className="container prose prose-lg py-12">
      <Markdown
        components={{
          code: ({ children }) => {
            if (children[0].includes(":action:")) {
              let action = children[0].split(":action:")[1]?.split(":")[0];
              let text = children[0].split(":action:")[1]?.split(":")[1];

              return (
                <div className="flex justify-center">
                  <ButtonLink
                    button={{
                      url: `:${action || "reservationForm"}`,
                      text: text || "Click here",
                    }}
                    appearance="dark"
                  />
                </div>
              );
            }
            return (
              <div
                dangerouslySetInnerHTML={{
                  __html: children[0].replace(
                    "<iframe ",
                    "<iframe style='width: 100%; height: auto; aspect-ratio: 16/9;' "
                  ),
                }}
              />
            );
          },
          p: ({ node, ...props }) => {
            if (node.children[0].tagName === "code") return <div {...props} />;
            return <p {...props} />;
          },
          a: ({ node, ...props }) => {
            return <a {...props} target="_blank" rel="noreferrer" />;
          },
        }}
      >
        {data.content}
      </Markdown>
    </div>
  );
};

RichText.propTypes = {
  data: PropTypes.shape({
    content: PropTypes.string,
  }),
};

export default RichText;
