import React, { useState } from 'react'

export const EditForm = ({ updateOlderTask, todo }) => {

    const [value, setValue] = useState(todo.item)

    const handleSubmit = (e) => {
        e.preventDefault();

        updateOlderTask(todo.id, value)

    }

    return (
        <>

            <form onSubmit={handleSubmit}>
                <div className="mb-3 d-flex gap-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder='Enter Task'
                        onChange={e => setValue(e.target.value)}
                        value={value}
                    />
                    <button
                        className="btn btn-success"

                    >update</button>
                </div>
            </form>

        </>
    )
}
