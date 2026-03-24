import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  base: '/cygni/', // Isso deve ser igual ao nome do repositório no GitHub
  plugins: [react()],
})