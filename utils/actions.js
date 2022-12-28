import { useAppContext } from "context/state";
import Button from "../components/elements/button";

const getReservationFormActionHandler = (args, appContext) => {
  const { setReservationPopupState } = appContext;

  let selectedPackage = args[0];
  return () => {
    setReservationPopupState({
      visible: true,
      selectedPackage: selectedPackage ? selectedPackage : "",
    });
  };
};

const getScrollToContentActionHandler = () => {
  return () => {
    document.documentElement.scrollTo({
      behavior: "smooth",
      top:
        document.getElementById("contentSections").children[0].offsetHeight -
        65,
    });
  };
};

const getNewsletterFormActionHandler = () => {
  const { setNewsletterPopupVisible } = useAppContext();

  return () => {
    setNewsletterPopupVisible(true);
  };
};

const getGetRatesFormActionHandler = (args, appContext) => {
  const { setReservationPopupState } = appContext;

  let selectedPackage = args[0];
  return () => {
    setReservationPopupState({
      visible: true,
      selectedPackage: selectedPackage ? selectedPackage : "",
      title: "GET OUR RATES IN A FEW MINUTES BY EMAIL",
      submitButtonLabel: "REQUEST RATES",
    });
  };
};

const getHandler = (action, args, appContext) => {
  switch (action) {
    case "reservationForm":
      return getReservationFormActionHandler(args, appContext);
    case "scrollToContent":
      return getScrollToContentActionHandler();
    case "newsletterForm":
      return getNewsletterFormActionHandler();
    case "getRatesForm":
      return getGetRatesFormActionHandler(args, appContext);
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

export const allowedActions = [
  "reservationForm",
  "scrollToContent",
  "newsletterForm",
  "getRatesForm",
];

export const ActionButton = ({ action, ...props }) => {
  const appContext = useAppContext();
  const { name, args } = parseAction(action);
  const handler = getHandler(name, args, appContext);
  return <Button handleClick={handler} {...props} type="button" />;
};

export const ActionLink = ({ action, children, ...props }) => {
  const appContext = useAppContext();
  const { name, args } = parseAction(action);
  const handler = getHandler(name, args, appContext);
  return (
    <span onClick={handler} {...props}>
      {children}
    </span>
  );
};
