import prisma from '@/prisma/client';
import { auth } from '@clerk/nextjs/server'
import React from 'react'

const SavesPage = async () => {

    const { userId } = auth();

    const save = await prisma.save
    return (
        <div>SavesPage</div>
    )
}

export default SavesPage