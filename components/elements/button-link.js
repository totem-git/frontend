import classNames from "classnames"
import Image from "next/image"
import PropTypes from "prop-types"
import { buttonLinkPropTypes } from "utils/types"
import CustomLink from "./custom-link"

const ButtonContent = ({ button, appearance, compact, size }) => {
  return (
    <div
      className={classNames(
        // Common classes
        `inline-block w-auto text-center uppercase tracking-wide font-extrabold ${size} border-2 hover:border-primary-600 hover:text-primary-600 hover:stroke-primary-600`,
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
      {button.text}
      {button.icon &&
        <span className="ml-4 flex button-link-icon-container">
          <button.icon />
        </span>
      }
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
