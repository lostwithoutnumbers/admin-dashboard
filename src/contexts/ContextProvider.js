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
    const [isClicked, setIsClicked] = useState(initialState);
    const [state, setState] = useState(initialState);
    
    const handleClicked = (clicked) => {
        setIsClicked({...initialState, [clicked]:true});
    }

    return (
        <StateContext.Provider 
            value={{
                activeMenu, setActiveMenu,
                isClicked, setIsClicked,
                state, setState,
                handleClicked
            }
            }>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext); 