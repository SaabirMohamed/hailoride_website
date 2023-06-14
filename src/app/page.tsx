"use client";
import Image from 'next/image'
// connect to appwrite
import { AppwriteException, Account, Client, Databases, Storage } from 'appwrite'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation';
import { on } from 'events';


const client = new Client()
const account = new Account(client)
const database = new Databases(client)
const storage = new Storage(client)


// connect to appwrite
export default function Home() {
  const [userId, setUserId] = useState("")
  const router = useRouter();
  useEffect(() => {
    account.get().then((response) => {
      if (response) {
        console.log(response.$id)
        setUserId(response.$id)
        router.push('/dashboard')
      }
    }).catch((error: AppwriteException) => {
      console.log(error.message)
      setUserId("");
    })


  }, [router, setUserId]);
  async function _showLogin() {
    try {
      router.push('/login')

    } catch (error) {
      console.log(error)
    }
  }
  return (
    <main className='p-10 flex-col text-center justify-center items-center content-center h-full'>
      <div className='mt-2'><h1 className='text-5xl text-amber-400'>HailoRide</h1></div>
      <div className='mt-2' >
        {userId ? <p className='p-5 text-2xl text-amber-400'>Welcome {userId}</p> : <button onClick={() => _showLogin()} className='hover:text-white px-5 py-2  rounded-lg text-6xl text-amber-400'>🚧</button>}
      </div>

    </main>
  )
}
