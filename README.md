This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

Set these environment variables before running the production build. Use verified business contact details.

| Variable | Value |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | The canonical HTTPS URL for the deployed site. |
| `NEXT_PUBLIC_FORMSPREE_FORM_ID` | The ID from the Formspree form configured for the enquiry inbox. |
| `NEXT_PUBLIC_CONTACT_EMAIL` | The public enquiry email address. |
| `NEXT_PUBLIC_CONTACT_PHONE` | The phone number in international format, starting with `+`, without spaces. |
| `NEXT_PUBLIC_CONTACT_WHATSAPP` | The WhatsApp number in the same international format. |
| `NEXT_PUBLIC_CONTACT_ADDRESS` | The public office address, if published. |

The corresponding contact links and form appear when configured. Set up at least one enquiry channel before launch. If using Formspree, confirm that a test enquiry reaches the intended inbox.

Use Node.js 22.13 or later on the Node.js 22 release line, or Node.js 24 LTS. Run `npm ci`, `npm run lint`, and `npm run build`. To preview the production build locally, run `npm run start`.

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
