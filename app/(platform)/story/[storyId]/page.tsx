import { Button } from '@/components/ui/button'
import prisma from '@/prisma/client'
import { auth } from '@clerk/nextjs/server'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import React from 'react'
import TitleForm from './_components/titleForm'
import StoryForm from './_components/storyForm'
import ImageForm from './_components/imageForm'

const EditStoryPage = async ({ params }: {
    params: { storyId: string }
}) => {

    const { userId } = auth();

    if (!userId) return null

    const story = await prisma.story.findUnique({
        where: {
            id: params.storyId,
            userId: userId!
        }
    })

    if (!story) redirect('/story')

    return (
        <div className='flex justify-center items-center h-full w-full'>
            <div className=' flex flex-col space-y-3'>
                <div>
                    <h1 className=' text-2xl font-semibold'>Edit your story</h1>
                    <p className=' text-sm text-muted-foreground'>Update your title, story and image</p>
                </div>
                <TitleForm initialData={story} />
                <StoryForm initialData={story} />
                <ImageForm initialData={story} />

                <Link href="/story">
                    <Button variant={"link"}>
                        Back to my stories
                    </Button>
                </Link>
            </div>
        </div>
    )
}

export default EditStoryPage