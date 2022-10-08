import React, {ChangeEvent} from 'react';
import './App.css';
import {Counter} from "./components/Counter";
import s from "./Counter.module.css"
import {
    addErrorActionCreator,
    changeMaxValueActionCreator,
    changeMinValueActionCreator,
    incrementValueActionCreator,
    resetValueActionCreator
} from "./components/bll/reducer/settingsReducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./components/store/store";


function App() {
    const maxValue = useSelector<AppRootStateType, number>(state => state.settings.maxValue)
    const minValue = useSelector<AppRootStateType, number>(state => state.settings.minValue)
    const num = useSelector<AppRootStateType, number>(state => state.settings.num)
    const error = useSelector<AppRootStateType, boolean>(state => state.settings.error)
    const dispatch = useDispatch()


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
