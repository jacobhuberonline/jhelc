// /src/app/about/page.tsx

import Image from "next/image";
import { Separator } from "@/components/ui/separator";

// Optional: if you prefer the helper, re‑enable it
// import { generatePageMetadata } from "@/utils/metadata";
// export async function generateMetadata() {
//   return generatePageMetadata({
//     title: "About Jacob Huber | Developer & Entrepreneur",
//     description:
//       "Get to know Jacob Huber—software engineer, property manager, landscaper, and soon‑to‑be dad.",
//     image: "/pfp.png",
//   });
// }

// Or use the App Router metadata export
export const metadata = {
  title: "About Jacob Huber | Developer & Entrepreneur",
  description:
    "Get to know Jacob Huber—software engineer, property manager, landscaper, and soon‑to‑be dad.",
  openGraph: {
    images: ["/pfp.png"],
  },
};

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Jacob Huber",
    url: "https://jacobhuber.me/about",
    image: "https://jacobhuber.me/pfp.png",
    jobTitle: "Software Engineer, Entrepreneur, Landscaper",
    description:
      "Versatile professional passionate about technology, property management, and outdoor work.",
    worksFor: { "@type": "Organization", name: "symplr" },
    sameAs: [
      "https://github.com/jacobhuber",
      "https://twitter.com/jacobhuber",
    ],
  };

  return (
    <section className="mx-auto max-w-4xl p-8 space-y-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <div className="flex flex-col items-center text-center space-y-4">
        <Image
          src="/pfp.png"
          alt="Jacob Huber"
          width={144}
          height={144}
          className="rounded-full"
          priority
        />
        <h1 className="text-5xl font-extrabold">Jacob Huber</h1>
        <p className="text-xl text-muted-foreground max-w-xl">
          Curious mind balancing code, property, and family life.
        </p>
      </div>

      <Separator />

      {/* About Me */}
      <h2
        id="journey-heading"
        className="text-3xl font-semibold border-b-2 border-primary pb-2"
      >
        About Me
      </h2>

      <p className="text-lg leading-relaxed">
        I split my weekdays between building data‑driven solutions at <strong>symplr</strong> and tinkering with side projects in blockchain and gaming.
      </p>

      <p className="text-lg leading-relaxed">
        Away from the screen, my wife and I oversee a handful of rental properties. I also started <em>Simple Landscaping</em> so I could trade a keyboard for a weedwacker now and then.
      </p>

      <p className="text-lg leading-relaxed">
        I keep an eye on the stock and crypto markets and dip into philosophy to stay sharp.
      </p>

      <p className="text-lg leading-relaxed">
        Evenings wind down with <em>World of Warcraft Classic</em> or a good hockey game—simple ways to recharge.
      </p>

      <p className="text-lg leading-relaxed">
        My wife and I are travelers at heart and thrilled to welcome our son, Francis, on&nbsp;July&nbsp;27&nbsp;2025. Fatherhood is the next big quest, and I&apos;m eager for what comes next.
      </p>
    </section>
  );
}