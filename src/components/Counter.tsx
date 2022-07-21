import React from "react";
import s from "../Counter.module.css"
import {Button} from "./Button";
import {Tablo} from "./Tablo";

type CounterType = {
    minValue: number
    maxValue: number
    num: number,
    callBack: (num: number) => void
}

export const Counter = (props: CounterType) => {

    const incBtnHandler = () => {
        if (props.num < props.maxValue) {
            props.callBack(props.num + 1)
        }
    }

    const resetBtnHandler = () => {
        props.callBack(0)
    }

    return (
        <div className={s.body}>
            <Tablo className={props.num < props.maxValue ? s.tablo : s.numRed}
                   title={props.num}/>
            <div className={s.btn}>
                <Button
                    title={'inc'}
                    callBack={incBtnHandler}
                    className={`${s.inc}` + ' ' + `${s.btn}`}
                    disable={props.num === props.maxValue}
                />
                <Button
                    title={'reset'}
                    callBack={resetBtnHandler}
                    className={`${s.reset}` + ' ' + `${s.btn}`}
                    disable={props.num === props.minValue}
                />
            </div>
        </div>
    )
}