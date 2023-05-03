import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

const initialState = {
    chat:false,
    cart:false,
    userProfile:false,
    notification: false,
}

export const ContextProvider = ({children}) => {
    const [activeMenu, setActiveMenu] = useState(true);

    const [state, setState] = useState(initialState);

    return (
        <StateContext.Provider value={[state, setState]}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext); 