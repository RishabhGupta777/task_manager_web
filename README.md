This is a React project powered by Vite.

Prerequisites
Ensure you have Node.js installed (version 18.x or higher recommended).

Installation
Install the project dependencies using your preferred package manager:

Bash
npm install
# OR
yarn install
# OR
pnpm install
Available Scripts
In the project directory, you can run:

npm run dev

Starts the development server. Vite provides Hot Module Replacement (HMR), meaning your changes will reflect instantly in the browser without a full reload.

npm run build

Compiles your application into optimized static files for production. These files will be generated in the dist/ folder.

Important: If you are deploying to Vercel, ensure your build output directory is set to dist.

npm run preview

Runs the locally built version of your application (after running npm run build). This is useful to verify your production build before deploying.

Troubleshooting: SPA Routing
If you encounter 404 errors when refreshing the page on non-root routes (e.g., /about), ensure you have a vercel.json file in your root directory to handle client-side routing:

JSON
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
Deployment
This project is configured to deploy seamlessly to Vercel. Simply push your changes to your Git repository, and Vercel will trigger a new build and deployment automatically.

Would you like me to add a section about environment variables or how to set up Husky for pre-commit linting?
