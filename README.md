# BookNest - Mango BookNest

BookNest is an online book borrowing platform built for the Category A8 Mango assignment. It digitizes a small library experience where users can browse books, filter by category, view protected book details, borrow a book, and manage their profile.

## Live URL
deployed in the Vercel.app and here is the link bellow:

`https://mango-booknest.vercel.app`

## Key Features

- Responsive header with logo, Home, All Books, My Profile, login state, user name, and logout.
- Custom footer with social links and contact information.
- Home banner with "Find Your Next Read", marquee announcement, featured books, category exploration, and platform benefits.
- Local 12-book JSON data using `id`, `title`, `author`, `description`, `category`, `available_quantity`, and `image_url`.
- All Books page with title search and functional left category sidebar for Story, Tech, and Science.
- Private book details page with cover, author, description, available quantity, borrow button, and confirmation toast.
- Login and registration pages with email/password forms, Google login button, route redirects, and form error messages.
- Private My Profile page with user information and a profile update route.
- Better Auth server route and MongoDB adapter configuration scaffold for production credentials.

## Tech Stack

- Next.js 16 App Router
- React 19
- Tailwind CSS 4
- DaisyUI 5
- Better Auth
- MongoDB driver
- Animate.css

## Environment Variables

Create a `.env.local` file from `.env.example`:

```bash
cp .env.example .env.local
```

Required production variables:

```txt
BETTER_AUTH_SECRET=
BETTER_AUTH_URL=
MONGODB_URI=
MONGODB_DB=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
```

The current UI also includes a local demo auth fallback so the assignment can be reviewed without real OAuth credentials.

## Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build

```bash
npm run lint
npm run build
```

## Deployment Notes

This project is ready for Vercel-style hosting. Add the environment variables in the hosting dashboard so `/api/auth/[...all]` can use Better Auth with MongoDB and Google credentials. Next.js App Router routes are file-based, so refreshing `/books`, `/books/1`, `/profile`, `/profile/update`, `/login`, and `/register` works without a client-side routing error.

## Submission

GitHub Repo Link:

Live Link:
