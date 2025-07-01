# 🔗 React Router App

A responsive, multi-page React application built using **React Router v6**, featuring routes like Home, About, Contact, GitHub user data, and dynamic user pages. Fully deployed and accessible online.

---

## 🌐 Live Demo

👉 [https://mahnoorshabbir-reactrouter.vercel.app/](https://mahnoorshabbir-reactrouter.vercel.app/)

---

## 🚀 Features

- 🧭 Routing with **React Router v6**
- 📄 Pages: Home, About, Contact, Github, and dynamic User pages
- 🧑‍💻 GitHub page with live data using `loader`
- 🔗 Dynamic route: `/user/:userId`
- 🖼️ TailwindCSS UI with responsive layout
- ⚡ Nested routes using a shared layout component (`Layout.jsx`)
- 🧱 Footer and Header components with navigation links

---

## 📁 Project Structure

src/
├── App.jsx
├── Layout.jsx
├── index.css
├── main.jsx
├── components/
│ ├── header/
│ │ ├── Header.jsx
│ │ ├── Footer.jsx
│ │ ├── home/Home.jsx
│ │ ├── about/About.jsx
│ │ ├── contact/Contact.jsx
│ │ ├── user/User.jsx


---

## 🧠 How It Works

- Uses `createBrowserRouter()` and `createRoutesFromElements()` from `react-router-dom`
- `Layout.jsx` wraps all routes with shared header/footer
- Dynamic routing with `/user/:userId`
- `Github` route uses a `loader` function to fetch data before rendering
- Tailwind CSS used for all styling (fully responsive)

---

## 🛠 Tech Stack

- ⚛️ React (Vite setup)
- 🔄 React Router v6.15+
- 💨 Tailwind CSS
- 🌐 GitHub API (via loader)
- 📦 Vercel (for deployment)

---

## 🧪 Getting Started Locally

```bash
# 1. Clone the repo
git clone https://github.com/your-username/react-router-app.git

# 2. Navigate to the project
cd react-router-app

# 3. Install dependencies
npm install

# 4. Run the app
npm run dev
