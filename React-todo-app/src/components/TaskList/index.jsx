import React from 'react'

export function TaskList({identification , inputData , clFunc}) {

    

    return (
        <li className="task-item">
            <span className="task-text">{inputData}</span>
            <button className="delete-button" onClick={clFunc} id={identification}>Delete</button>
        </li>
    )
}
