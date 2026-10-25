import React, { useContext } from 'react'
import Header from '../components/Header'
import { TaskContext } from '../context/TaskContext'
import Card from '../components/Card'


function AllTasks() {

    const { task } = useContext(TaskContext);
    console.log(task);

    return (
        <div>
            <Header />
            <h1 className='text-2xl font-bold mt-2'>All Tasks</h1>

            <section className='flex flex-wrap gap-4'>
                {
                    task.map(task => (
                        <Card key={task.id} task={task} />
                    ))
                }
            </section>


        </div>
    )
}

export default AllTasks