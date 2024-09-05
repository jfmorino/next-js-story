import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
    return (
        <footer className='max-w-7xl p-5 z-50 mx-auto flex items-center flex-wrap md:justify-between justify-center md:space-y-0 space-y-3'>

            <Image
                src="/logo-black.svg"
                alt='logo'
                width={100}
                height={100}
                className='dark:hidden'
            />
            <Image
                src="/logo-white.svg"
                alt='logo'
                width={100}
                height={100}
                className='dark:block hidden'
            />
            <div className='flex flex-wrap items-center gap-2'>
                <Button variant={"link"}>Privacy</Button>
                <Button variant={"link"}>Terms of Service</Button>

            </div>
        </footer>
    )
}

export default Footer