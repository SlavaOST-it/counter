import React from "react";

type ButtonType = {
    title: string,
    callBack: () => void
    className: string
    disable: boolean
}

export const Button = (props: ButtonType) => {

    return (
        <button
            onClick={() => props.callBack()}
            className={props.className}
            disabled={props.disable}
        > {props.title} </button>
    )
}