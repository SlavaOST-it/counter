import React from 'react';

type ScoreboardType = {
    title: any
    className: string
}
export const Scoreboard = (props: ScoreboardType) => {
    return (
        <div className={props.className}>
            {props.title}
        </div>
    );
};

