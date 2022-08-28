import React, {ChangeEvent, useState} from "react";
import s from "../Counter.module.css"
import {Button} from "./Button";
import {Scoreboard} from "./Scoreboard";
import {Settings} from "./Settings";


type CounterType = {
    minValue: number
    maxValue: number
    error: boolean

    num: number,
    incBtnCallback: () => void
    resBtn: () => void
    onChangeSetMaxValue: (event: ChangeEvent<HTMLInputElement>) => void,
    onChangeSetMinValue: (event: ChangeEvent<HTMLInputElement>) => void
}

export const Counter = (props: CounterType) => {

    const [board, setBoard] = useState(true)

    const incBtnHandler = () => props.incBtnCallback()
    const resetBtnHandler = () => props.resBtn()

    const changeBoard = () => {
        setBoard(!board)
    }

    return (
        board ? (
            <div className={s.body}>
                <Scoreboard className={props.num < props.maxValue ? s.tablo : s.numRed}
                            title={props.num}/>
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
                    <Button
                        title={'set'}
                        callBack={changeBoard}
                        className={s.btn}
                        disable={false}/>
                </div>
            </div>
        ) : (
            <Settings
                maxValue={props.maxValue}
                minValue={props.minValue}
                onChangeSetMaxValue={props.onChangeSetMaxValue}
                onChangeSetMinValue={props.onChangeSetMinValue}
                changeBoard={changeBoard}
                error={props.error}
            />
        )
    )
}