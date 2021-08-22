import {useContext} from "react"
import {AppStateContext} from "../state/context/AppState"

export const useAppState = () => useContext(AppStateContext)