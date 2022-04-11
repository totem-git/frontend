import { useAppContext } from "context/state";
import Button from "../components/elements/button";

const getReservationFormActionHandler = (args) => {
  const { setReservationPopupVisible, setReservationSelectedPackage } =
    useAppContext();

  let selectedPackage = args[0];
  return () => {
    if (selectedPackage) {
      setReservationSelectedPackage(selectedPackage);
    } else {
      setReservationSelectedPackage("");
    }

    setReservationPopupVisible(true);
  };
};

const getScrollToContentActionHandler = () => {
  return () => {
    document.documentElement.scrollTo({
      behavior: "smooth",
      top: window.innerHeight - 65,
    });
  };
};

const getHandler = (action, args) => {
  switch (action) {
    case "reservationForm":
      return getReservationFormActionHandler(args);
    case "scrollToContent":
      return getScrollToContentActionHandler(args);
    default:
      return () => {};
  }
};

const parseAction = (action) => {
  let name,
    args = [];

  if (action.indexOf(" ") > -1) {
    name = action.slice(0, action.indexOf(" "));
    let argsString = action.slice(action.indexOf(" ") + 1);

    while (argsString.length > 0) {
      if (argsString.indexOf('"') == 0) {
        args.push(argsString.slice(1, argsString.indexOf('"', 1)));
        argsString = argsString.slice(argsString.indexOf('"', 1) + 1);
      } else {
        args.push(
          argsString.slice(
            0,
            argsString.indexOf(" ") > -1
              ? argsString.indexOf(" ")
              : argsString.length
          )
        );
        argsString = argsString.slice(
          argsString.indexOf(" ") > -1
            ? argsString.indexOf(" ") + 1
            : argsString.length
        );
      }
    }
  } else {
    name = action;
  }

  return {
    name,
    args,
  };
};

export const allowedActions = ["reservationForm", "scrollToContent"];

export const ActionButton = ({ action, ...props }) => {
  const { name, args } = parseAction(action);
  const handler = getHandler(name, args);
  return <Button handleClick={handler} {...props} type="button" />;
};

export const ActionLink = ({ action, children, ...props }) => {
  const { name, args } = parseAction(action);
  const handler = getHandler(name, args);
  return (
    <span onClick={handler} {...props}>
      {children}
    </span>
  );
};
