import classNames from "classnames";
import PropTypes from "prop-types";
import { buttonLinkPropTypes } from "utils/types";
import CustomLink from "./custom-link";
import { useAppContext } from "context/state";
import Button from "./button";

const ButtonContent = ({ button, appearance, compact, size, wFull }) => {
  return (
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
          "px-8 py-4": compact === true,
        },
        // Specific to when the button is fully dark
        {
          "border-black stroke-black text-black transition hover:bg-black hover:stroke-white hover:text-white":
            appearance === "dark",
        },
        // Specific to when the button is dark outlines
        {
          "border-black stroke-black text-black": appearance === "dark-outline",
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
      {button.text}
      {button.icon && (
        <span className="button-link-icon-container ml-auto flex pl-4">
          <button.icon />
        </span>
      )}
    </div>
  );
};

const allowedActions = ["reservationForm", "scrollToContent"];

const ActionButton = ({ action, ...props }) => {
  let handler;
  if (action == "reservationForm") {
    const { setReservationPopupVisible } = useAppContext();
    handler = () => {
      setReservationPopupVisible(true);
    };
  } else if (action == "scrollToContent") {
    handler = () => {
      document.documentElement.scrollTo({
        behavior: "smooth",
        top: window.innerHeight - 65,
      });
    };
  }
  return <Button handleClick={handler} {...props} type="button" />;
};

const ButtonLink = ({
  button,
  appearance,
  compact = false,
  size = "text-base md:text-sm",
  wFull = false,
}) => {
  if (
    button.url.startsWith(":") &&
    allowedActions.includes(button.url.slice(1))
  ) {
    let action = button.url.slice(1);

    return (
      <ActionButton
        action={action}
        button={button}
        size={size}
        wFull={wFull}
        appearance={appearance}
        compact={compact}
      />
    );
  }

  return (
    <CustomLink link={button} wFull={wFull}>
      <ButtonContent
        button={button}
        appearance={appearance}
        compact={compact}
        size={size}
        wFull={wFull}
      />
    </CustomLink>
  );
};

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
  wFull: PropTypes.bool,
};

export default ButtonLink;
