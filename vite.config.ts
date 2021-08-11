import { defineConfig } from "vite"
import reactRefresh from "@vitejs/plugin-react-refresh"
import vitePluginImp from "vite-plugin-imp"
import rollupPluginAduiIcon from "adui/rollup-plugin-adui-icon"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    reactRefresh(),
    vitePluginImp({
      libList: [
        {
          libName: "adui",
          style: (name) => `adui/es/${name}/style`,
          libDirectory: "es",
        },
      ],
    }),
    {
      ...rollupPluginAduiIcon(),
      apply: "build",
    },
  ],
})
