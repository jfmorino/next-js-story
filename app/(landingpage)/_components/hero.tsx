import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
    return (
        <section className='flex flex-col justify-center items-center py-32 text-center space-y-3 min-h-full px-5'>

            <h2 className=' text-sm font-medium'>Welcome to Storycareer</h2>
            <h1 className='text-3xl md:text-5xl font-bold max-w-3xl'>Discover and Share Inspiring Career Journeys</h1>
            <p className=' max-w-lg text-muted-foreground'>
                StoryCareer is an unique platform where individuals from all walks of life
                can share their career stories, challenges, and successes.
                Whether you&apos;re just starting out.
            </p>
            <Link href="/stories">
                <Button>
                    Discover people stories
                </Button>
            </Link>
            <Image
                src="/reading.svg"
                alt='reading'
                width={700}
                height={700}
            />
        </section>
    )
}

export default Hero