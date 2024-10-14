<a name="readme-top"></a>

# Lingua - Interactive platform for language learning.

![Lingua - Interactive platform for language learning.](/.github/images/img_hero.png "Lingua - Interactive platform for language learning.")

[![GitHub license](https://flat.badgen.net/github/license/frantanius/lingua?icon=github&color=black&scale=1.01)](https://github.com/frantanius/lingua/blob/main/LICENSE "GitHub license")
[![Maintenance](https://flat.badgen.net/static/Maintained/yes?icon=github&color=black&scale=1.01)](https://github.com/frantanius/lingua/commits/main "Maintenance")
[![GitHub branches](https://flat.badgen.net/github/branches/frantanius/lingua?icon=github&color=black&scale=1.01)](https://github.com/frantanius/lingua/branches "GitHub branches")
[![Github commits](https://flat.badgen.net/github/commits/frantanius/lingua?icon=github&color=black&scale=1.01)](https://github.com/frantanius/lingua/commits "Github commits")
[![GitHub issues](https://flat.badgen.net/github/issues/frantanius/lingua?icon=github&color=black&scale=1.01)](https://github.com/frantanius/lingua/issues "GitHub issues")
[![GitHub pull requests](https://flat.badgen.net/github/prs/frantanius/lingua?icon=github&color=black&scale=1.01)](https://github.com/frantanius/lingua/pulls "GitHub pull requests")
[![Vercel status](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://lingua-seven.vercel.app/ "Vercel status")

<!-- Table of Contents -->
<details>

<summary>

# :notebook_with_decorative_cover: Table of Contents

</summary>

- [Folder Structure](#bangbang-folder-structure)
- [Getting Started](#toolbox-getting-started)
- [Screenshots](#camera-screenshots)
- [Tech Stack](#gear-tech-stack)
- [Stats](#wrench-stats)
- [Contribute](#raised_hands-contribute)
- [Acknowledgements](#gem-acknowledgements)

</details>

## :bangbang: Folder Structure

Here is the folder structure of this app.

```bash
lingua/
  |- actions/
    |- challenge-progress.ts
    |- user-progress.ts
    |- user-subscription.ts
  |- app/
    |-- (main)/
        |--- courses/
        |--- leaderboard/
        |--- learn/
        |--- quests/
        |--- shop/
        |--- layout.tsx
    |-- (homepage)/
        |--- footer.tsx
        |--- header.tsx
        |--- layout.tsx
        |--- page.tsx
    |-- admin/
        |--- challenge/
        |--- challengeOption/
        |--- course/
        |--- lesson/
        |--- unit/
        |--- app.tsx
        |--- page.tsx
    |-- api/
        |--- challengeOptions/
        |--- challenges/
        |--- courses/
        |--- lessons/
        |--- units/
        |--- webhooks/stripe/
    |-- lesson/
        |--- [lessonId]/
        |--- card.tsx
        |--- challenge.tsx
        |--- footer.tsx
        |--- header.tsx
        |--- layout.tsx
        |--- page.tsx
        |--- question-bubble.tsx
        |--- quiz.tsx
        |--- result-card.tsx
    |-- apple-icon.png
    |-- favicon.ico
    |-- globals.css
    |-- icon1.png
    |-- icon2.png
    |-- layout.tsx
  |- components/
    |-- modals/
    |-- ui/
    |-- feed-wrapper.tsx
    |-- mobile-wrapper.tsx
    |-- mobile-sidebar.tsx
    |-- promo.tsx
    |-- quests.tsx
    |-- sidebar-item.tsx
    |-- sidebar.tsx
    |-- sticky-wrapper.tsx
    |-- user-progress.tsx
  |- config/
    |-- index.ts
  |- db/
    |-- scripts/
      |-- prod.ts
      |-- reset.ts
      |-- seed.ts
    |-- drizzle.ts
    |-- queries.ts
    |-- schema.ts
  |- lib/
    |-- admin.ts
    |-- stripe.ts
    |-- utils.ts
  |- public/
  |- store/
    |-- use-exit-modal.ts
    |-- use-hearts-modal.ts
    |-- use-practice-modal.ts
  |- .env
  |- .eslintrc.js
  |- .gitignore
  |- components.json
  |- constants.ts
  |- drizzle.config.ts
  |- next-env.d.ts
  |- middleware.ts
  |- next.config.mjs
  |- package-lock.json
  |- package.json
  |- postcss.config.js
  |- tailwind.config.ts
  |- tsconfig.json
```

<br />

## :toolbox: Getting Started

1. Make sure **Git** and **NodeJS** is installed.
2. Clone this repository to your local computer.
3. Create `.env` file in **root** directory.
4. Contents of `.env`:

```env

# neon db uri
DATABASE_URL="postgresql://<user>:<password>@<host>:<post>/lingua?sslmode=require"

# stripe api key and webhook
STRIPE_API_SECRET_KEY=sk_test_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
STRIPE_WEBHOOK_SECRET=whsec_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

# public app url
NEXT_PUBLIC_APP_URL=http://localhost:3000

# github auth keys
GITHUB_CLIENT_ID=xxxxxxxxxxxxxx
GITHUB_CLIENT_SECRET=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

# google auth keys
GOOGLE_CLIENT_ID=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

```

1. Generate Authentication Secret

1. **Generate Random Authentication Secret:**

   - Visit [generate-secret.vercel.app](https://generate-secret.vercel.app/32).
   - Copy the generated secret.

1. **Update `.env` with Authentication Secret:**

   - Open your `.env` file.
   - Update the `AUTH_SECRET` variable with the generated secret:

     ```bash
     # .env

     # Random auth secret
     AUTH_SECRET="xxxxxxxxxxxxxxxxxxxxxxxxxx"
     ```

1. Configure NEXT_PUBLIC_APP_URL Base URL

1. **Set NEXT_PUBLIC_APP_URL Base URL:**

   - Open your `.env` file.
   - Set the `NEXT_PUBLIC_APP_URL` variable to the base URL of your Next.js application:

     ```bash
     # .env

     # NextAuth base URL
     NEXT_PUBLIC_APP_URL=http://localhost:3000
     ```

1. Obtain GitHub Authentication Keys

1. **Register Application on GitHub:**

   - Go to the [GitHub Developer Settings](https://github.com/settings/developers) and register a new OAuth application.
   - Obtain the client ID and client secret.

1. **Update `.env` with GitHub Keys:**

   - Open your `.env` file.
   - Update the following variables with the obtained GitHub keys:

     ```bash
     # .env

     # GitHub auth keys
     GITHUB_CLIENT_ID=xxxxxxxxxxxxxx
     GITHUB_CLIENT_SECRET=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
     ```

1. Obtain Google Authentication Keys

1. **Register Application on Google Cloud Console:**

   - Go to the [Google Cloud Console](https://console.cloud.google.com/) and create a new project.
   - Enable the "Google+ API" for your project and create credentials to obtain the client ID and client secret.

1. **Update `.env` with Google Keys:**

   - Open your `.env` file.
   - Update the following variables with the obtained Google keys:

     ```bash
     # .env

     # Google auth keys
     GOOGLE_CLIENT_ID=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx.apps.googleusercontent.com
     GOOGLE_CLIENT_SECRET=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
     ```

1. Retrieve Neon Database URI

   1. **Source**: Database Provider (e.g., Neon, PostgreSQL)
   2. **Procedure**:
      - Access your database provider's platform or configuration.
      - Locate the database connection details.
      - Replace `<user>`, `<password>`, `<host>`, and `<port>` placeholders in the URI with your actual database credentials.
      - Ensure to include `?sslmode=require` at the end of the URI for SSL mode requirement.

1. Fetch Stripe API Key and Webhook Secret

   1. **Source**: Stripe Dashboard
   2. **Procedure**:
      - Log in to your Stripe account.
      - Navigate to the dashboard or API settings.
      - Find the section related to API keys and webhook secrets.
      - Copy the `STRIPE_API_SECRET_KEY` and `STRIPE_WEBHOOK_SECRET`.

1. Specify Public App URL

   1. **Procedure**:
      - Replace `http://localhost:3000` with the URL of your deployed application.

1. Save and Secure:

   - Save the changes to the `.env` file.

1. Install Project Dependencies using `npm install --legacy-peer-deps` or `yarn install --legacy-peer-deps`.

1. Run the Seed Script:

In the same terminal, run the following command to execute the seed script:

```bash
npm run db:push && npm run db:prod
```

This command uses `npm` to execute the Typescript file (`db/scripts/prod.ts`) and writes challenges data in database.

13. Verify Data in Database:

Once the script completes, check your database to ensure that the challenges data has been successfully seeded.

14. Now app is fully configured 👍 and you can start using this app using either one of `npm run dev` or `yarn dev`.

**NOTE:** Please make sure to keep your API keys and configuration values secure and do not expose them publicly.

## :camera: Screenshots

![Modern UI/UX](/.github/images/img_1.png "Modern UI/UX")

![Quests](/.github/images/img_2.png "Quests")

![Shop](/.github/images/img_3.png "Shop")

## :gear: Tech Stack

[![React JS](https://skillicons.dev/icons?i=react "React JS")](https://react.dev/ "React JS") [![Next JS](https://skillicons.dev/icons?i=next "Next JS")](https://nextjs.org/ "Next JS") [![Typescript](https://skillicons.dev/icons?i=ts "Typescript")](https://www.typescriptlang.org/ "Typescript") [![Tailwind CSS](https://skillicons.dev/icons?i=tailwind "Tailwind CSS")](https://tailwindcss.com/ "Tailwind CSS") [![Vercel](https://skillicons.dev/icons?i=vercel "Vercel")](https://vercel.app/ "Vercel") [![Postgresql](https://skillicons.dev/icons?i=postgres "Postgresql")](https://www.postgresql.org/ "Postgresql")

## :wrench: Stats

[![Stats for Lingua](/.github/images/stats.svg "Stats for Lingua")](https://pagespeed.web.dev/analysis?url=https://lingua-seven.vercel.app/ "Stats for Lingua")

## :raised_hands: Contribute

You might encounter some bugs while using this app. You are more than welcome to contribute. Just submit changes via pull request and I will review them before merging. Make sure you follow community guidelines.

## :gem: Acknowledgements

Useful resources and dependencies that are used in Lingua.

- Special Thanks to Kenney Assets: https://kenney.nl/
- Freesound: https://freesound.org/
- Elevenlabs AI: https://elevenlabs.io/
- Flagpack: https://flagpack.xyz/

- [@clerk/nextjs](https://www.npmjs.com/package/@clerk/nextjs): ^4.29.9
- [@neondatabase/serverless](https://www.npmjs.com/package/@neondatabase/serverless): ^0.9.0
- [@radix-ui/react-avatar](https://www.npmjs.com/package/@radix-ui/react-avatar): ^1.0.4
- [@radix-ui/react-dialog](https://www.npmjs.com/package/@radix-ui/react-dialog): ^1.0.5
- [@radix-ui/react-progress](https://www.npmjs.com/package/@radix-ui/react-progress): ^1.0.3
- [@radix-ui/react-separator](https://www.npmjs.com/package/@radix-ui/react-separator): ^1.0.3
- [@radix-ui/react-slot](https://www.npmjs.com/package/@radix-ui/react-slot): ^1.0.2
- [class-variance-authority](https://www.npmjs.com/package/class-variance-authority): ^0.7.0
- [clsx](https://www.npmjs.com/package/clsx): ^2.1.0
- [dotenv](https://www.npmjs.com/package/dotenv): ^16.4.5
- [drizzle-orm](https://www.npmjs.com/package/drizzle-orm): ^0.30.4
- [lucide-react](https://www.npmjs.com/package/lucide-react): ^0.359.0
- [next](https://www.npmjs.com/package/next): 14.1.4
- [next-themes](https://www.npmjs.com/package/next-themes): ^0.3.0
- [ra-data-simple-rest](https://www.npmjs.com/package/ra-data-simple-rest): ^4.16.12
- [react](https://www.npmjs.com/package/react): ^18
- [react-admin](https://www.npmjs.com/package/react-admin): ^4.16.13
- [react-circular-progressbar](https://www.npmjs.com/package/react-circular-progressbar): ^2.1.0
- [react-confetti](https://www.npmjs.com/package/react-confetti): ^6.1.0
- [react-dom](https://www.npmjs.com/package/react-dom): ^18
- [react-use](https://www.npmjs.com/package/react-use): ^17.5.0
- [sonner](https://www.npmjs.com/package/sonner): ^1.4.32
- [stripe](https://www.npmjs.com/package/stripe): ^14.22.0
- [tailwind-merge](https://www.npmjs.com/package/tailwind-merge): ^2.2.2
- [tailwindcss-animate](https://www.npmjs.com/package/tailwindcss-animate): ^1.0.7
- [zustand](https://www.npmjs.com/package/zustand): ^4.5.2

<br />
<p align="right">(<a href="#readme-top">back to top</a>)</p>
