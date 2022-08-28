import React, {ChangeEvent} from 'react';
import s from "../Counter.module.css";
import {Button} from "./Button";
import {BlockValue} from "./BlockValue";


export type NewSettingsType = {
    maxValue: number,
    minValue: number,
    error: boolean,
    onChangeSetMaxValue: (event: ChangeEvent<HTMLInputElement>) => void,
    onChangeSetMinValue: (event: ChangeEvent<HTMLInputElement>) => void,
    changeBoard: () => void
}
export const Settings = (props: NewSettingsType) => {

    let inputClass = props.error ? `${s.input} + ${s.inputRed}` : s.input

    return (
        <div className={s.body}>
            <div className={s.inputDiv}>
                <BlockValue
                    spanClassName={s.valueText}
                    titleValue={"max value"}
                    inputValue={props.maxValue}
                    inputCallback={props.onChangeSetMaxValue}
                    inputClassName={inputClass}
                />
                <BlockValue
                    spanClassName={s.valueText}
                    titleValue={"start value"}
                    inputValue={props.minValue}
                    inputCallback={props.onChangeSetMinValue}
                    inputClassName={inputClass}
                />
            </div>
            <div className={s.btnDiv}>
                <Button
                    title={'set'}
                    disable={props.error}
                    callBack={props.changeBoard}
                    className={s.btn}/>
            </div>
        </div>
    );
};
