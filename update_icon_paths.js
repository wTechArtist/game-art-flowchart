// 更新图标路径脚本 - 不下载图标，只更新路径
const fs = require('fs');
const path = require('path');
const url = require('url');

// 读取flowchart.js文件
fs.readFile('flowchart.js', 'utf8', (err, data) => {
    if (err) {
        console.error('读取flowchart.js失败:', err);
        return;
    }

    // 提取globalLogoMap对象
    const logoMapMatch = data.match(/const\s+globalLogoMap\s*=\s*\{[\s\S]*?\};/);
    if (!logoMapMatch) {
        console.error('未找到globalLogoMap定义');
        return;
    }

    const logoMapStr = logoMapMatch[0];
    
    // 提取所有URL
    const urlRegex = /'([^']*?)'\s*:\s*'(https?:\/\/[^']*?)'/g;
    let match;
    const icons = [];
    
    while ((match = urlRegex.exec(logoMapStr)) !== null) {
        const softwareName = match[1];
        const iconUrl = match[2];
        icons.push({ name: softwareName, url: iconUrl });
    }

    console.log(`找到 ${icons.length} 个图标URL`);

    // 更新每个图标的路径
    let updatedContent = data;
    
    icons.forEach(icon => {
        // 生成安全的文件名
        const fileName = icon.name
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-') // 将非字母数字字符替换为连字符
            .replace(/^-|-$/g, '') // 移除开头和结尾的连字符
            + path.extname(url.parse(icon.url).pathname);
        
        const localPath = `./icons/${fileName}`;
        
        // 在控制台输出映射关系，便于手动下载
        console.log(`${icon.name} -> ${localPath}`);
        console.log(`  原始URL: ${icon.url}`);
        
        // 更新globalLogoMap中的URL
        const urlPattern = new RegExp(`'${escapeRegExp(icon.name)}'\\s*:\\s*'${escapeRegExp(icon.url)}'`);
        updatedContent = updatedContent.replace(urlPattern, `'${icon.name}': '${localPath}'`);
    });
    
    // 创建一个包含下载说明的文本文件
    let downloadInstructions = '# 图标下载说明\n\n';
    downloadInstructions += '请手动下载以下图标，并保存到相应的文件路径：\n\n';
    
    icons.forEach(icon => {
        const fileName = icon.name
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/^-|-$/g, '') 
            + path.extname(url.parse(icon.url).pathname);
        
        const localPath = `./icons/${fileName}`;
        
        downloadInstructions += `## ${icon.name}\n`;
        downloadInstructions += `- 下载链接: ${icon.url}\n`;
        downloadInstructions += `- 保存路径: ${localPath}\n\n`;
    });
    
    fs.writeFile('icon_download_instructions.md', downloadInstructions, 'utf8', (err) => {
        if (err) {
            console.error('创建下载说明文件失败:', err);
        } else {
            console.log('成功创建图标下载说明文件: icon_download_instructions.md');
        }
    });
    
    // 写入更新后的flowchart.js文件
    fs.writeFile('flowchart.js.new', updatedContent, 'utf8', (err) => {
        if (err) {
            console.error('更新flowchart.js失败:', err);
            return;
        }
        console.log('成功创建更新后的文件: flowchart.js.new');
        console.log('请检查文件内容，确认无误后手动替换原文件');
    });
});

// 转义正则表达式中的特殊字符
function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
} 