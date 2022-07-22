import React, {useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter";
import s from "./Counter.module.css"
import {SettingsCounter} from "./components/SettingsCounter";

function App() {
    const minValue = 0
    const maxValue = 5

    let [num, setNum] = useState(minValue)

    const [value, setValue] = useState(0)


    const incBtn = () => {
        if (num < maxValue) {
            setNum(num + 1)
        }
    }

    const resBtn = () => {
        setNum(0)
    }


    return (
        <div className={s.app}>
            <SettingsCounter
                value={value}
                setValue={setValue}
                minValue={minValue}
                maxValue={maxValue}/>


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
