# 🏡 Roommate Finder Website

A modern and responsive platform that helps users find compatible roommates based on location, budget, lifestyle preferences, and interests.

🔗 **Live Site:** [https://your-live-site-url.netlify.app](https://your-live-site-url.netlify.app)  
🌐 **Server Repo:** [https://github.com/your-username/roommate-finder-server](https://github.com/your-username/roommate-finder-server)  
💻 **Client Repo:** [https://github.com/your-username/roommate-finder-client](https://github.com/your-username/roommate-finder-client)

---

## 🚀 Features

- 🔐 **Authentication System**: Login/Signup using email-password and Google login.
- 📋 **CRUD Operations**: Add, update, delete, and browse roommate listings.
- 👁️ **Details View with Like System**: Users can like other listings to reveal contact numbers (can't like own posts).
- 🎨 **Dark/Light Theme Toggle**: Users can switch between light and dark modes.
- 📱 **Fully Responsive**: Works seamlessly across mobile, tablet, and desktop.
- 🔍 **Search by Location, Budget & Lifestyle**: Easily find matching roommates.
- ⚙️ **Protected Routes**: Secured pages for authenticated users only.
- 🔄 **Dynamic Routing**: Reloading pages never causes any redirect or error.
- 🛠️ **.env Config**: Firebase and MongoDB credentials securely stored using environment variables.
- 🔄 **Animations**: Integrated with Lottie React, React Tooltip, and React Awesome Reveal.

---

## 📁 Pages Overview

- `/` — Home page with Banner, Featured Roommate Posts, and 2 meaningful extra sections
- `/login` & `/signup` — Email/Password and Google-based authentication
- `/add-roommate` — Private route to create a new listing
- `/browse-listings` — See all roommate listings
- `/my-listings` — Private route to manage your listings (update/delete)
- `/details/:id` — Private route to see listing details and like the post
- `/update/:id` — Private route to update a post
- `*` — Custom 404 page

---

## 🧪 Technologies Used

### Client Side:
- React, React Router
- Tailwind CSS, DaisyUI
- Firebase Auth
- Axios
- Lottie React
- React Tooltip
- React Awesome Reveal
- React Simple Typewriter
- SweetAlert2 / React Hot Toast

### Server Side:
- Express.js
- MongoDB
- CORS
- JWT
- Dotenv

---

## 📷 Preview

![Home Page Preview](https://your-preview-image-url.com)

---

## 🔧 Setup Instructions

### Client:
```bash
git clone https://github.com/your-username/roommate-finder-client.git
cd roommate-finder-client
npm install
npm run dev
