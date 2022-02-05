import PropTypes from "prop-types";
import Markdown from "react-markdown";

const RichText = ({ data }) => {
  return (
    <div className="container prose prose-lg py-12">
      <Markdown>{data.content}</Markdown>
    </div>
  );
};

RichText.propTypes = {
  data: PropTypes.shape({
    content: PropTypes.string,
  }),
};

export default RichText;
