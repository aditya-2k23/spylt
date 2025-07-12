# SPYLT

SPYLT is a modern, visually rich, and interactive landing page built with React, Vite, and Tailwind CSS. It features smooth scrolling, animated sections, and a responsive design, showcasing the benefits and features of the SPYLT product.

> **Note:** This project is inspired by and takes reference from the AWWWARDS-winning website [SPYLT](https://www.awwwards.com/sites/spylt-milk).

## Tech Stack

- **React 19** – UI library for building interactive interfaces
- **Vite** – Fast build tool and development server
- **Tailwind CSS 4** – Utility-first CSS framework for rapid UI development
- **GSAP** (GreenSock Animation Platform) – Advanced animations and scroll effects
- **@gsap/react** – GSAP integration for React
- **@tailwindcss/vite** – Tailwind CSS integration for Vite
- **ESLint** – Linting for code quality

## Project Structure

```plaintext
src/
  App.jsx              # Main app component, sets up smooth scrolling and layout
  index.css            # Global styles and Tailwind layers
  main.jsx             # Entry point
  components/          # Reusable UI components (Navbar, ClipPathTitle, etc.)
  constants/           # Project constants
  sections/            # Main page sections (Hero, Message, Flavor, Nutrition, Benefit, Testimonial, Footer)
public/
  fonts/               # Custom fonts
  images/              # Images and SVGs
  videos/              # Video assets
```

## Main Features

- **Animated Sections:** Uses GSAP for scroll-based and reveal animations
- **Smooth Scrolling:** Powered by GSAP ScrollSmoother
- **Responsive Design:** Mobile-first, fully responsive layout
- **Custom Typography:** Integrates Google Fonts and custom fonts
- **Reusable Components:** Modular React components for maintainability
- **Rich Media:** Includes images, SVGs, and videos for a dynamic experience

## Getting Started

1. Install dependencies:

   ```sh
   npm install
   ```

2. Start the development server:

   ```sh
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:5173` to view the app.
