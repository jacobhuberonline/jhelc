"use client"
import Link from "next/link"
import * as React from "react"
import { NavigationMenu } from "@/components/ui/navigation-menu"
// import { ModeToggle } from "./ui/mode-toggle"
import { SidebarTrigger } from "@/components/ui/sidebar"
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
import { Button } from "@/components/ui/button"

export function TopNav() {
  return (
    <NavigationMenu className="flex items-center justify-between w-full max-w-none bg-background/70 backdrop-blur-md px-6 py-4">
      {/* Left cluster: logo + sidebar toggle */}
      <div className="flex items-center gap-2">
        <Link href="/" className="text-xl font-semibold">
          JHE
        </Link>
        <SidebarTrigger />
        <div className="flex items-center gap-4">
          <Link href="/about" className="text-sm font-medium">About</Link>
        </div>
      </div>

      {/* Right cluster: auth & theme */}
      <div className="flex items-center gap-4">
        <SignedOut>
          <div className="flex items-center gap-2">
            <SignInButton mode="modal">
              <Button variant="outline" size="sm">
                Sign in
              </Button>
            </SignInButton>
            <SignUpButton mode="modal">
              <Button size="sm">Sign up</Button>
            </SignUpButton>
          </div>
        </SignedOut>

        <SignedIn>
          <UserButton />
        </SignedIn>

        {/* <ModeToggle /> */}
      </div>
    </NavigationMenu>
  )
}