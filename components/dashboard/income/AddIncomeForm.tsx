"use client";

import * as z from "zod";
import axios from "axios";
import toast from "react-hot-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Check, ChevronsUpDown } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { TagSelect } from "@/app/types";
import { useRouter } from "next/navigation";
import AddNewTag from "../expenses/AddNewTag";
import { TYPE } from "@/components/dashboard/expenses/AddNewTag";
import { formatCurrency, formatCurrencyForInput } from "@/lib/formatCurrency";
import { CurrencyName, useCurrencyStore } from "@/app/hooks/useCurrency";
import { Rates } from "@/app/actions/getRates";

const formSchema = z.object({
  amount: z.coerce
    .number()
    .positive({
      message: "Must be a positive number.",
    })
    .or(z.string()),
  date: z.date({
    required_error: "Select a date and time",
    invalid_type_error: "That's not a date!",
  }),
  tag: z
    .number({
      required_error: "Select a tag",
    })
    .positive({
      message: "Must select a tag",
    }),
});

function AddIncomeForm({ tags, rates }: { tags: TagSelect[]; rates: Rates }) {
  const router = useRouter();
  const [disabled, setDisabled] = useState(false);
  const { currency } = useCurrencyStore();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      amount: "",
      date: new Date(),
      tag: 0,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setDisabled(true);
    const loading = toast.loading("Loading");
    form.reset({
      amount: "",
      date: new Date(),
      tag: 0,
    });

    axios
      .post("/api/income", {
        ...values,
        amount: formatCurrencyForInput(+values.amount, currency.name, rates),
      })
      .then((res) => {
        toast.success("Income added");
      })
      .catch((err) => {
        toast.error("Error occured, try again later");
      })
      .finally(() => {
        toast.dismiss(loading);
        setDisabled(false);
        router.refresh();
      });
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="amount"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Amount ({currency.label})</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="Enter amount" {...field} />
                </FormControl>
                <FormDescription>Enter the amount.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="tag"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Tag</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant="outline"
                        role="combobox"
                        className={cn(
                          "w-full justify-between",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value
                          ? tags.find((tag) => tag.value === field.value)?.label
                          : "Select a tag"}
                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-full p-0">
                    <Command>
                      <CommandInput placeholder="Search tags..." />
                      <CommandEmpty>No tags found.</CommandEmpty>
                      <CommandGroup>
                        {tags.map((tag) => (
                          <CommandItem
                            value={tag.label}
                            key={tag.value}
                            onSelect={() => {
                              form.setValue("tag", tag.value);
                            }}
                          >
                            <Check
                              className={cn(
                                "mr-2 h-4 w-4",
                                tag.value === field.value
                                  ? "opacity-100"
                                  : "opacity-0"
                              )}
                            />
                            <div
                              className="rounded-full w-[10px] h-[10px] me-4"
                              style={{ backgroundColor: tag.color }}
                            ></div>{" "}
                            {tag.label}
                          </CommandItem>
                        ))}
                        <CommandItem>
                          <AddNewTag type={TYPE.INCOME} />
                        </CommandItem>
                      </CommandGroup>
                    </Command>
                  </PopoverContent>
                </Popover>
                <FormDescription>Select a tag.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Date</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-[240px] pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormDescription>Select a date of the income.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button disabled={disabled} type="submit">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
}

export default AddIncomeForm;
