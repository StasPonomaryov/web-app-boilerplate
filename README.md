# Web Application Boilerplate

This template provides a minimal setup to start developing web application.

## Stack
- React
- Typescript
- Vite
- Tailwind
- Firebase
- Zustand

## How to start

Edit `vite.config.ts` for `outDir` (path to build) and `base` (path to run).

Create `.env.local`, `.env.staging`, `.env.production` files for local development\staging\production and place there some variables and put Firebase credentials there:
```
VITE_APP_FAVICON_EMOJI="👑"
VITE_APP_TITLE="Web App Boilderplate [local]"
VITE_APP_HOME_FOLDER="/web-app"
VITE_APP_FIREBASE_API_KEY=""
VITE_APP_FIREBASE_AUTH_DOMAIN=""
VITE_APP_FIREBASE_DATABASE_URL=""
VITE_APP_FIREBASE_PROJECT_ID=""
VITE_APP_FIREBASE_STORAGE_BUCKET=""
VITE_APP_FIREBASE_MESSAGING_SENDER_ID=""
VITE_APP_FIREBASE_APP_ID=""
NODE_ENV=<development|production>
```

Create `.firebaserc` file and put there info about your projects:
```
{
  "projects": {
    "prod": "web-app",
    "dev": "web-app-dev",
    "default": "web-app-dev"
  }
}
```

Create `firebase.json` file and put there info about your projects' hosting:
```
{
  "hosting": {
    "public": "public",
    "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
    "rewrites": [
      {
        "source": "/web-app/**",
        "destination": "/web-app/index.html"
      }
    ]
  }
}
```

## How to run

Run local:
`pnpm run dev` 

## How to build

Build staging:
`pnpm build:stage`

Build production:
`pnpm build`

## How to deploy

⚠️ IMPORTANT. Every your deployment will remove ALL files on Firebase hosting. Therefore, if you have multiple applications placed in subdirectories like `public/web-app`, `public\web-app-2` you'll lose all of them and only current application will be available.

⚠️ You must have `firebase-tools` installed on your machine globally

Deploy to Firebase hosting (staging project)
`firebase deploy --only hosting -P dev`

Deploy to Firebase hosting (production project)
`firebase deploy --only hosting -P prod`
