import React, { useState } from 'react'

export const ToDoForm = ({ addTask }) => {

    const [value, setValue] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        if (value.trim() === '') {
            return alert("Please Enter valid Task")
        }
        addTask(value)
        setValue('')
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

                    >Add</button>
                </div>
            </form>

        </>
    )
}
