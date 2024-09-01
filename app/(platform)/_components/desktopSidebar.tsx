"use client"
import React from 'react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Book, Heart, LayoutDashboard, Menu } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { NavLinks } from './mobileSidebar'



const DesktopSidebar = () => {

    const pathname = usePathname()
    return (
        <div className='md:flex hidden flex-col h-full border-r pr-5 space-y-2 w-64'>
            {NavLinks.map(({ href, label, icon: Icon }) => (
                <Link key={href} href={href} className={cn(
                    "h-10 px-4 py-2 flex items-center gap-x-2 rounded-md transition-colors duration-200 text-sm text-muted-foreground hover:text-primary-foreground font-medium", pathname.startsWith(href) && " text-primary-foreground bg-primary font-semibold")}>
                    <Icon className="h-5 w-5" /> {label}
                </Link>
            ))}
        </div>
    )
}

export default DesktopSidebar