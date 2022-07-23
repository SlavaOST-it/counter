import React from "react";
import s from "../Counter.module.css"
import {Button} from "./Button";
import {Tablo} from "./Tablo";

type CounterType = {
    minValue: number
    maxValue: number
    num: number,
    incBtnCallback: (minValue: number) => void
    resBtn: () => void
    error:string
}

export const Counter = (props: CounterType) => {

    const incBtnHandler = () => props.incBtnCallback(props.minValue)

    const resetBtnHandler = () => props.resBtn()

    const inputTitle = props.error ? props.error : props.num
    let messageError = <div></div>
    return (
        <div className={s.body}>
            <Tablo className={props.num < props.maxValue ? s.tablo : s.numRed}
                   title={inputTitle}/>
            <div className={s.btnDiv}>
                <Button
                    title={'inc'}
                    callBack={incBtnHandler}
                    className={`${s.inc} + ' ' + ${s.btn}`}
                    disable={props.num === props.maxValue}
                />
                <Button
                    title={'reset'}
                    callBack={resetBtnHandler}
                    className={`${s.reset} + ' ' + ${s.btn}`}
                    disable={props.num === props.minValue}
                />
            </div>
        </div>
    )
}