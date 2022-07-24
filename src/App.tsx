import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter";
import s from "./Counter.module.css"
import {SettingsCounter} from "./components/SettingsCounter";


function App() {

    let [minValue, setMinValue] = useState<number>(0)
    let [maxValue, setMaxValue] = useState<number>(0)

    let [error, setError] = useState<string>('')

    let [num, setNum] = useState<number>(minValue)

    //============ Use Effect for NUM ====================//
    useEffect(() => {
        let valueAsString = localStorage.getItem('counterValue')
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            setNum(newValue)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('counterValue', JSON.stringify(num))
    }, [num])

    //======== UseEffect for MAX Value ======================//
       useEffect(() => {
        let valueAsString = localStorage.getItem('maxValue')
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            setMaxValue(newValue)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
    }, [maxValue])

    //======== UseEffect for MIN Value ======================//
    useEffect(() => {
        let valueAsString = localStorage.getItem('minValue')
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            setMinValue(newValue)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('minValue', JSON.stringify(minValue))
    }, [minValue])



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


    const setBtn = () => {
        if (minValue >= maxValue) {
            setError('Incorrect value!')
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
                error={error}
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
