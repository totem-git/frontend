import classNames from "classnames"
import PropTypes from "prop-types"
import { buttonLinkPropTypes } from "utils/types"
import CustomLink from "./custom-link"

const ButtonContent = ({ button, appearance, compact, size }) => {
  return (
    <div
      className={classNames(
        // Common classes
        `inline-block w-auto text-center uppercase tracking-wide font-extrabold ${size} border-2 hover:border-primary-600 hover:text-primary-600`,
        // Full-size button
        {
          "px-8 py-4": compact === false,
        },
        // Compact button
        {
          "px-6 py-2": compact === true,
        },
        // Specific to when the button is fully dark
        {
          "text-black border-black": appearance === "dark",
        },
        // Specific to when the button is dark outlines
        {
          "text-black border-black": appearance === "dark-outline",
        },
        // Specific to when the button is fully white
        {
          "text-white border-white": appearance === "white",
        },
        // Specific to when the button is white outlines
        {
          "text-white border-white": appearance === "white-outline",
        }
      )}
    >
      {button.text}
    </div>
  )
}

const ButtonLink = ({ button, appearance, compact = false, size = 'text-base md:text-sm' }) => {
  return (
    <CustomLink link={button}>
      <ButtonContent
        button={button}
        appearance={appearance}
        compact={compact}
        size={size}
      />
    </CustomLink>
  )
}

ButtonLink.propTypes = {
  button: buttonLinkPropTypes,
  appearance: PropTypes.oneOf([
    "dark",
    "white-outline",
    "white",
    "dark-outline",
  ]),
  compact: PropTypes.bool,
  size: PropTypes.string,
}

export default ButtonLink
