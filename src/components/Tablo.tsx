import React from 'react';

type TabloType = {
    title: number
    className: string
}
export const Tablo = (props: TabloType) => {
    return (
        <div className={props.className}>
            {props.title}
        </div>
    );
};

