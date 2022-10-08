
import {combineReducers, createStore} from "redux";
import {settingsReducer} from "../bll/reducer/settingsReducer";

const rootReducer = combineReducers({
    settings: settingsReducer
})

export const store = createStore(rootReducer)
export type AppRootStateType = ReturnType<typeof rootReducer>