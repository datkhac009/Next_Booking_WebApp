# The Booking Cabin Website

A modern cabin booking web app built with Next.js, Supabase, and NextAuth. Users can explore luxury cabins, sign in with Google, and manage reservations through a clean account experience.

[Live Demo](https://next-booking-web-app-ivory.vercel.app)

## Overview

The Wild Oats Website is a full-stack booking application using the Next.js App Router. It combines server-rendered pages, Google authentication, and Supabase-backed data management to deliver a simple reservation workflow from browsing cabins to managing bookings.

## Highlights

- Built with `Next.js 14` and the App Router
- Google authentication via `NextAuth`
- Supabase integration for cabins, guests, bookings, and settings
- Reservation creation, editing, and deletion flow
- Account area for profile and reservation history
- Tailwind CSS styling with reusable UI components

## Live Deployment

- Production URL: `https://next-booking-web-app-ivory.vercel.app`

## Tech Stack

- `Next.js 14`
- `React 18`
- `Tailwind CSS`
- `NextAuth`
- `Supabase`
- `date-fns`
- `react-day-picker`

## Core Features

- Landing page with branded hero section
- About page with dynamic cabin count
- Cabin listing and individual cabin detail pages
- Google sign-in and session-based account access
- Automatic guest record creation on first login
- Reservation management inside the account area
- Country selection powered by the REST Countries API

## Project Structure

```text
app/
  about/                  About page
  account/                Account pages and reservations
  api/auth/               NextAuth route handler
  cabins/                 Cabin listing and detail pages
  component/              Shared UI components
  _lib/                   Auth, Supabase, data services, actions
  _styles/                Global styles
public/                   Static images and assets
```

## Getting Started

### Requirements

- `Node.js 18+`
- `npm`
- A configured Supabase project
- Google OAuth credentials

### Environment Variables

Create `.env.local` in the project root:

```env
AUTH_GOOGLE_ID=
AUTH_GOOGLE_SECRET=
NEXTAUTH_SECRET=
NEXTAUTH_URL=http://localhost:3000
SUPABASE_URL=
SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
```

Notes:

- The code supports both `SUPABASE_ANON_KEY` and `SUPABASE_KEY`, but `SUPABASE_ANON_KEY` is preferred.
- Mutating operations currently rely on `SUPABASE_SERVICE_ROLE_KEY`.

### Install and Run

```bash
npm install
npm run dev
```

Open `http://localhost:3000` in your browser.

## Available Scripts

```bash
npm run dev
npm run build
npm run start
npm run prod
npm run lint
```

## Application Flow

1. Users sign in with Google through NextAuth.
2. The app checks whether the signed-in email already exists in the `guest` table.
3. If not, a new guest profile is created in Supabase.
4. Users browse cabins, select dates, and submit a reservation.
5. Reservations can be viewed and managed in the account section.

## External Services

- `Supabase` for database access and data persistence
- `Google OAuth` for authentication
- `REST Countries API` for country data

## Deployment

This project is deployed on Vercel:

- Live app: `https://next-booking-web-app-ivory.vercel.app`

For production deployment, make sure the environment variables in Vercel match the values used in `.env.local`, especially:

- `NEXTAUTH_URL`
- `SUPABASE_URL`
- `SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `AUTH_GOOGLE_ID`
- `AUTH_GOOGLE_SECRET`

## Notes

- The repository currently includes local build output folders such as `.next/`, `out/`, and `node_modules/`.
- Parts of the codebase still mix English and Vietnamese in comments and naming. Standardizing that would improve long-term maintainability.
