# Lumière Skincare Store

A static, mobile-first storefront for curated skincare bundles. Product purchases leave the site for an external checkout; there is no database, account system, internal cart, or server-side business logic.

## Run locally

Install a current LTS version of [Node.js](https://nodejs.org/), open CMD or a terminal in the project folder, and run:

```sh
npm install
npm run dev
```

Open the local address printed in the terminal (normally `http://localhost:3000`).

## Create a production build

```sh
npm run build
```

The build command creates the optimized deployment output.

## Replace the checkout link

Open `src/lib/store.ts` and replace the single `CHECKOUT_LINK` value. The store automatically adds a product query parameter, such as `?product=medicube`, to every purchase button.

## Deploy

### Vercel

1. Import the repository in Vercel.
2. Use `npm run build` as the build command.
3. Keep the detected output settings and deploy.

### Netlify

1. Import the repository in Netlify.
2. Use `npm run build` as the build command.
3. Keep the detected output settings and deploy.

For any other static-capable host, run `npm run build` and upload the generated deployment output. Ensure the host redirects unknown product URLs back to the app entry point so direct links continue to work.

## Technology

- Vite
- React and TypeScript
- Tailwind CSS
- TanStack Router
