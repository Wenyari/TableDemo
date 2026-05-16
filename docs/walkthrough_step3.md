# Walkthrough: 前端面试题 (Figma 还原)

## Step 3: 基础布局与样式（粗略对齐）

在这一步，我们将各个 React 组件通过 CSS 进行排版，还原了 Figma 中的坐标和骨架层级，确保一切元素（特别是复杂的浮层）都在正确的位置。

### 1. 主从容器拆分 (App 级布局)
在 Figma 中：
- `Sidebar` 固定在左侧：`80px * 407px`。
- 主内容区从 `104px` 开始。
因此，我们为 `.app-container` 设置了 `display: flex`。
左侧给到固定的 `.sidebar` 宽度 `80px`。
右侧 `.main-content` 则通过 `flex: 1` 占据剩余空间，并通过设置 `padding-left: 24px`，完美吻合了 `80px + 24px = 104px` 的内容起始坐标。

### 2. 垂直层级拆解 (TopNav -> Tabs -> Table)
通过 Figma 提取的高度数据，我们在 `.main-content` 使用 `flex-direction: column` 进行堆叠：
- **Header**: 高度设定 `64px`，内部利用 flex 对齐文字与下划线。
- **Tabs**: 设置了 `margin-top: 16px` (来源于 Figma 的 `80px` `Y` 坐标 - `64px` 头部)。
- **Table**: 同样下移 `16px`，整体尺寸严格设置为宽 `572px` 高 `211px`，并为其增加了深色半透明的背景占位。

### 3. 表格内布局与下拉组件的绝对定位
对于表格，我们划分了三列（名称、类型、联系方式）：
- 在 `Table.jsx` 中，对 `.col-name`, `.col-type`, `.col-contact` 赋予了明确的占位宽度（例如 `160px`, `130px`）。
- **FilterDropdown 的定位策略**：我们为表头包含漏斗的 `.col-type` 单元格赋予了 `position: relative` 属性。在此基础上，下拉框通过 `position: absolute; top: 40px; left: 0;` 定位，刚好呈现在表头文字的正下方，避免了跨层级的坐标计算。

### 接下来
目前各种层级、大小与布局框架均已构建稳固。由于还没绑定完整的交互操作，我们将进入 **表格交互逻辑实现 (Step 4)**，把 Tabs 切换、筛选框的点击与数据状态（以及复选逻辑）彻底打通。
