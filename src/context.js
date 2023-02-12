import React, { useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({children}) => {
    return <AppContext.Provider value="Dheeraj">
        {children}
    </AppContext.Provider>
}

const useGlobleContext = () => {
    return useContext(AppContext)
}

export {AppContext, AppProvider, useGlobleContext}