"use client"
import Image from 'next/image'
import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Menu, LayoutDashboard, Book, Heart } from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import {
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton
} from '@clerk/nextjs'
import { Button } from '@/components/ui/button'
import { usePathname } from 'next/navigation'

const NavLinks = [
    { label: "My story", href: "/story", icon: Book },
    { label: "My saves", href: "/saves", icon: Heart }
]

const MobileSideBar = () => {
    const pathname = usePathname()
    return (
        <div className=' md:hidden block'>
            <Sheet>
                <SheetTrigger><Menu className='w-6 h-6' /></SheetTrigger>
                <SheetContent className=' p-12 space-y-2' side="left">
                    <div className='flex flex-col items-start gap-y-3 my-10'>
                        {NavLinks.map(({ href, label, icon: Icon }) => (
                            <Link key={href} href={href} className={
                                cn(
                                    " h-10 px-4 py-2 flex items-center gap-x-2 rounded-md transition-colors duration-200 text-sm text-muted-foreground hover:text-primary-foreground font-medium", pathname.startsWith(href) && " text-primary-foreground bg-primary font-semibold")}>
                                <Icon className="h-5 w-5" /> {label}
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
    )
}

export default MobileSideBar