import React, {ChangeEvent} from 'react';


export type BlockValueType = {
    spanClassName: string,
    titleValue: string,

    inputValue: number
    inputCallback: (event: ChangeEvent<HTMLInputElement>)=>void
    inputClassName: string

}

export const BlockValue = (props: BlockValueType) => {
    return (
        <div>
            <span className={props.spanClassName}>{props.titleValue}:</span>
            <input value={props.inputValue}
                   type={'number'}
                   onChange={props.inputCallback}
                   className={props.inputClassName}/>
        </div>
    );
};

