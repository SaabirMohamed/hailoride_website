import React from 'react'

type Props = {}

const Login = (props: Props) => {
    return (
        // create alogin form in the center of the page
        <div className='flex justify-center items-center h-screen'>
            <div className='flex flex-col justify-center items-center'>
                <h1 className='text-5xl text-amber-400 p-2'>Login to HailoRide</h1>
                <form className='flex flex-col justify-center items-center'>
                    <input className='border border-black p-5 text-black rounded-lg  m-2' type="text" placeholder='username' />
                    <input className='border border-black p-5 text-black rounded-lg m-2' type="password" placeholder='password' />
                    <button className='hover:text-black px-5 m-2 py-2 border border-amber-400 rounded-lg text-2xl text-amber-400'>Login</button>
                    <p className='text-white'>
                        <span>restricted access</span> <a className='text-white' href="/signup">.</a>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default Login