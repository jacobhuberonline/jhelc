// middleware.ts
// Clerk middleware currently passive — no routes are protected.
// You can re‑enable protection later by adding auth.protect() as needed.

import { clerkMiddleware } from "@clerk/nextjs/server"

export default clerkMiddleware()

export const config = {
  // Run on all requests so Clerk can inject client-side helpers,
  // but nothing is blocked.
  matcher: ["/((?!_next/|favicon.ico).*)"],
}