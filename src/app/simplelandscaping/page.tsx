// src/app/simplelandscaping/page.tsx
import Image from "next/image";
import ContactForm from "../../components/ContactForm";

export const metadata = {
  title: "Lawn Care Services in St. Louis | Simple Landscaping",
  description:
    "Reliable, professional lawn care and yard maintenance services in Lafayette Square and surrounding St. Louis neighborhoods. Get a free quote today!",
  openGraph: {
    images: [
      {
        url: "/ParkFront.jpeg",
        width: 1200,
        height: 600,
        alt: "Beautifully maintained lawns in St. Louis by Simple Landscaping",
      },
    ],
  },
};

export default function SimpleLandscapingPage() {
  return (
    <section className="mx-auto max-w-3xl space-y-8 p-6">
      <Image
        src="/ParkFront.jpeg"
        alt="Simple Landscaping"
        width={1200}
        height={600}
        className="rounded-lg object-cover mx-auto"
      />
      <header className="text-center space-y-3">
        <h1 className="text-4xl font-bold tracking-tight">Professional Lawn Care in St. Louis</h1>
        <p className="text-muted-foreground max-w-prose mx-auto">
          Simple Landscaping provides reliable lawn care and alleyway cleanup services in Lafayette Square and nearby neighborhoods in St. Louis—handled with friendly, attentive service.
        </p>
      </header>

      {/* Showcase Images */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="relative w-full aspect-[4/3]">
          <Image
            src="/ParkSide.jpeg"
            alt="Alleyway cleanup services in St. Louis"
            fill
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative w-full aspect-[4/3]">
          <Image
            src="/ParkBackFront.jpeg"
            alt="Professionally maintained lawn in St. Louis"
            fill
            className="rounded-lg object-cover"
            />
        </div>
        <div className="relative w-full aspect-[4/3]">
          <Image
            src="/ParkBackBack.jpeg"
            alt="Lawn care and garden cleanup in Lafayette Square"
            fill
            className="rounded-lg object-cover"
          />
        </div>
      </div>

      {/* Services */}
      <div className="space-y-4">
        <h2 className="text-xl font-medium">Lawn Care & Landscaping Services in St. Louis</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Lawn mowing, edging, and precision trimming</li>
          <li>Hedge and shrub shaping for curb appeal</li>
          <li>Garden-bed clean-ups and weed control</li>
          <li>Seasonal leaf removal and yard refreshes</li>
          <li>Alleyway debris and litter cleanup services</li>
        </ul>
      </div>

      {/* Process */}
      <div className="space-y-4">
        <h2 className="text-xl font-medium">How It Works</h2>
        <ol className="list-decimal pl-6 space-y-1">
          <li>Fill out the quick form below.</li>
          <li>We&apos;ll discuss details via your preferred contact method.</li>
          <li>Sit back, relax, and enjoy your refreshed outdoor space.</li>
        </ol>
      </div>

      {/* Call‑to‑action */}
      <div className="space-y-2">
        <h2 className="text-xl font-medium">Get in Touch</h2>
        <p>
          Fill out the quick form below and I&rsquo;ll get back to you promptly with a free,
          no‑pressure quote.
        </p>
        {/* Quick contact form */}
        <ContactForm />
      </div>
    </section>
  )
}