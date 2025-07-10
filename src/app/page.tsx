// src/app/page.tsx
import Link from "next/link"
import Image from "next/image"

export const metadata = {
  title: "Jacob Huber Endeavors",
  description:
    "Personal site of Jacob Huber – seasoned problem‑solver and versatile technologist with a passion for elegant, pragmatic solutions.",
}

export default function Home() { 
  return (
    <section className="mx-auto max-w-5xl px-6 py-12 space-y-24">
      {/* ---------- Hero ---------- */}
      <header className="flex flex-col items-center text-center gap-6">
        <Image
          src="/pfp.png"
          alt="Jacob Huber avatar"
          width={120}
          height={120}
          className="rounded-full border"
          priority
        />
        <h1 className="text-4xl font-bold">Jacob Huber</h1>
        <p className="max-w-xl text-muted-foreground">
          Software engineer and perpetual learner dedicated to turning ideas
          into clean, maintainable solutions—whether that&apos;s shipping production code,
          crafting game add‑ons, or leveling‑up small businesses.
        </p>
      </header>

      {/* ---------- Quick Links ---------- */}
      <div className="grid gap-6 md:grid-cols-2">
        <Link
          href="/simplelandscaping"
          className="group rounded-lg border p-6 hover:bg-accent transition-colors"
        >
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            Simple Landscaping
            <span className="inline-block transition-transform group-hover:translate-x-1">
              →
            </span>
          </h2>
          <p className="mt-2 text-muted-foreground">
            My side business offering thoughtful, dependable lawn care in St. Louis.
          </p>
        </Link>

        <Link
          href="/about"
          className="group rounded-lg border p-6 hover:bg-accent transition-colors"
        >
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            About
            <span className="inline-block transition-transform group-hover:translate-x-1">
              →
            </span>
          </h2>
          <p className="mt-2 text-muted-foreground">
            A snapshot of who I am—what I do, what I&apos;ve built, and what I value.
          </p>
        </Link>
      </div>
    </section>
  )
}
