import React from "react";
import s from "../Counter.module.css"
import {Button} from "./Button";
import {Tablo} from "./Tablo";

type CounterType = {
    minValue: number
    maxValue: number
    num: number,
    incBtn: () => void
    resBtn: () => void
}

export const Counter = (props: CounterType) => {

    const incBtnHandler = () => props.incBtn()

    const resetBtnHandler = () => props.resBtn()

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