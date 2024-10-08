import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), sentryVitePlugin({
    org: "student-g0b",
    project: "javascript-react"
  }), sentryVitePlugin({
    org: "student-g0b",
    project: "javascript-react-b9"
  })],

  build: {
    sourcemap: true
  }
})