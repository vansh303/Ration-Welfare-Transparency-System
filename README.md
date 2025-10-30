🇮🇳 Ration & Welfare Transparency System — Frontend Setup Guide
📘 Overview

This frontend is built using React + TailwindCSS to ensure a modern, fast, and mobile-friendly interface for both Citizens and Admins.
The project connects to a backend (Node.js + MongoDB Atlas) for real-time data management.

| Type                                        | Tool / Library                           | Purpose                                       |
| ------------------------------------------- | ---------------------------------------- | --------------------------------------------- |
| **Frontend Framework**                      | [React.js](https://react.dev/)           | Core UI framework                             |
| **Routing**                                 | `react-router-dom`                       | Navigation between pages                      |
| **Styling**                                 | [Tailwind CSS](https://tailwindcss.com/) | Utility-first CSS styling                     |
| **HTTP Requests**                           | `axios`                                  | For connecting frontend → backend             |
| **Icons**                                   | `lucide-react` (optional)                | Clean icon set                                |
| **Internationalization (Language Support)** | `i18next` + `react-i18next`              | Multi-language support (all Indian languages) |
| **State Management**                        | React Hooks (`useState`, `useEffect`)    | Local component state                         |

📦 Installed Dependencies

Project ke package.json me ye dependencies honi chahiye 👇

npx create-vite RAtion --template react
cd RAtion
npm install
npm install tailwindcss @tailwindcss/vite

🧩 Project Structure
Frontend/
│
├── src/             
│   ├── App.js                 # Main router setup
│   ├── index.js               # Root render file
│   ├── components/
│   │   ├── Navbar.js          # Language selector + navigation
│   │   ├── Footer.js          # Bottom section
│   │   ├── Hero.js            # Image slider
│   │   └── ...other UI parts
│   ├── pages/
│   │   ├── Home.jsx           # Homepage (Hero + Schemes + News)
│   │   ├── CitizenDashboard.jsx
│   │   ├── AdminDashboard.jsx
│   │   └── Contact.jsx
│   ├── assets/                # Images, logos, etc.
│   └── i18n.js                # i18next setup for language translations
│
├── package.json
├── README.md
├── vite.config
