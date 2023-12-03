"use client"

import * as React from "react"
import { Check} from "lucide-react"
import {currencies, useCurrencyStore } from "@/app/hooks/useCurrency"
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

export default function CurrencySelect() {
  const [open, setOpen] = React.useState(false);
  const {currency,onChange} = useCurrencyStore();
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[100px] justify-between"
        >
          {currency !== null
            ? `${currencies[currency.id].name} (${currencies[currency.id].label})`
            : "Currency"}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[120px] p-0">
        <Command>
          <CommandGroup>
            {currencies.map((curr) => (
              <CommandItem
                key={curr.name}
                onSelect={(currentValue) => {
                    onChange(curr.id)
                    setOpen(false)
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    curr.id === currency.id ? "opacity-100" : "opacity-0"
                  )}
                />
                <span className="mr-1">{curr.name}</span>({curr.label})
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
