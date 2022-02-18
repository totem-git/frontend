import classNames from "classnames";
import PropTypes from "prop-types";
import { buttonLinkPropTypes } from "utils/types";
import Loader from "./loader";

const Button = ({
  button,
  appearance,
  compact = false,
  handleClick,
  loading = false,
  type,
  wFull,
  size,
}) => {
  return (
    <button
      link={button}
      onClick={handleClick}
      type={type}
      className={`${wFull ? "w-full" : "w-auto"}`}
    >
      <div
        className={classNames(
          // Common classes
          `inline-block ${
            wFull ? "w-full" : "w-auto"
          } text-center font-medium uppercase tracking-wide ${size} border-2`,
          // Full-size button
          {
            "px-16 py-4": compact === false,
          },
          // Compact button
          {
            "px-8 py-2": compact === true,
          },
          // Specific to when the button is fully dark
          {
            "border-black stroke-black text-black transition hover:bg-black hover:stroke-white hover:text-white":
              appearance === "dark",
          },
          // Specific to when the button is dark outlines
          {
            "border-black stroke-black text-black":
              appearance === "dark-outline",
          },
          // Specific to when the button is fully white
          {
            "border-white stroke-white text-white transition hover:bg-white hover:stroke-black hover:text-black":
              appearance === "white",
          },
          // Specific to when the button is white outlines
          {
            "border-white stroke-white text-white":
              appearance === "white-outline",
          },
          {
            "inline-flex items-center": button.icon,
          }
        )}
      >
        {loading && <Loader />}
        {button.text}
        {button.icon && (
          <span className="button-link-icon-container ml-auto flex pl-4">
            <button.icon />
          </span>
        )}
      </div>
    </button>
  );
};

Button.propTypes = {
  button: buttonLinkPropTypes,
  appearance: PropTypes.oneOf([
    "dark",
    "white-outline",
    "white",
    "dark-outline",
  ]),
  compact: PropTypes.bool,
};

export default Button;
