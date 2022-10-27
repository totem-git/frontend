import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function AppWrapper({ children, googleReviews }) {
  const [reservationPopupVisible, setReservationPopupVisible] = useState(false);
  const [reservationSelectedPackage, setReservationSelectedPackage] =
    useState("");
  const [newsletterPopupVisible, setNewsletterPopupVisible] = useState(false);

  let sharedState = {
    reservationPopupVisible,
    setReservationPopupVisible,
    reservationSelectedPackage,
    setReservationSelectedPackage,
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
