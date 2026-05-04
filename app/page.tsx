// next.config.ts rewrites `/` to `/landing.html` (served from public/).
// This file exists only so Next.js builds; rewrites intercept before this renders.
export default function Page() {
  return null
}
