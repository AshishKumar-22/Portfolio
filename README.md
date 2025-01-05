# React + Vite Portfolio

This is a React template powered by Vite to create fast and scalable single-page applications. It comes with minimal setup, hot module replacement (HMR), and ESLint integration for clean and maintainable code.

## Features
- ⚡ Fast and modern development environment using Vite.
- 🔥 Hot Module Replacement (HMR) for instant feedback.
- 📏 Linting set up with ESLint for better code quality.
- 🎨 Easy-to-customize React setup for your portfolio or any other project.
- 🛠️ Supports both Babel and SWC plugins for React support.

## Available Plugins
Currently, two official plugins are available for React:

1. **@vitejs/plugin-react**
   - Uses **Babel** for Fast Refresh and is the default choice for most React applications.

2. **@vitejs/plugin-react-swc**
   - Uses **SWC** for Fast Refresh and faster build times.

## Folder Structure

my-portfolio/
├── node_modules/                  # Installed dependencies
├── public/                        # Public static assets (empty for Vite-based projects)
│   
├── src/                           # Source code for React app
│   ├── assets/                    # Folder for assets like images, svg, etc.
│   ├── components/                # React components for various pages
│   │   ├── Nav.jsx                # Navigation bar component
│   │   ├── Footer.jsx             # Footer component
│   │   ├── About.jsx              # About page component
│   │   ├── Contact.jsx            # Contact page component
│   │   ├── Education.jsx          # Education page component
│   │   ├── Hero.jsx               # Hero section component
│   │   ├── Skills.jsx             # Skills section component
│   │   ├── Projects.jsx           # Projects section component
│   ├── App.jsx                    # Main React component
│   ├── index.css                  # Tailwind's CSS file
│   ├── main.jsx                   # Entry point for React app
├── package.json                   # Project metadata and dependencies
└── vite.config.js                 # Vite configuration file


## Project Setup

### 1. Install Dependencies
Install the necessary project dependencies:

npm install

### 2. Start the Development Server
Run the development server:

npm run dev

This will start the project at http://localhost:3000. Open this URL in your browser to view the project.

## ESLint Setup
This project uses ESLint to maintain clean and consistent code. The default configuration includes basic rules for React.

1. **Install ESLint**
To set up ESLint, you need to install the following dependencies:

npm install eslint eslint-plugin-react --save-dev

2. **Configure ESLint**
Create a .eslintrc.json file:

{
  "extends": ["eslint:recommended", "plugin:react/recommended"],
  "parserOptions": {
    "ecmaVersion": 2021,
    "sourceType": "module"
  },
  "plugins": ["react"]
}

3. **Run ESLint**
You can now run ESLint on your project files:

npx eslint .

## Contributions
Feel free to open issues and contribute to this project. Pull requests are always welcome!
