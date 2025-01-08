import React, { useState } from 'react'
import { ToDoForm } from './ToDoForm'
import { v4 as uuid } from 'uuid'
import { EditForm } from './EditForm';
uuid();

export const ToDoList = () => {
    const [todos, setTodos] = useState([])


    //functions
    const addToDo = (item) => {
        setTodos([...todos, { id: uuid(), item, isEditing: false }])
    }

    const deleteTask = (id) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const updateTask = id => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo))
    }


    const updateToDo = (id, item) => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, item, isEditing: !todo.isEditing } : todo))

    }


    return (
        <>
            <h1 className='text-success text-center'>To-Do App</h1>
            <div className="mb-3 d-flex justify-content-center">
                <ToDoForm addTask={addToDo} />

            </div>
            <div className="mb-3 ">

                <ul className="list-group list-group-flush">
                    {todos.map(todo => (todo.isEditing) ? (
                        <EditForm key={todo.id} todo={todo} updateOlderTask={updateToDo} />) :
                        <li
                            key={todo.id}
                            className='list-group-item d-flex justify-content-between'>{todo.item}

                            <span className='d-flex gap-3'>

                                <button
                                    onClick={() => updateTask(todo.id)}
                                    className="btn btn-primary"
                                >Edit</button>
                                <button

                                    onClick={() => deleteTask(todo.id)}
                                    className="btn btn-danger"
                                >Remove</button></span>

                        </li>)
                    }
                </ul>
            </div>
        </>
    )
}
