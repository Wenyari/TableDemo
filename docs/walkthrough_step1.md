# Walkthrough: 前端面试题 (Figma 还原)

本文档记录了基于 Figma 设计稿还原复杂表格页面的完整开发过程。

## Step 1: 构建环境与基础框架

### 1. 初始化项目
我们使用了 `Vite` 配合 `React` 模板快速构建了项目骨架。Vite 提供了极速的冷启动和热更新体验，非常适合此类单页应用的演示开发。
```bash
npx create-vite@latest ./ --template react
npm install
```

### 2. 清理与配置基础结构
为了保证从零开始精确还原设计稿，我们清理了 Vite 默认提供的样式文件 (`App.css`, `assets` 目录等)。

**`src/index.css` 设定：**
```css
.app-container {
  width: 736px;
  height: 407px;
  background-color: #101010;
  position: relative;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
}
```
我们创建了 `.app-container` 类，完全锁定容器的尺寸为 **736px x 407px**，并将背景色设定为设计稿中指定的深色 `#101010`。这确保了后续所有的绝对定位和 Flex 布局都能以完美比例呈现在容器内。

### 接下来
下一步，我们将进行 **组件结构拆分与数据流设定 (Step 2)**，搭建起如 `Sidebar`, `Tabs`, `Table`, `FilterDropdown` 等核心组件，并填充 Mock 数据。
