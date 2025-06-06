import { shadow } from '@/styles/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Header() {

    const user = null;

    return (
        <header className='relative flex h-24 w-full items-center justify-between bg-popover px-3 sm:px-8' style={{boxShadow: shadow}}>
            <Link className='flex items-end gap-2' href="/">
                <Image 
                    src="/goatius.png"
                    height={60}
                    width={60}
                    alt='logo'
                    className='rounded-full'
                    priority
                />
                <h1 className='flex flex-col pb-1 text-2xl font-semibold leading-6'>
                    GOAT <span>Notes</span>
                </h1>
            </Link>
            <div className='flex gap-4'>
                {user ? (
                    "Logout"
                ): 
                    <></>
                }
            </div>
        </header>
    )
}

export default Header