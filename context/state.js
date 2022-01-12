import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export function AppWrapper({ children }) {
    const [reservationPopupVisible, setReservationPopupVisible] = useState(false)

    let sharedState = {
        reservationPopupVisible,
        setReservationPopupVisible
    }

    return (
        <AppContext.Provider value={sharedState}>
            {children}
        </AppContext.Provider>
    );
}

export function useAppContext() {
    return useContext(AppContext);
}