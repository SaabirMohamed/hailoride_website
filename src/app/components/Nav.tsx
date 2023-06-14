import Link from 'next/link'
import React from 'react'

type Props = {}

const Nav = (props: Props) => {
    return (
        <nav>
            <div className='border-b border-b-white  flex fixed p-2 w-full  uppercase'>
                <div className='flex items-center justify-center'>
                    {/* create a section for the logo */}
                    <h1 className=' text-sm tracking-wider text-amber-400'>HailoRide</h1>

                </div>
                {/* create <link tags section*/}
                <div className='flex w-full justify-evenly items-center'>
                    <div>
                        <Link href={"/"}>
                            <span>home</span>
                        </Link>
                    </div>
                    <div>
                        <Link href={"/platforms"}>
                            <span>platforms</span>
                        </Link>
                    </div>
                    <div>
                        <Link href={"/login"}>
                            <span>login</span>
                        </Link>
                    </div>
                    <div>
                        <Link href={"/contact"}>
                            <span>contact</span>
                        </Link>
                    </div>
                    <div>
                        <Link href={"/about"}>
                            <span>about</span>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav