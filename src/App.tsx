import React, {ChangeEvent} from 'react';
import './App.css';
import {Counter} from "./components/Counter";
import s from "./Counter.module.css"
import {combineReducers, createStore} from "redux";
import {
    addErrorActionCreator,
    changeMaxValueActionCreator,
    changeMinValueActionCreator,
    incrementValueActionCreator,
    resetValueActionCreator,
    settingsReducer
} from "./reducer/settingsReducer";
import {useDispatch, useSelector} from "react-redux";


const rootReducer = combineReducers({
    settings: settingsReducer
})

export const store = createStore(rootReducer)
export type AppRootStateType = ReturnType<typeof rootReducer>
// // @ts-ignore
// window.store = store

function App() {


    const maxValue = useSelector<AppRootStateType, number>(state => state.settings.maxValue)
    const minValue = useSelector<AppRootStateType, number>(state => state.settings.minValue)
    const num = useSelector<AppRootStateType, number>(state => state.settings.num)
    const error = useSelector<AppRootStateType, boolean>(state => state.settings.error)
    const dispatch = useDispatch()

    //============ Use Effect for NUM =======================//
    // useEffect(() => {
    //     let valueAsString = localStorage.getItem('counterValue')
    //     if (valueAsString) {
    //         let newValue = JSON.parse(valueAsString)
    //         setNum(newValue)
    //     }
    // }, [])
    //
    // useEffect(() => {
    //     localStorage.setItem('counterValue', JSON.stringify(num))
    // }, [num])


    //======== UseEffect for MAX Value ======================//
    // useEffect(() => {
    //     let valueAsString = localStorage.getItem('maxValue')
    //     if (valueAsString) {
    //         let newValue = JSON.parse(valueAsString)
    //         setMaxValue(newValue)
    //     }
    // }, [])
    //
    // useEffect(() => {
    //     localStorage.setItem('maxValue', JSON.stringify(maxValue))
    // }, [maxValue])


    //======== UseEffect for MIN Value ======================//
    // useEffect(() => {
    //     let valueAsString = localStorage.getItem('minValue')
    //     if (valueAsString) {
    //         let newValue = JSON.parse(valueAsString)
    //         setMinValue(newValue)
    //     }
    // }, [])
    //
    // useEffect(() => {
    //     localStorage.setItem('minValue', JSON.stringify(minValue))
    // }, [minValue])

    const changeSetMaxValue = (event: ChangeEvent<HTMLInputElement>) => {
        let a = (event.currentTarget.value)
        let maxNum = parseInt(a)
        dispatch(changeMaxValueActionCreator(maxNum))
        if (maxNum <= minValue || minValue < 0 || maxNum <= 0) {
            dispatch(addErrorActionCreator(true))
        }
        else {
            dispatch(addErrorActionCreator(false))
        }
    }

    const changeSetMinValue = (event: ChangeEvent<HTMLInputElement>) => {
        let a = (event.currentTarget.value)
        let minNum = parseInt(a)
        dispatch(changeMinValueActionCreator(minNum))
        if (minNum < 0 || minNum >= maxValue) {
            dispatch(addErrorActionCreator(true))
        }
        else {
            dispatch(addErrorActionCreator(false))
        }

    }

    //======= Логика для Counter ===========================//

    const incBtnCallback = () => {
        dispatch(incrementValueActionCreator())
    }

    const resBtn = () => {
        dispatch(resetValueActionCreator())
    }


    return (
        <div className={s.app}>

            <Counter
                num={num}
                minValue={minValue}
                maxValue={maxValue}
                error={error}

                incBtnCallback={incBtnCallback}
                resBtn={resBtn}
                onChangeSetMaxValue={changeSetMaxValue}
                onChangeSetMinValue={changeSetMinValue}
            />
        </div>
    );
}

export default App;
