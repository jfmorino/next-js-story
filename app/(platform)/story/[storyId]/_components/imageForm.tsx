"use client"

import Image from 'next/image'
import { Story } from '@prisma/client';
import React, { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { Ghost, Loader, Pencil, ImageIcon, PlusCircle } from "lucide-react";
import axios from 'axios'
import { toast } from 'sonner';
import { Button } from "@/components/ui/button";
import FileUploader from '@/components/fileUploader';

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from '@/components/ui/textarea';
import { stat } from 'fs';

const formSchema = z.object({
    story: z
        .string()
        .min(30, {
            message: "Image is required !",
        })
        .max(5000),
});

interface Props {
    initialData: Story
}

const ImageForm = ({ initialData }: Props) => {

    const router = useRouter();
    const [isEditing, setIsEditing] = useState(false)
    const toggleEdit = () => setIsEditing((current) => !current)

    const onSubmit = async (image: { image: string }) => {
        try {
            const res = await axios.patch(`/api/story/${initialData.id}`, image)

            if (res.status === 201) {
                toast("Story updated", {
                    className: "text-emerald-500 text-white"
                })
                toggleEdit()
                router.refresh()
            }
        } catch (error) {
            toast("Something went wrong", {
                className: "bg-rose-500 text-white"
            })

        }
    }

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            story: initialData.story || "",
        },
    });



    return (
        <div className='border border-secondary rounded-md p-4 bg-secondary w-80'>
            <div className=' flex items-center justify-between font-medium text-primary'>
                Image
                <Button variant={"ghost"}
                    type='button'
                    onClick={toggleEdit}
                >
                    {isEditing && <>Cancel</>}
                    {!isEditing && !initialData.image && (
                        <>
                            <PlusCircle className='h-4 w-4 mr-2' />
                            Add image
                        </>
                    )}
                    {!isEditing && initialData.image && (
                        <>
                            <Pencil className='h-4 w-4 mr-2' />
                            Edit image
                        </>
                    )}
                </Button>
            </div>
            {!isEditing && (
                !initialData.image ? (
                    <div className=' h-60 border-2 border-gray-300 rounded-md flex items-center justify-center'>
                        <ImageIcon />
                    </div>
                ) : (
                    <div className='relative aspect-video mt-2'>
                        <Image
                            src={initialData.image}
                            alt={initialData.title}
                            fill
                            className='rounded-md object-cover'
                        />
                    </div>
                ))
            }
            {isEditing && (
                <>
                    <FileUploader
                        endPoint='storyImage'
                        onChange={(url) => {
                            if (url) {
                                onSubmit({ image: url })
                            }
                        }} />
                    <p className='text-xs text-gray-400 text-muted-foreground mt-4'>16:9 recommended aspect ratio</p>
                </>
            )

            }
        </div>
    )


}
export default ImageForm