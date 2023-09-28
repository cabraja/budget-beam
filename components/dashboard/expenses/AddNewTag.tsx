'use client'
import {useState} from 'react';
import { HexColorPicker } from "react-colorful";
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
  FormControl,
  FormItem,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { z } from "zod";
import axios from 'axios';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

  export enum TYPE{
    EXPENSE = "expense",
    INCOME = "income"
  }
  
  interface AddNewTagProps{
    type:TYPE;
  }

  const form = z.object({
    label: z.string().min(1,{message:"Pick a name."}).max(24,{message: "Name cannot exceed 24 characters."}),
    color: z.string()
  });


function AddNewTag({type}:AddNewTagProps) {

    const [color, setColor] = useState("#1d42c5");
    const [label,setLabel] = useState("");
    const [error, setError] = useState("");
    const [disabled,setDisabled] = useState(false)
    const router = useRouter();

    const handleSubmit = () => {
      setError("");

      try {
          const values = {label:label,color:color};
          form.parse(values);
          const loading = toast.loading('Loading')

          axios.post(`/api/${type}Tags`,values)
            .then(res => {
              toast.success('Tag added')
            })
            .catch(err => {
              toast.error('Error occured, try again later')
            })
            .finally(() => {
              toast.dismiss(loading)
              setDisabled(false)
              setLabel("");
              router.refresh();
            })
          
          
      } catch (error:any) {
          if(label.length > 24){
              setError("Name cannot exceed 24 characters.")
          }else{
              setError("Enter a name.")
          }
      }

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

                <form className="space-y-8">
                    <FormItem>
                        <label>Name</label>
                        <FormControl>
                            <Input type='text' placeholder="Enter tag name" value={label} onChange={(e) => setLabel(e.target.value)}/>
                        </FormControl>
                        {
                            error && <p className='text-sm font-light text-destructive'>{error}</p>
                        }
                    </FormItem>

                    <FormItem>
                        <label>Color</label>
                        <HexColorPicker className='!w-full' color={color} onChange={setColor} />
                    </FormItem>

                    <div className='w-full flex flex-row justify-end'>
                      <Button disabled={disabled} type="button" onClick={() => handleSubmit()}>Submit</Button>
                    </div>
                </form>
            </DialogContent>
    </Dialog>

  )
}

export default AddNewTag