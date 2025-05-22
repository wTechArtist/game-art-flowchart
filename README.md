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

项目所有软件图标均已下载到本地 `icons/` 目录中，并通过 `flowchart.js` 直接引用本地路径。这解决了CORS问题，提高了加载速度和可靠性。

要重新下载或更新所有图标，请使用项目根目录下的 `download_icons.sh` 脚本：

```bash
# 确保脚本有执行权限
chmod +x download_icons.sh

# 执行脚本下载所有图标
./download_icons.sh
```

此脚本会将图标分别下载到 `icons/icons8` 和 `icons/flaticon` 目录中。

## 如何使用

直接访问：https://wTechArtist.github.io/game-art-flowchart/

## 本地开发

1. 克隆仓库
2. 直接在浏览器中打开 `index.html` 文件
3. 修改 `flowchart.js` 可自定义流程节点内容和连接关系
