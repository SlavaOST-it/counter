import {combineReducers, createStore} from "redux";
import {settingsReducer} from "../bll/reducer/settingsReducer";
import {loadState, saveState} from "../../utils/localstorage-util";

const persistedState = loadState();

const rootReducer = combineReducers({
    settings: settingsReducer
})

export const store = createStore(rootReducer, persistedState)
store.subscribe(() => {
    saveState({
        settings: store.getState().settings
    });
});
export type AppRootStateType = ReturnType<typeof rootReducer>