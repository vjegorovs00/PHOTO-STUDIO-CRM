<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

<!-- END:nextjs-agent-rules -->

# Project Instructions

## Stack

* Next.js App Router
* TypeScript
* Tailwind CSS
* shadcn/ui with Radix primitives
* Supabase for Auth, PostgreSQL and Storage
* React Hook Form + Zod
* date-fns
* Lucide React

## Architecture

```txt
src/
  app/                  # Routes, layouts and route-only components
  components/
    ui/                 # shadcn/ui primitives only
    shared/             # Reusable site-wide UI
  features/             # User workflows and business features
  entities/             # Shared domain types and constants when needed
  lib/                  # Supabase, utilities, formatters and config
  hooks/                # Reusable hooks
  types/                # Global TypeScript types
```

### Placement rules

* Used only by one route → `app/.../_components`
* Reusable UI primitive without business logic → `components/ui`
* Shared visual component used across unrelated areas → `components/shared`
* Business workflow or user action → `features/<feature-name>`
* Shared booking/client/service/payment types or constants → `entities/<entity-name>`
* Supabase clients, helpers, date/currency formatting → `lib`

Group code by business domain. Do not use generic top-level folders such as `cards`, `tables`, `modals`, `common` or `misc`.

## Coding Rules

* Use strict TypeScript. Avoid `any`.
* Use Server Components by default.
* Add `"use client"` only for browser interactivity, local state, forms, dialogs, calendars or browser APIs.
* Keep `page.tsx` and `layout.tsx` thin.
* Use React Hook Form and Zod for forms.
* Prefer small readable components over large files.
* Do not add a state-management library without a real need.
* Use mobile-first Tailwind styling.
* Use `cn()` for conditional Tailwind classes.
* Keep public pages fast, accessible and SEO-friendly.

## Security

Security is required from the beginning.

* Never expose `SUPABASE_SERVICE_ROLE_KEY` to the client.
* Validate every mutation server-side with Zod.
* Enable RLS on all Supabase tables.
* Public users can read only explicitly public/published content.
* Clients, bookings, payments and admin data require authorization.
* Protect `/admin` routes and all admin mutations.
* Do not fetch private data in public client components.
* Use secure Supabase Storage policies for uploads.
* Use environment variables correctly and never commit secrets.

## Product Scope

Public website:

* Home
* Portfolio
* Services and prices
* Locations
* Blog/guides
* Contact and booking form

Admin CRM:

* Dashboard
* Bookings
* Clients
* Portfolio management
* Services management
* Payments and basic statistics
* Calendar
* Settings

Build the practical MVP first. Do not introduce enterprise complexity without a clear use case.
