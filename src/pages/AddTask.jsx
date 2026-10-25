import { useContext } from 'react'
import Header from '../components/Header'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { TaskContext } from '../context/TaskContext'


function AddTask() {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

    const { addTask } = useContext(TaskContext);

    const onSubmit = (data) => {
        console.log(data);
        addTask(data);
        navigate('/alltasks');
    }
    return (
        <div>
            <Header />
            <div className='flex flex-col items-center justify-center mt-4'>
                <h1 className='text-2xl font-bold'>Add Task</h1>
                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4 w-1/2 mt-4'>
                    <input type="text" placeholder='Title' {...register('title')} className='border justify-center items-center     border-gray-300 p-2 rounded-xl w-100' />
                    <input type="text" placeholder='Description' {...register('description')} className='border justify-center items-center border-gray-300 p-2 rounded-xl w-100' />
                    <select {...register('priority')} className='border justify-center items-center border-gray-300 p-2 rounded-xl w-100'>
                        <option value="">Select Priority</option>
                        <option value="high">High</option>
                        <option value="medium">Medium</option>
                        <option value="low">Low</option>
                    </select>
                    <select {...register('status')} className='border justify-center items-center border-gray-300 p-2 rounded-xl w-100'>
                        <option value="">Select Status</option>
                        <option value="pending">Pending</option>
                        <option value="completed">Completed</option>
                    </select>
                    <button type='submit' className='bg-blue-500 text-white p-2 rounded-xl cursor-pointer'>Add Task</button>
                </form>
            </div>
        </div>
    )
}

export default AddTask