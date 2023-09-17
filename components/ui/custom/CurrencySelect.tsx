"use client"

import * as React from "react"
import { Check} from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandGroup,
  CommandItem,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const currencies = [
  {
    value: "USD",
    label: "USD($)",
  },
  {
    value: "EUR",
    label: "EUR(€)",
  },
  {
    value: "JPY",
    label: "JPY(¥)",
  },
]

export default function CurrencySelect() {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("USD")

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[100px] justify-between"
        >
          {value
            ? currencies.find(curr => curr.value === value)?.label
            : "Currency"}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[120px] p-0">
        <Command>
          <CommandGroup>
            {currencies.map((currency) => (
              <CommandItem
                key={currency.value}
                onSelect={(currentValue) => {
                    setValue(currency.value)
                    setOpen(false)
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === currency.value ? "opacity-100" : "opacity-0"
                  )}
                />
                {currency.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
