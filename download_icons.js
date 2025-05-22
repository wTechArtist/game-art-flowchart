// 图标下载脚本
const fs = require('fs');
const https = require('https');
const path = require('path');
const url = require('url');

// 创建icons目录（如果不存在）
if (!fs.existsSync('icons')) {
    fs.mkdirSync('icons');
}

// 读取flowchart.js中的globalLogoMap
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

    // 下载所有图标
    let downloadedCount = 0;

    icons.forEach(icon => {
        // 生成安全的文件名
        const fileName = icon.name
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-') // 将非字母数字字符替换为连字符
            .replace(/^-|-$/g, '') // 移除开头和结尾的连字符
            + path.extname(url.parse(icon.url).pathname);
        
        const filePath = path.join('icons', fileName);
        
        console.log(`正在下载: ${icon.name} -> ${filePath}`);
        
        // 下载图标
        https.get(icon.url, (response) => {
            if (response.statusCode !== 200) {
                console.error(`下载失败: ${icon.name}, 状态码: ${response.statusCode}`);
                return;
            }

            const fileStream = fs.createWriteStream(filePath);
            response.pipe(fileStream);

            fileStream.on('finish', () => {
                fileStream.close();
                downloadedCount++;
                console.log(`下载完成 (${downloadedCount}/${icons.length}): ${icon.name}`);
                
                // 所有下载完成后，更新flowchart.js中的路径
                if (downloadedCount === icons.length) {
                    updateIconPaths(data, icons);
                }
            });
        }).on('error', (err) => {
            console.error(`下载出错: ${icon.name}, 错误: ${err.message}`);
        });
    });
});

// 更新flowchart.js中的图标路径
function updateIconPaths(fileContent, icons) {
    let updatedContent = fileContent;
    
    icons.forEach(icon => {
        const fileName = icon.name
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/^-|-$/g, '') 
            + path.extname(url.parse(icon.url).pathname);
        
        const localPath = `./icons/${fileName}`;
        
        // 更新globalLogoMap中的URL
        const urlPattern = new RegExp(`'${escapeRegExp(icon.name)}'\\s*:\\s*'${escapeRegExp(icon.url)}'`);
        updatedContent = updatedContent.replace(urlPattern, `'${icon.name}': '${localPath}'`);
    });
    
    // 写入更新后的文件
    fs.writeFile('flowchart.js', updatedContent, 'utf8', (err) => {
        if (err) {
            console.error('更新flowchart.js失败:', err);
            return;
        }
        console.log('成功更新flowchart.js中的图标路径');
    });
}

// 转义正则表达式中的特殊字符
function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
} 