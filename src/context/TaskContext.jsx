import React, { createContext, useState } from 'react'

export const TaskContext = createContext()

function TaskStore({ children }) {

    const [task, setTask] = useState([])

    function addTask(data) {
        let newTask = {
            id: Math.floor(Math.random() * 1000000000),
            ...data
        }

        setTask([...task, newTask])
    }

    function deleteTask(id) {
        setTask(task.filter(task => task.id !== id))
    }

    function updateTask(id, data) {
        setTask(task.map(task => task.id === id ? data : task))
    }

    return (
        <TaskContext.Provider value={{ task, setTask, addTask, deleteTask, updateTask }}>
            {children}
        </TaskContext.Provider>
    )
}

export default TaskStore