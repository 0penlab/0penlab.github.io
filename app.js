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
            li.innerHTML = `${tool} <button class="use-again" onclick="useTool('${tool}')">再次使用</button>`;
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

// 模拟用户点击工具，记录最近使用的工具
function useTool(toolName) {
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

// 初次加载时更新最近使用的工具列表
updateRecentTools();
