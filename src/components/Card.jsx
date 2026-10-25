import React from 'react'
import { TaskContext } from '../context/TaskContext'
import { useContext } from 'react';

function Card({ task }) {
    const { deleteTask, updateTask } = useContext(TaskContext);
    return (
        <article className='border border-gray-300 p-2 rounded-xl'>
            <h1 className='font-bold text-xl'>{task.title}</h1>
            <p className='font-medium text-lg'>{task.description}</p>
            <p className='font-medium text-lg'>Priority: {task.priority}</p>
            <p className='font-medium text-lg'>Status: {task.status}</p>

            <button onClick={() => deleteTask(task.id)} className='bg-red-500 text-white p-2 rounded-xl cursor-pointer'>Delete</button>
            <button onClick={() => updateTask(task.id, { ...task, status: 'completed' })} className='bg-green-500 text-white p-2 rounded-xl cursor-pointer'>Complete</button>

        </article>
    )
}

export default Card