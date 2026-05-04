# dabwith.me — brand spec (squishy-pastel)

## Identity

- **Item — Name:** `dabwith.me` (always lowercase, never capitalized)
- **Item — Wordmark:** lowercase set tight, the `.me` rendered in the accent peach so the URL nature reads instantly without being a logo trick
- **Item — Voice:** sleepy, friendly, curious. First-person. Stoner-warm without being a cliché. Says "sesh" not "session", "mate" never, "hey" sometimes
- **Item — Mascot:** Bub, the orb. Round, soft, two oval eyes, slow blinks, gentle idle wobble. Personality matches voice: sleepy default, focused when working, dreamy when done

## Color tokens (OKLch)

```css
:root {
  --bg:        oklch(97% 0.025 320);   /* lilac cream paper */
  --surface:   oklch(99% 0.012 320);   /* whiter card surface */
  --border:    oklch(90% 0.04 320);    /* soft lavender hairline */
  --muted:     oklch(55% 0.04 300);    /* secondary text */
  --fg:        oklch(30% 0.04 300);    /* primary text — never pure black */
  --accent:    oklch(75% 0.18 30);     /* peach — primary action + .me in wordmark */

  --mint:      oklch(85% 0.10 165);    /* calm/cool states */
  --lilac:     oklch(82% 0.10 305);    /* dreamy/idle states */
  --butter:    oklch(90% 0.12 95);     /* warm/cozy states */

  --shadow-soft: 0 6px 18px oklch(70% 0.06 320 / 0.18), 0 2px 4px oklch(60% 0.05 320 / 0.10);
  --shadow-pop:  0 12px 28px oklch(70% 0.10 30 / 0.30), 0 4px 8px oklch(60% 0.10 30 / 0.18);
}
```

## Typography

- **Item — Display:** SF Pro Rounded (system) — friendly, full of soft terminals
- **Item — Body:** -apple-system / system-ui — neutral, gets out of the way
- **Item — Mono:** SF Mono — used only for tiny eyebrow / readout numerics

## Posture

- **Item — Radii:** content cards 24px, buttons 999px (jellybean), small chips 14px. Nothing sharper than 14px
- **Item — Borders:** thin (1px) lavender hairlines. Never full-strength fg. Borders are decorative, not structural
- **Item — Shadows:** soft, downward, low-contrast, lilac-tinted. No hard drop shadows. Buttons get a slight inner shine + outer pop on hover
- **Item — Motion:** spring everything. tap = squish-then-bounce (scale 0.94 → 1.04 → 1). Idle = breathe + slow tilt. Phase transitions = peek-a-boo (slide in from below + scale up)
- **Item — Accent budget:** peach used exactly twice per screen (primary action + one editorial flourish — usually the .me in the wordmark or a single highlight word)

## Mascot — Bub

- **Item — Body:** soft radial gradient, peach-warm core to lilac-cream edge
- **Item — Eyes:** two ovals, ~10% of body width, soft black (oklch 30% 0.04 300)
- **Item — Blink:** every 4–6s, brief 120ms close
- **Item — Idle wobble:** 3deg tilt over 4s
- **Item — Squish on tap:** scaleY 0.92 / scaleX 1.06 → settle
- **Item — Mood map per phase:**
  - `connect` → sleepy (eyes half-closed, slow tilt)
  - `choose` → curious (eyes wide, looking around)
  - `build` → eager (eyes wide, focused forward)
  - `heat` → concentrating (eyes closed tight, body slightly orange-warm)
  - `cool` → watching (eyes wide open, no blink)
  - `dab` → surprised "O.O" (eyes wide circles)
  - `dunk` → calm (back to default)
  - `clean` → tidy (small smile)
  - `complete` → starry (✦ in eyes, gentle bounce)

## Anti-slop guards specific to this rebrand

- **Item — No emoji** as feature icons — Bub IS the personality
- **Item — No gradient backgrounds** beyond the orb and the active button
- **Item — No drop shadow stacks** that look like glass — that was the old Quartzie thing, we're going soft pastel now
- **Item — No "10× faster" copy** — write in lowercase casual voice, no growth-marketing claims
- **Item — Real copy** in every screen — never "Feature one / Two", never lorem
