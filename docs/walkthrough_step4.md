# Walkthrough: 前端面试题 (Figma 还原)

## Step 4: 表格交互逻辑实现

本步骤我们为应用注入了灵魂，完成了所有的状态流转与过滤逻辑，并接入了实际的图标资源。

### 1. 下拉面板显隐控制与全局点击监听
在 `Table.jsx` 中：
- 使用 `filterVisible` state 控制 `FilterDropdown` 组件的挂载与卸载。
- 点击包含漏斗图标的 `.th-content` 会触发 `toggleFilter` 展开面板，并使用 `e.stopPropagation()` 阻止事件冒泡。
- 利用 `useRef` 获取表头的 DOM 节点，结合 `useEffect` 注册全局 `mousedown` 事件：当点击事件发生在表头区域（包含下拉面板）之外时，自动关闭面板 (`setFilterVisible(false)`)。

### 2. 选项多选逻辑与表格数据过滤
- **选项收集**：通过 `Array.from(new Set(data.map(item => item.type)))` 自动从表格数据中提取唯一的 `type` 作为筛选选项。
- **状态维护**：在 `Table` 级别维护 `selectedTypes` 数组，代表当前选中的复选框。
- **动态过滤**：当 `selectedTypes.length > 0` 时，渲染的 `displayData` 为 `data.filter(row => selectedTypes.includes(row.type))`，实现了数据的实时过滤。

### 3. 下拉面板内的搜索逻辑
在 `FilterDropdown.jsx` 中：
- 引入了您放置的 `@src/assets/icon_search.png` 并在输入框旁呈现。
- 维护了局部的 `searchText` 状态，捕获 `<input>` 值的变化。
- 渲染下拉复选框列表之前，先通过 `options.filter(opt => opt.toLowerCase().includes(searchText.toLowerCase()))` 进行过滤，确保只有匹配搜索词的选项才会展示在列表中。

### 接下来
至此，整个表格组件的功能与交互已经完全符合现代数据面板的要求。最后，我们将进入 **第五步：Figma 设计稿像素级还原 (100% 对齐)**，加上高亮的下划线、字号、精准色值以及毛玻璃特效，彻底完成设计稿还原！
