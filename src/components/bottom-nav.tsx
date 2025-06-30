"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  SiX,
  SiLinkedin,
  SiGithub,
  SiDiscord,
} from "react-icons/si"
import { ModeToggle } from "./ui/mode-toggle"

function BrandIcon({ Icon }: { Icon: React.ElementType }) {
  return (
    <Icon className="size-5 fill-current transition-transform group-hover:scale-110" />
  )
}

export function BottomNav() {
  return (
    <footer className="w-full border-t py-6 px-4 lg:px-0">
      {/* mobile: stacked; lg: flex */}
      <div className="mx-auto max-w-5xl px-4 flex flex-col items-center gap-6 lg:flex-row lg:justify-between">
        {/* socials */}
        <nav className="flex gap-6">
          <Link href="https://x.com/jacobhuberonlin" target="_blank" className="group">
            <BrandIcon Icon={SiX} />
          </Link>
          <Link href="https://linkedin.com/in/jacob-huber" target="_blank" className="group">
            <BrandIcon Icon={SiLinkedin} />
          </Link>
          <Link href="https://github.com/jacobhuberonline" target="_blank" className="group">
            <BrandIcon Icon={SiGithub} />
          </Link>
          <Link href="https://discord.gg/gKxvUjRpvw" target="_blank" className="group">
            <BrandIcon Icon={SiDiscord} />
          </Link>
        </nav>

        {/* copyright */}
        <p className="text-sm text-muted-foreground text-center">
          © 2024 - {new Date().getFullYear()} Jacob Huber Endeavors LC
        </p>

        {/* language pill + theme toggle */}
        <div className="flex items-center gap-2">
          <Button variant="outline" className="rounded-sm px-4 py-1 h-8">
            English <span className="text-muted-foreground ml-1">US</span>
          </Button>
          <ModeToggle />
        </div>
      </div>
    </footer>
  )
}
