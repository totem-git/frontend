const HighlightedText = ({
  text,
  tag,
  className = "",
  highlightClasses = ["text-highlight before:bg-primary-600 text-white"],
}) => {
  const Tag = tag;
  let textArray = text.split("^");

  return (
    <Tag className={className}>
      {textArray.map((text, i) => {
        if (text == "") return "";
        if (i % 2 == 0)
          return (
            <span key={i} className="relative z-10">
              {text}
            </span>
          );

        let classesIndex = parseInt(text.slice(0, 1));
        text = text.slice(2);
        let classes = highlightClasses[classesIndex] ?? highlightClasses[0];
        return (
          <span key={i} className={classes}>
            {text}
          </span>
        );
      })}
    </Tag>
  );
};

export default HighlightedText;
