'use client'

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form"
  import { zodResolver } from "@hookform/resolvers/zod"
  import * as z from 'zod'

  export enum TYPE{
    EXPENSE = "expense",
    INCOME = "income"
  }
  
  interface AddNewTagProps{
    type:TYPE;
  }

  const formSchema = z.object({
    label: z.string().max(20,{message: "Tag name cannot exceed 20 characters."}),
    color:z.string()
  })

function AddNewTag({type}:AddNewTagProps) {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          label: "",
          color: '#000'
        },
      })

      function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
      }

  return (
    <Dialog>
        <DialogTrigger className="underline px-6">Add new tag</DialogTrigger>
            <DialogContent>
                <DialogHeader>
                <DialogTitle>Create an {type} tag</DialogTitle>
                <DialogDescription>
                    Choose a name for your new tag and pick a color.
                </DialogDescription>
                </DialogHeader>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <FormField
                        control={form.control}
                        name="label"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                                <Input placeholder="shadcn" {...field} />
                            </FormControl>
                            <FormDescription>
                                
                            </FormDescription>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                        <Button type="submit">Submit</Button>
                    </form>
                </Form>
            </DialogContent>
    </Dialog>

  )
}

export default AddNewTag