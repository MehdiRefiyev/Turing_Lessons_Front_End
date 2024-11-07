import React from 'react'

export default function AddTask({callbackfn}) {


    return (
        <button type='button' className="add-task-button" onClick={callbackfn}>Add Task</button>
    )
}
