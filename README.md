//Note that you do need premium spotify for it to play music.


**To run the spotify-2.0 app**

1. Download and extract the .zip from github

2. Once you open the project in VScode open the terminal window

3. type "**npm install**" (to install nextjs and react)

4. configure .env.local to set the variables in the following way (required for connecting to your spotify account)
<br><br>

  NEXTAUTH_URL = http://localhost:3000 (for localhost) <br/><br>
  NEXT_PUBLIC_CLIENT_SECRET = YourPublicClientSecret (Found in spotify dev page hidden hash)<br/><br>
  NEXT_PUBLIC_CLIENT_ID = YourPublicClientId (Same as your secret, but it's not hidden)<br/><br>
  JWT_SECRET = some_super_secret_value (Secret value for authentication)<br/><br>

<br/>

# Next.js + Tailwind CSS Example

This example shows how to use [Tailwind CSS](https://tailwindcss.com/) [(v3.2)](https://tailwindcss.com/blog/tailwindcss-v3-2) with Next.js. It follows the steps outlined in the official [Tailwind docs](https://tailwindcss.com/docs/guides/nextjs).

## Deploy your own

Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example) or preview live with [StackBlitz](https://stackblitz.com/github/vercel/next.js/tree/canary/examples/with-tailwindcss)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/vercel/next.js/tree/canary/examples/with-tailwindcss&project-name=with-tailwindcss&repository-name=with-tailwindcss)

## How to use

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init), [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/), or [pnpm](https://pnpm.io) to bootstrap the example:

```bash
npx create-next-app --example with-tailwindcss with-tailwindcss-app
```

```bash
yarn create next-app --example with-tailwindcss with-tailwindcss-app
```

```bash
pnpm create next-app --example with-tailwindcss with-tailwindcss-app
```

Deploy it to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).<br>
