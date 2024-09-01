"use client"

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import React from 'react'
import { cn } from '@/lib/utils'
import { ModeToggle } from '@/components/modeToggle'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Menu, Plus } from 'lucide-react'
import {
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton
} from '@clerk/nextjs'
import { Button } from '@/components/ui/button'


const NavLinks = [
    { label: "Home", href: "/" },
    { label: "Share your story", href: "/story" },
    { label: "Browse my story", href: "/stories" }
]

const Navbar = () => {

    const pathname = usePathname()
    return (
        <nav className='py-5 fixed z-50 w-full bg-background'>
            <div className='flex max-w-7xl mx-auto px-5 items-center justify-between'>
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
                <div className='md:flex hidden items-center gap-x-3'>
                    {NavLinks.map(({ href, label }) => (
                        <Link key={href} href={href} className={
                            cn(
                                "text-sm text-muted-foreground hover:text-primary transition-colors", pathname === href && " text-primary font-semibold")}>
                            {label}
                        </Link>
                    ))}
                </div>
                <div className='flex items-center gap-x-4'>
                    <div className='flex items-center gap-x-2'>
                        <ModeToggle />
                    </div>
                    <SignedOut>
                        <div className='md:block hidden'>
                            <SignInButton mode='modal'>
                                <Button>
                                    Log In
                                </Button>
                            </SignInButton>
                        </div>
                    </SignedOut>
                    <SignedIn>
                        <Link href="/story">
                            <Button>
                                <Plus className='h-5 w-5 md:mx-2'></Plus>
                                <span className=' md:block hidden'>create a story</span>
                            </Button>
                        </Link>
                        <UserButton afterSignOutUrl='/'></UserButton>
                    </SignedIn>
                    <div className=' md:hidden block'>
                        <Sheet>
                            <SheetTrigger><Menu className='w-8 h-8' /></SheetTrigger>
                            <SheetContent>
                                <SheetHeader>
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
                                </SheetHeader>
                                <div className='flex flex-col items-start gap-y-3 my-10'>
                                    {NavLinks.map(({ href, label }) => (
                                        <Link key={href} href={href} className={
                                            cn(
                                                "text-sm text-muted-foreground hover:text-primary transition-colors", pathname === href && " text-primary font-semibold")}>
                                            {label}
                                        </Link>
                                    ))}
                                </div>
                                <SignedOut>
                                    <SignInButton mode='modal'>
                                        <Button>
                                            Log In
                                        </Button>
                                    </SignInButton>
                                </SignedOut>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </nav >
    )
}

export default Navbar