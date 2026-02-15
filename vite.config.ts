import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export const isPublic = false

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    base: "/N0ctOS",
})
