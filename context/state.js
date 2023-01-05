import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function AppWrapper({ children, googleReviews }) {
  const [reservationPopupState, setReservationPopupState] = useState({
    visible: false,
    selectedPackage: "",
    title: undefined,
    submitButtonLabel: undefined,
    gaSubmitEventLabel: undefined,
  });
  const [newsletterPopupVisible, setNewsletterPopupVisible] = useState(false);

  let sharedState = {
    reservationPopupState,
    setReservationPopupState,
    googleReviews,
    newsletterPopupVisible,
    setNewsletterPopupVisible,
  };

  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
