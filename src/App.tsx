import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter";
import s from "./Counter.module.css"
import {SettingsCounter} from "./components/SettingsCounter";

function App() {
    const minValue = 0
    const maxValue = 5

    let [num, setNum] = useState<number>(minValue)

    const [value, setValue] = useState(0)

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


    // Логика для Counter
    const incBtn = () => {
        if (num < maxValue) {
            setNum(num + 1)
        }
    }
    const resBtn = () => {
        setNum(0)
    }

    // Логика для SettingsCounter




    return (
        <div className={s.app}>
            <SettingsCounter
                value={value}
                setValue={setValue}
                minValue={minValue}
                maxValue={maxValue}
            />



            <Counter
                minValue={minValue}
                maxValue={maxValue}
                num={num}
                incBtn={incBtn}
                resBtn={resBtn}
            />
        </div>
    );
}

export default App;
