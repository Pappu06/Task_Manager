import React, { useContext } from 'react'
import Header from '../components/Header'
import { AuthContext } from '../context/AuthContext'

function Home() {
    const { user } = useContext(AuthContext);

    return (
        <>
            <Header />
            <h1 className='text-4xl font-bold text-center mt-4'>Welcome {user?.username} to Task Manager</h1>


        </>
    )
}

export default Home