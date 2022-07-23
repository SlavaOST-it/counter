import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter";
import s from "./Counter.module.css"
import {SettingsCounter} from "./components/SettingsCounter";


function App() {

    let [minValue, setMinValue] = useState<number>(0)
    let [maxValue, setMaxValue] = useState<number>(0)

    let [error, setError] = useState<string>('')

    let [num, setNum] = useState<number>(minValue)

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


    // Логика для Counter

    const incBtnCallback = () => {
        if (num < maxValue) {
            setNum(num + 1)
        }
    }

    const resBtn = () => {
        setNum(minValue)
    }

    // Логика для SettingsCounter
    // const changeMinValue = () => {
    //
    //     if (minValue >= maxValue) {
    //         setError('Error')
    //     } else {
    //         setNum(minValue)
    //     }
    // }

    const setBtn = () => {
        if (minValue >= maxValue) {
            setError('Error')
        } else {
            setError('')
            setNum(maxValue)
            setNum(minValue)
        }

    }


    return (
        <div className={s.app}>
            <SettingsCounter
                num={num}
                minValue={minValue}
                maxValue={maxValue}
                setMinValue={setMinValue}
                setMaxValue={setMaxValue}
                setBtn={setBtn}
                setError={setError}
                // callBack={changeMinValue}
            />


            <Counter
                num={num}
                minValue={minValue}
                maxValue={maxValue}

                incBtnCallback={incBtnCallback}
                resBtn={resBtn}
                error={error}
            />
        </div>
    );
}

export default App;
