import PropTypes from "prop-types";
import Markdown from "react-markdown";

const RichText = ({ data }) => {
  return (
    <div className="container prose prose-lg py-12">
      <Markdown
        components={{
          pre: ({ children }) => (
            <div
              dangerouslySetInnerHTML={{
                __html: children[0].props.children[0],
              }}
            />
          ),
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
