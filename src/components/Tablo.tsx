import React from 'react';

type TabloType = {
    title: string | number
    className: string
}
export const Tablo = (props: TabloType) => {
    return (
        <div className={props.className}>
            {props.title}
        </div>
    );
};

