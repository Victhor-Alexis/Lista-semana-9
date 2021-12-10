import { createContext, useContext, useState } from "react";

const DynimicityContext = createContext({});

const DynimicityProvider = ({children}) => {
    const [gameIndex, setGameIndex] = useState(-1);

    const selectedEffects = (index) => {
        if (index === gameIndex)
            return "selected"
        else 
            return undefined
    }

    return (
        <DynimicityContext.Provider value={{setGameIndex, selectedEffects, gameIndex}}>
            {children}
        </DynimicityContext.Provider>
    );
}

const useDynimicityContext = () => {
    const context = useContext(DynimicityContext)

    return context;
}

export {DynimicityProvider, useDynimicityContext}