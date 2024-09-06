import prisma from "@/prisma/client";
import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(req: NextRequest, { params }: {
    params: { saveId: string }
}) {

    const { userId } = auth();

    if (!userId) {
        return NextResponse.json('Unauthorized', { status: 505 })
    }


    const existingSave = prisma.save.findUnique({
        where: {
            id: params.saveId
        }
    })

    if (!existingSave) {
        return NextResponse.json("Save Not Found", { status: 404 })
    }

    const deleteSave = await prisma.save.delete({
        where: {
            id: params.saveId
        }
    })

    return NextResponse.json('Save Deleted Successfully', { status: 201 })

}
