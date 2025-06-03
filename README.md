# 🚀 Jhinku React Boilerplate

Modern React 19 starter with Vite + Tailwind CSS + Firebase

![React](https://img.shields.io/badge/React-19-blue)
![Vite](https://img.shields.io/badge/Vite-6.3-brightgreen)
![Tailwind](https://img.shields.io/badge/Tailwind-4.1-purple)

## ✨ Features

- ⚡ Vite for lightning-fast builds
- 🎨 Tailwind CSS 4 + React 19
- 🔥 Firebase auth/database ready
- 🛣️ React Router v7
- 🧹 ESLint + Prettier
- 📱 Fully responsive
- 🚀 Production-optimized

---

## 🧰 Installation & Setup

```bash
git clone https://github.com/your-username/jhinku-react.git
cd jhinku-react
yarn
yarn run dev
```

Runs app at `http://localhost:5173`

---

## 🔥 Firebase Setup

Follow these steps to integrate Firebase:

1. Go to https://console.firebase.google.com/
2. Create a project
3. Add a Web App and get your Firebase config
4. Create a `.env` file in your project root with the following:

```
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

5. Create `src/firebase.js` with this content:

```js
/**
 * 🔧 Firebase Setup Instructions (Vite + React)
 *
 * 1. Go to https://console.firebase.google.com/
 * 2. Create a new project.
 * 3. Add a Web app and copy the config.
 * 4. Create a `.env` file in your project root and add:
 *
 * VITE_FIREBASE_API_KEY=your_api_key
 * VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
 * VITE_FIREBASE_PROJECT_ID=your_project_id
 * VITE_FIREBASE_STORAGE_BUCKET=your_bucket
 * VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
 * VITE_FIREBASE_APP_ID=your_app_id
 *
 * 5. Add this file (firebase.js) to your `src` folder.
 *
 */

import { getAuth } from "@firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
export default app;
export const auth = getAuth(app);
```

---

## 📦 Dependencies

react, react-dom, vite, tailwindcss, firebase, react-router, react-toastify, sweetalert2

## 👤 Author

Made with ❤️ by <a href="https://github.com/abdullahalsuad" target="_blank">Jhinku Suad</a>
