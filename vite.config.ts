import { defineConfig } from "vite"
import reactRefresh from "@vitejs/plugin-react-refresh"
import { aduiIconPlugin, aduiImportPlugin } from "adui/rollup-plugin-adui"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    reactRefresh(),
    aduiImportPlugin(),
    aduiIconPlugin(),
  ],
})
