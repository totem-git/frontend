import { useAppContext } from "context/state";
import Button from "../components/elements/button";

const getReservationFormActionHandler = () => {
  const { setReservationPopupVisible } = useAppContext();
  return () => {
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

const getHandler = (action) => {
  switch (action) {
    case "reservationForm":
      return getReservationFormActionHandler();
    case "scrollToContent":
      return getScrollToContentActionHandler();
    default:
      return () => {};
  }
};

export const allowedActions = ["reservationForm", "scrollToContent"];

export const ActionButton = ({ action, ...props }) => {
  const handler = getHandler(action);
  return <Button handleClick={handler} {...props} type="button" />;
};

export const ActionLink = ({ action, children, ...props }) => {
  const handler = getHandler(action);
  return (
    <span onClick={handler} {...props}>
      {children}
    </span>
  );
};
