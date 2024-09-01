"use client";
import { ModeToggle } from '@/components/modeToggle';
import { Button } from '@/components/ui/button';
import { UserButton, useUser } from '@clerk/nextjs';
import { ArrowBigLeft } from 'lucide-react';
import Link from 'next/link';
import React from 'react'
import MobileSideBar from './mobileSidebar';


const Header = () => {
    const { user } = useUser()
    if (!user) return null
    return (
        <header className='flex py-5 items-center justify-between w-full'>
            <h1 className='md:block hidden font-medium'>Welcome back 👋, {user?.fullName}</h1>
            <MobileSideBar />
            <div className='flex items-center gap-x-2'>
                <Link href="/">
                    <Button variant={"ghost"}>
                        <ArrowBigLeft className=' text-muted-foreground h-5 w-5 md:mr-2' />
                        <span className='md:block hidden'>Back To Home</span>
                    </Button>
                </Link>
                <ModeToggle />
                <UserButton afterSignOutUrl='/' />
            </div>
        </header>
    )
}

export default Header