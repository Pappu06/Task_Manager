import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { AuthContext } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'


function Login() {
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();
    const { user, setUser } = useContext(AuthContext);


    const onSubmit = (data) => {
        console.log(data);
        setUser(data);
        navigate('/');
    }

    return (
        <>
            <Header />
            <div className='flex flex-col items-center justify-center h-screen w-screen'>
                <h1 className='text-2xl font-bold'>Login Your Account</h1>
                <form className='flex flex-col gap-2' onSubmit={handleSubmit(onSubmit)}>
                    <input {...register('username')} type="text" placeholder='Username' className='border border-gray-300 p-2 rounded-xl' />
                    <input {...register('password')} type="password" placeholder='Password' className='border border-gray-300 p-2 rounded-xl' />
                    <button className='bg-blue-500 text-white p-2 rounded-xl cursor-pointer'>Login</button>
                    <Link to="/" className='text-center underline cursor-pointer hover:bg-gray-600 bg-gray-800 text-white p-2 rounded-xl'>Go to Home</Link>
                </form>
            </div>
        </>
    )
}

export default Login