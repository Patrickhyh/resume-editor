# 简历编辑器 Resume Editor

一个免费开源的在线简历编辑器,支持多模板切换、实时预览、自动分页、导出 PDF,数据完全保存在本地浏览器,无需注册账号。

**在线体验:** https://patrickhyh.github.io/resume-editor/

![预览截图](./screenshot.png)

---

## ✨ 功能特性

- 🎨 **多模板切换**:内置多套简历样式,可随时切换,内容不丢失
- ✏️ **实时编辑预览**:左侧填写,右侧简历实时同步更新
- 📄 **自动分页**:工作经历/项目经历较多时,自动分成多页,保持排版整齐
- 📷 **照片上传**:支持上传个人照片,自动压缩优化
- 📥 **导出 PDF**:一键导出高清 PDF,可直接投递
- 💾 **导入/导出配置**:简历数据可保存为 JSON 文件,换设备或重新编辑时直接导入,不用重新打字
- 🔒 **数据隐私**:所有数据只保存在你的浏览器里,不上传任何服务器

---

## 🚀 快速使用(在线版,推荐)

直接打开 👉 https://patrickhyh.github.io/resume-editor/

1. 在左侧表单填写你的姓名、经历、技能等信息
2. 右侧实时查看简历效果
3. 顶部下拉框可以切换不同模板样式
4. 点击「导出为 PDF」下载简历
5. 点击「导出配置」可以保存填写的数据,下次点击「导入配置」直接恢复,不用重新填写

---

## 🛠️ 本地运行(开发者)

如果你想在本地运行或者自己修改这个项目:

### 环境要求

- [Node.js](https://nodejs.org)(建议 LTS 版本)

### 安装步骤

```bash
# 1. 克隆仓库
git clone https://github.com/Patrickhyh/resume-editor.git
cd resume-editor

# 2. 安装依赖
npm install

# 3. 启动本地开发服务器
npm run dev
```

启动后,浏览器打开 `http://localhost:5173/` 即可看到效果。

### 打包 & 部署

```bash
npm run build     # 打包生成静态文件(输出到 dist 文件夹)
npm run deploy     # 部署到 GitHub Pages
```

---

## 📁 项目结构

```
src/
├── data/                  # 数据结构与常量定义
├── components/            # 编辑表单、页面容器等组件
│   └── templates/         # 简历模板样式
├── hooks/                 # 自动分页等逻辑
└── utils/                 # 导出 PDF/JSON、图片处理等工具函数
```

---

## 🧰 技术栈

- [React](https://react.dev) + [Vite](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [html2canvas-pro](https://github.com/yorickshan/html2canvas-pro) + [jsPDF](https://github.com/parallax/jsPDF)(PDF 导出)

---

## 📝 License

本项目仅供个人学习和使用,欢迎 Fork 自行修改。
