import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

// <nav className='py-5 fixed z-50 w-full bg-background'>

{/* <div style={{ position: "absolute", bottom: 0, width: "100%" }} className="bg-gray-100">
    <div className="bg-gray-100 container mx-auto px-6 pt-10 pb-6">
          > © Oracle Corp. All rights reserved.
    </div>
</div> */}

const Footer = () => {
    return (
        <footer style={{ position: "relative", bottom: 0, width: "100%", marginTop: "auto" }} className=''>
            <div className='container mx-auto px-6 pt-10 pb-6 flex items-center flex-wrap md:justify-between justify-center md:space-y-0 space-y-3'>


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
            </div>


        </footer>
    )
}

export default Footer