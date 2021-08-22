import React, {useReducer, createContext, Dispatch} from "react";
import {appReducer, appData, AppState} from "../appStateReducer"
import {Action} from "../appStateActions"

type AppStateContextProps = {
    state: AppState,
    dispatch: Dispatch<Action>
}

const AppStateContext = createContext<AppStateContextProps>({} as AppStateContextProps)

const AppStateContextProvider: React.FC = ({children}) => {
    const [state, dispatch] = useReducer(appReducer, appData)

    return (
        <AppStateContext.Provider value={{state, dispatch}}>
            {children}
        </AppStateContext.Provider>
    )
}

export default AppStateContextProvider