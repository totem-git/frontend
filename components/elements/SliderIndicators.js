const SliderIndicators = ({
  activeSlides,
  activeClassName = "p-1 bg-white",
  inactiveClassName = "p-0.5 bg-gray-500",
  className = "rounded-full transition-all",
}) => {
  return (
    <div className="flex items-center space-x-2">
      {activeSlides.map((isActive, i) => (
        <div
          key={i}
          className={`${
            isActive ? activeClassName : inactiveClassName
          } ${className}`}
        ></div>
      ))}
    </div>
  );
};

export default SliderIndicators;
