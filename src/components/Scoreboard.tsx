import React from 'react';

type ScoreboardType = {
    title: number
    className: string
}
export const Scoreboard = (props: ScoreboardType) => {
    return (
        <div className={props.className}>
            {props.title}
        </div>
    );
};

