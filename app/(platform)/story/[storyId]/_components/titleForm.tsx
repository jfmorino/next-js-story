"use client"

import { Story } from '@prisma/client'
import React, { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useAuth } from "@clerk/nextjs";
import { Ghost, Loader, Pencil } from "lucide-react";
import axios from 'axios'
import { toast } from 'sonner'

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
    title: z
        .string()
        .min(10, {
            message: "Title is required !",
        })
        .max(5000),
});

interface Props {
    initialData: Story
}

const TitleForm = ({ initialData }: Props) => {

    const router = useRouter();
    const [isEditing, setIsEditing] = useState(false)
    const [isSubmitting, setIsSubmitting] = React.useState(false);

    const toggleEdit = () => setIsEditing((current) => !current)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: initialData.title || "",
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            setIsSubmitting(true)
            toast("Story is updating...")

            const res = await axios.patch(`/api/story/${initialData.id}`, {
                ...values,
            })

            if (res.status === 201) {
                toast("Story is Updated", {
                    className: "bg-emerald-500 text-white"
                })
                toggleEdit()
                router.refresh()
            }
        } catch (error) {
            toast("Something went wrong", {
                className: "bg-rose-500 text-white"
            })
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div className='border border-secondary rounded-md p-4 bg-secondary w-80'>
            <div className=' flex items-center justify-between font-medium text-primary'>
                Title
                <Button variant={"ghost"}
                    type='button'
                    onClick={toggleEdit}
                >
                    {isEditing ? (
                        <>Cancel</>
                    ) : (
                        <>
                            <Pencil className='w-4  h-4 mr-2' />
                            Edit title
                        </>
                    )}
                </Button>
            </div>
            <div>
                {!isEditing ? (
                    <p className='text-sm mr-2 text-primary'>
                        {initialData.title}
                    </p>
                ) : (
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                            <FormField
                                control={form.control}
                                name="title"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input
                                                placeholder="(ex: The day i deployed my first project)"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button disabled={isSubmitting} type="submit">
                                {isSubmitting && <Loader className="mr-2 w-5 h-5 animate-spin" />}
                                Update
                            </Button>
                        </form>
                    </Form>
                )}
            </div>
        </div>
    )
}

export default TitleForm