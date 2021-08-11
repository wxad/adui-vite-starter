# Vite AD UI 实践示例

本示例使用 `vite@2.4.0`，`adui@2.10.3`。
对于 `adui@2`，本示例提供以下功能，每一个功能都不是必须的：

## 样式按需

样式按需通过 `vite-plugin-imp` 实现：

```javascript
// vite.config.ts
import vitePluginImp from "vite-plugin-imp"

// ...
vitePluginImp({
  libList: [
    {
      libName: "adui",
      style: (name) => `adui/es/${name}/style`,
      libDirectory: "es",
    },
  ],
}),
```

注意：

1. 需在项目中单独引入 `import 'adui/es/style/base.css';`；
2. 仅在打包时样式会被 tree shaking 掉，在本地开发时样式不会按需加载。

## Icon 按需

`adui@2` 设计 `Icon` 时并没有为每个 `Icon` 生成一个独立的文件（经过一些考量和选择我们并不打算这样做，至少在 `adui@2` 不会这样做），而是在同一个组件中引入一个全量的资源文件。

因此，`Icon` 无法利用 es 模块的 tree shaking 得到按需处理，我们提供了插件 `rollupPluginAduiIcon` 专门处理这个问题，此插件还有一些详细配置，如添加默认的图标，这里不展开描述。

```javascript
// vite.config.ts
import rollupPluginAduiIcon from "adui/rollup-plugin-adui-icon"

// ...
{
  ...rollupPluginAduiIcon(),
  apply: "build",
},
```

## Tailwind CSS

`adui@2` 本身没有使用原子类，它只是定义了一套如何应用 `adui` 的桌面端原子类规范。在安装完 `tailwindcss` 后，通过以下方式引入规范，具体的原子类规范可以阅读 [官方文档](https://wxad.design/adui/docs/acss/start)：

```javascript
// tailwind.confg.js
module.exports = {
  presets: [require("adui/adui-tailwind-config")],
}
```
