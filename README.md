# 游戏美术创建流程图

这是一个展示视频游戏美术制作完整生命周期的交互式流程图网站，从概念设计到最终引擎整合的每一步都有详细说明。

## 主要功能

- 展示8个关键美术制作阶段：概念设计、3D建模、贴图和材质、骨骼绑定、动画、特效、UI设计、引擎整合
- 每个阶段包含详细说明、使用软件工具列表及其图标展示
- 流程之间的关系用连接线直观表示
- 点击每个流程节点可查看更多详细信息

## 技术栈

- HTML5 / CSS3 / JavaScript
- Tailwind CSS 用于样式
- LeaderLine.js 用于绘制流程连接线

## 图标本地化

项目包含多个实用工具，用于将远程图标下载并存储到本地：

1. `manual_download.sh` - Bash脚本，自动下载所有图标并更新路径
   ```bash
   chmod +x manual_download.sh
   ./manual_download.sh
   ```

2. `download_icons.js` - Node.js脚本，下载图标并自动更新flowchart.js
   ```bash
   node download_icons.js
   ```

3. `update_icon_paths.js` - 仅更新路径，生成下载指南
   ```bash
   node update_icon_paths.js
   ```

4. `icon_template.js` - 包含所有软件的本地图标路径模板

本地化图标可以解决CORS问题，提高加载速度和可靠性。

## 如何使用

直接访问：https://wTechArtist.github.io/game-art-flowchart/

## 本地开发

1. 克隆仓库
2. 直接在浏览器中打开 index.html 文件
3. 修改 flowchart.js 可自定义流程节点内容和连接关系
