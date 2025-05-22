#!/bin/bash

# 创建icons目录（如果不存在）
mkdir -p icons

# 使用Node.js提取图标URL和文件名
node -e '
const fs = require("fs");
const url = require("url");
const path = require("path");

// 读取flowchart.js文件
const data = fs.readFileSync("flowchart.js", "utf8");

// 提取globalLogoMap对象
const logoMapMatch = data.match(/const\s+globalLogoMap\s*=\s*\{[\s\S]*?\};/);
if (!logoMapMatch) {
    console.error("未找到globalLogoMap定义");
    process.exit(1);
}

const logoMapStr = logoMapMatch[0];

// 提取所有URL
const urlRegex = /[\'\"]([^\'\"]*)[\'\"]:\s*[\'\"]((https?:\/\/[^\'\"]*?))[\'\"]([,}])/g;
let match;
const downloadCommands = [];

while ((match = urlRegex.exec(logoMapStr)) !== null) {
    const softwareName = match[1];
    const iconUrl = match[2];
    
    // 生成安全的文件名
    const fileName = softwareName
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "") 
        + path.extname(url.parse(iconUrl).pathname);
    
    const localPath = `./icons/${fileName}`;
    
    // 生成wget或curl命令
    const command = `wget -O "${localPath}" "${iconUrl}" || curl -o "${localPath}" "${iconUrl}"`;
    downloadCommands.push(command);
    
    // 更新flowchart.js中的URL (创建sed命令)
    const sedCommand = `sed -i "s|${iconUrl.replace(/|/g, "\\|")}|${localPath}|g" flowchart.js`;
    downloadCommands.push(sedCommand);
}

console.log(downloadCommands.join("\n"));
' > download_commands.txt

# 执行下载命令
echo "开始下载图标..."
cat download_commands.txt | while read cmd; do
  echo "执行: $cmd"
  eval $cmd
  # 添加短暂延迟，避免过快请求
  sleep 0.5
done

echo "图标下载完成！所有图标已保存到icons目录"
echo "flowchart.js中的路径已更新为本地路径" 