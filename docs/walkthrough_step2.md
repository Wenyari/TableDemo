# Walkthrough: 前端面试题 (Figma 还原)

## Step 2: 组件结构拆分与数据流

在本步骤中，我们将整个页面从逻辑上划分为多个独立可复用的 React 组件，并建立了自上而下的数据流机制。

### 1. 结构拆分
在 `src/components/` 目录下，我们分别建立了：
- **`Sidebar.jsx`**: 左侧深色毛玻璃占位区域。
- **`Tabs.jsx`**: 顶部导航区域，包含 Title 以及“订单统计 / 订单列表”两个选项卡的切换结构。它接收 `tabs`, `activeTab` 和 `onTabChange` 等 Props，实现状态提升。
- **`Table.jsx`**: 核心表格结构。它不仅负责映射传递下来的 `data` 数组渲染数据行，还在自身内部管理了一个 `filterVisible` 状态，用于控制下拉筛选菜单的展示与隐藏。
- **`FilterDropdown.jsx`**: 下拉筛选菜单浮层。它包含一个搜索框和根据 `options` 遍历生成的 Checkbox 列表。

### 2. Mock 数据与顶层状态流
我们在 `src/App.jsx` 作为顶层容器，定义了 `mockTableData` 用于模拟从后端获取的数据集：
```javascript
const mockTableData = [
  { id: 1, name: '整数001', type: 'AAAA', contact: '10887388928' },
  { id: 2, name: '整数002', type: 'BBBB', contact: '10887388928' },
//...
```
同时在 App 中维护了 `activeTab` 状态，并将数据通过 Props 传递给 `Tabs` 和 `Table`。至此，骨架和逻辑流已经跑通，接下来的步骤即可对这些骨架填充样式。

### 接下来
下一步，我们将进行 **基础布局与样式（粗略对齐） (Step 3)**，编写 CSS 让这些零散的 HTML 标签在屏幕上通过 Flex 和绝对定位排列成 Figma 中的样子。
