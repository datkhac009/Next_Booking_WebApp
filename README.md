# The Wild Oats Website

A cabin booking website built with Next.js App Router. The project allows users to sign in with Google, browse cabins, check availability, and manage reservations through Supabase.

## Tech Stack

- Next.js 14
- React 18
- Tailwind CSS
- NextAuth
- Supabase
- date-fns
- react-day-picker

## Main Features

- Home page, about page, and cabin listing
- Individual cabin detail pages
- Google sign-in
- Automatic guest profile creation on first login
- Create, update, and delete reservations
- Account area and reservation history

## Project Structure

```text
app/
  about/                  About page
  account/                Account area and reservations
  api/auth/               NextAuth route handler
  cabins/                 Cabin list and cabin detail pages
  component/              UI components
  _lib/                   Auth, Supabase, data services, server actions
  _styles/                Global styles
public/                   Images and static assets
```

## Environment Requirements

- Node.js 18 or later
- npm
- A Supabase project with the required tables such as `cabins`, `bookings`, `guest`, and `settings`
- Google OAuth credentials for authentication

## Environment Variables

Create a `.env.local` file in the project root and configure:

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

- The current code accepts either `SUPABASE_ANON_KEY` or `SUPABASE_KEY`, but `SUPABASE_ANON_KEY` is the clearer option.
- Write operations such as creating guests, bookings, and profile updates currently use `SUPABASE_SERVICE_ROLE_KEY`.

## Installation and Local Development

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Available Scripts

```bash
npm run dev
npm run build
npm run start
npm run prod
npm run lint
```

## Main Application Flow

1. The user signs in with Google through NextAuth.
2. On first login, the system checks the user's email in the `guest` table.
3. If the guest does not exist, the app creates a new guest record in Supabase.
4. The user selects a cabin, chooses dates, and submits a reservation.
5. Reservations are displayed in `account/reservations`.

## External Services

- Supabase: stores cabins, guests, bookings, and settings
- Google OAuth: handles authentication
- REST Countries API: provides the country list

## Notes

- The repository currently includes build-related folders such as `.next/`, `out/`, and `node_modules/`; they are not relevant to deployment documentation.
- Some parts of the codebase currently mix English and Vietnamese; standardizing naming and comments further would improve maintainability.
