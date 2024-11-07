import React from 'react'

export function TaskList({inputData}) {

    

    return (
        <li className="task-item">
            <span className="task-text">{inputData}</span>
            <button className="delete-button">Delete</button>
        </li>
    )
}
