// 初始化最近使用的工具列表
let recentTools = JSON.parse(localStorage.getItem("recentTools")) || [];

// 更新最近使用工具的UI
function updateRecentTools() {
    const recentToolsList = document.getElementById('recent-tools-list');
    recentToolsList.innerHTML = ''; // 清空当前列表

    if (recentTools.length === 0) {
        recentToolsList.innerHTML = '<li>暂无最近使用记录</li>';
    } else {
        recentTools.forEach(tool => {
            const li = document.createElement('li');
            li.innerHTML = `<span class="tool-icon">🛠️</span> ${tool}`;
            recentToolsList.appendChild(li);
        });
    }
}

// 清除最近使用记录
document.getElementById('clear-recent').addEventListener('click', () => {
    localStorage.removeItem('recentTools');
    recentTools = [];
    updateRecentTools();
});

// 模拟用户点击工具，更新最近使用记录
function addToolToRecent(toolName) {
    if (!recentTools.includes(toolName)) {
        recentTools.push(toolName);
    }
    // 保证只保存最近的5条记录
    if (recentTools.length > 5) {
        recentTools.shift();
    }
    localStorage.setItem('recentTools', JSON.stringify(recentTools));
    updateRecentTools();
}

// 示例：用户点击工具1，记录到最近使用工具
addToolToRecent('工具1');
addToolToRecent('工具2');

// 初次加载时更新最近使用的工具列表
updateRecentTools();
