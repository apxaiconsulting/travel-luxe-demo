# Travel Luxe · Booking Manager (demo)

A working demo of a booking + revenue system for **Travel Luxe Vacation Rentals**, built on the
same codebase as the Pinewoods cabin CRM. Styling follows travelluxe.co and the TL monogram:
black, white and warm stone, Lato and Cormorant Garamond.

Open `index.html` over HTTP (not `file://` — it uses ES modules) and it runs with sample data.

## What's in it

- **Home** — income for the month, nights booked, occupancy, management fees, balances due in the
  next two weeks, next check-ins, and a per-property breakdown with the owner's share.
- **Calendar** — a week board across all six listings, or a month grid for one listing. Tap any
  empty night to book it; one booking per listing per night, so double bookings can't happen.
- **Bookings** — month list with search, filtered by listing, with totals.
- **Money** — income by listing and month, management fees by listing, owner payouts, expenses by
  category, and month-by-month cash surplus.

## Demo vs. live

`config.js` is empty, so the app runs in **demo mode**: made-up bookings and expenses generated
around today's date (`data/seed.js`), saved in the browser only. "Reset demo data" in the banner
clears them. Bump `DEMO_KEY` in `store.js` whenever the sample data changes.

To run it live for a client: create a Supabase project, run `supabase/schema.sql`, turn off public
sign-ups, invite the team, and fill in `config.js`. Everything then shares one database with live
updates.

## Customising

Everything client-specific is in **`business.js`** — listings, nightly rates, management fee
percentages, guest capacity, expense categories, currency and wording. Colours are the `:root`
tokens at the top of `index.html` (`--u1` … `--u6` are the per-listing colours).

`logo.png` (full lockup) and `logo-mark.png` (the TL monogram, used in the top bar) are cut from
Travel Luxe's own logo, black artwork on transparency, so dark mode just inverts them. The app
icons are the monogram reversed out of brand black.

Listing names, capacities and locations come from travelluxe.co. Nightly rates, management fee
percentages, guests, bookings and expenses are illustrative sample figures, not Travel Luxe's
actual numbers.
