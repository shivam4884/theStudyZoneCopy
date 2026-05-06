// vite.config.js
// This file tells Vite how to build your project.
// We add the Tailwind plugin so CSS classes work automatically.

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),        // Enables React JSX support
    tailwindcss(),  // Enables Tailwind CSS utility classes
  ],
})
