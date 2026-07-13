import ClassicNavy from "../components/templates/ClassicNavy";
import MinimalLight from "../components/templates/MinimalLight";

// 模板注册表：以后新增模板，只需要在这个数组里加一项
// id: 唯一标识（用来记录用户选了哪个模板）
// name: 显示给用户看的名字
// component: 实际渲染简历的 React 组件
const templateRegistry = [
  {
    id: "classic-navy",
    name: "经典深蓝",
    component: ClassicNavy,
  },
  {
    id: "minimal-light",
    name: "极简浅色",
    component: MinimalLight,
  },
];

export default templateRegistry;