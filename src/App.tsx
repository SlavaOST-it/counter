import React, {useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter";

function App() {
    const minValue = 0
    const maxValue = 5
    let [num, setNum] = useState(minValue)

    return (
        <div>
            <Counter
                minValue={minValue}
                maxValue={maxValue}
                num={num}
                callBack={setNum}
            />
        </div>
    );
}

export default App;
