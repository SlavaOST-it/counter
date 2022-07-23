import React, {ChangeEvent} from 'react';
import s from "../Counter.module.css"
import {Button} from "./Button";


export type SettingsCounterType = {
    num: number
    minValue: number
    maxValue: number
    setMinValue: (minValue: number) => void
    setMaxValue: (maxValue: number) => void
    setBtn: () => void
    setError: (error: string) => void
}

export const SettingsCounter = (props: SettingsCounterType) => {

    const onChangeSetMaxValue = (event: ChangeEvent<HTMLInputElement>) => {
        let a = (event.currentTarget.value)
        let maxNum = parseInt(a)
        props.setMaxValue(maxNum)
        if (maxNum <= props.minValue) {
            props.setError('Incorrect value!')
        } else {
            props.setError('')
        }
    }

    const onChangeSetMinValue = (event: ChangeEvent<HTMLInputElement>) => {
        let a = (event.currentTarget.value)
        let minNum = parseInt(a)
        props.setMinValue(minNum)
        if (minNum >= props.maxValue){
            props.setError('Incorrect value!')
        } else {
            props.setError('')
        }
    }


    const setCallbackHandler = () => {
        props.setBtn()
    }

    // const disableHandler = ()
    return (
        <div className={s.settingsBody}>
            <div className={s.inputDiv}>
                <div className={s.valueDiv}>
                    <span className={s.valueText}>max value:</span>
                    <input value={props.maxValue} type={'number'} onChange={onChangeSetMaxValue} className={s.input}/>
                </div>
                <div className={s.valueDiv}>
                    <span className={s.valueText}>start value:</span>
                    <input value={props.minValue} type={'number'} onChange={onChangeSetMinValue} className={s.input}/>
                </div>
            </div>
            <Button title={'set'} callBack={setCallbackHandler} className={s.btn} disable={false}/>

        </div>
    );
};

