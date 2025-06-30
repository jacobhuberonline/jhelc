// src/app/drinkwalktimer/page.tsx
import Link from "next/link"

export const metadata = {
  title: "DrinkWalkTimer – WoW Addon",
  description:
    "Light-weight World of Warcraft Classic addon that tracks the 5-second mana-regeneration timer while you move (drink-walking).",
}

export default function DrinkWalkTimerPage() {
  return (
    <section className="mx-auto max-w-3xl space-y-6 p-6">
      <header>
        <h1 className="text-3xl font-semibold">DrinkWalkTimer</h1>
        <p className="mt-2 text-muted-foreground">
          A minimalist addon for World of Warcraft Classic that shows exactly
          when you can start moving while drinking without cancelling the
          5-second mana-regen rule.
        </p>
      </header>

      <div className="space-y-4">
        <h2 className="text-xl font-medium">Key Features</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Ultra-lightweight — negligible performance impact.</li>
          <li>Clean timer bar appears only while drinking.</li>
          <li>Works with every class and all drink items.</li>
        </ul>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-medium">Installation</h2>
        <ol className="list-decimal pl-6 space-y-1">
          <li>
            Download the latest zip from&nbsp;
            <Link
              href="https://www.curseforge.com/wow/addons/drinkwalktimer"
              target="_blank"
              className="underline underline-offset-4 hover:text-primary"
            >
              CurseForge
            </Link>
            .
          </li>
          <li>
            Extract the folder into&nbsp;
            <code>_classic_/Interface/AddOns</code>.
          </li>
          <li>Restart WoW or type <kbd>/reload</kbd> in-game.</li>
        </ol>
      </div>
    </section>
  )
}