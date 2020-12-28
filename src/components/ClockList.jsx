import React from 'react';
import Clock from "./Clock";
import './ClockList.css';

export default function ClockList({clocks, onDelete}) {
    const elements = clocks.map((item) => {
        return (
            <li key={item.id} className='list-group-item'>
                <Clock
                    name={item.name}
                    timezone={item.timezone}
                    onDelete={() => onDelete(item.id)}
                />
            </li>
        )
    })

    return (
        <ul className='clock-list'>
            {elements}
        </ul>

    )


}