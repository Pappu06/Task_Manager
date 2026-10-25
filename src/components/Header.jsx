import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
function Header() {

    let { user, setUser } = useContext(AuthContext);

    return (
        <div className='px-5 py-3 flex item-center justify-between bg-gray-800 text-white shadow'>
            <h1 className='font-semibold text-2xl'>TASK MANAGER</h1>
            {
                user && (
                    <nav>
                        <ul className='flex gap-4'>
                            <li><Link to='/' className='bg-blue-500 text-white p-2 rounded-xl'>Home</Link></li>
                            <li><Link to='/addtask' className='bg-blue-500 text-white p-2 rounded-xl'>Add Tasks</Link></li>
                            <li><Link to='/alltasks' className='bg-blue-500 text-white p-2 rounded-xl'>Show Tasks</Link></li>
                            <li><button className='bg-red-500 text-white p-2 rounded-xl' onClick={() => setUser(null)}>Logout</button></li>
                        </ul>
                    </nav>
                )
            }
            {
                !user && (
                    <div className='flex gap-2'>
                        <Link to='/login' className='bg-blue-500 text-white p-2 rounded-xl'>Login</Link>
                    </div>
                )
            }
        </div>
    )
}

export default Header