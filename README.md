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

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Running on V0 / preview environments

If you're importing this project into a V0 preview environment, make sure the following are configured:

- Set the public API URL so client requests reach the backend:

	- `NEXT_PUBLIC_API_URL` (e.g. `https://api.myproject.example.com/api/v1`)

- Configure how preview URLs are constructed by setting `NEXT_PUBLIC_PREVIEW_URL_TEMPLATE`.
	The template accepts `{id}`, `{domain}`, and `{port}` placeholders.
	Examples:

	- V0-style host: `{id}.{domain}` (if the preview host is like `abcd.preview.v0.app`)
	- Prefixed host: `http://3000-{id}.{domain}` (if the preview host is `3000-abcd.example.com`)

- Ensure sandboxes expose a reachable HTTP server (commonly on `0.0.0.0:3000`). The preview probe checks `{previewUrl}/favicon.ico` — add a small static favicon or change the probe if needed.

After setting env vars in your V0 project settings, redeploy or re-import the project so the runtime uses the new values.
