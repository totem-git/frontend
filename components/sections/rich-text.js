import PropTypes from "prop-types";
import Markdown from "react-markdown";

const RichText = ({ data }) => {
  return (
    <div className="container prose prose-lg py-12">
      <Markdown
        components={{
          code: ({ children }) => {
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
