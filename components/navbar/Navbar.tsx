'use client'

import React from 'react'
import { ThemeSwitch } from '../ui/theme-switch'
import Link from 'next/link'
import Image from 'next/image'
import icon from '@/app/icon.svg'
import { UserButton } from "@clerk/nextjs"
import { useAuth } from '@clerk/nextjs'
function Navbar() {

  const {userId} = useAuth()

  return (
    <header className='w-full flex flex-row items-center justify-between md:px-8 px-2 py-3'>
        <div className='flex flex-row items-center gap-x-4 lg:gap-x-10'>
            <div className='flex flex-row items-center'>
                <Image src={icon} width={38} alt='BudgetBeam Logo' className='-mt-1 me-1'/>
                <h1 className='font-bold text-base md:text-2xl'>BudgetBeam</h1>
            </div>

            {
              userId && (
                <nav className='flex flex-row items-center gap-x-3 rounded-lg border-0 lg:border px-0 lg:px-3 py-1'>
                  <p className='hidden lg:block text-sm text-muted-foreground font-medium transition-colors hover:text-primary'>Your account</p>
                  <UserButton afterSignOutUrl='/'/>
                </nav>
              )
            }
        </div>
        <ThemeSwitch />
    </header>
  )
}

export default Navbar