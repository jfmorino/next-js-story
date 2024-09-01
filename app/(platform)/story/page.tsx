import { Button } from '@/components/ui/button'
import { Separator } from '@radix-ui/react-dropdown-menu'
import { Plus } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const StoryPage = () => {
    return (
        <div className=' flex flex-col space-y-5 w-full'>
            <div className=' flex items-center justify-between'>
                <h1 className=' font-semibold'>My Stories</h1>
                <Link href="/story/new">
                    <Button>
                        <Plus className=' mr-2 h-5 w-5' />
                        Create New Story
                    </Button>
                </Link>
            </div>
            <Separator />
            data-table
        </div>

    )
}

export default StoryPage