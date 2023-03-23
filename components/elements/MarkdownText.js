import React from "react";
import Markdown from "react-markdown";

const MarkdownText = ({ content }) => {
  return (
    <Markdown
      components={{
        a: ({ node, ...props }) => {
          return <a {...props} target="_blank" rel="noreferrer" />;
        },
      }}
    >
      {content}
    </Markdown>
  );
};

export default MarkdownText;
