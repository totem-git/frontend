import classNames from "classnames"
import PropTypes from "prop-types"
import { buttonLinkPropTypes } from "utils/types"
import Loader from "./loader"

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
    <button link={button} onClick={handleClick} type={type}>
      <div
        className={classNames(
          // Common classes
          `inline-block ${wFull ? 'w-full' : 'w-auto'} text-center uppercase tracking-wide font-extrabold ${size} border-2 hover:border-primary-600 hover:text-primary-600 hover:stroke-primary-600`,
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
            "text-black stroke-black border-black": appearance === "dark",
          },
          // Specific to when the button is dark outlines
          {
            "text-black stroke-black border-black": appearance === "dark-outline",
          },
          // Specific to when the button is fully white
          {
            "text-white stroke-white border-white": appearance === "white",
          },
          // Specific to when the button is white outlines
          {
            "text-white stroke-white border-white": appearance === "white-outline",
          },
          {
            "inline-flex items-center": button.icon,
          }
        )}
      >
        {loading && <Loader />}
        {button.text}
      </div>
    </button>
  )
}

Button.propTypes = {
  button: buttonLinkPropTypes,
  appearance: PropTypes.oneOf([
    "dark",
    "white-outline",
    "white",
    "dark-outline",
  ]),
  compact: PropTypes.bool,
}

export default Button
