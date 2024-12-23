// 模拟工具点击历史
let recentHistory = [];

// 更新页面显示的最近使用的工具记录
function updateRecentHistory() {
  const historyList = document.getElementById('recent-history');
  historyList.innerHTML = ''; // 清空当前记录

  recentHistory.slice(0, 5).forEach((tool) => { // 只显示最近5个工具
    const listItem = document.createElement('li');
    listItem.textContent = tool;
    historyList.appendChild(listItem);
  });
}

// 监听工具点击事件
document.querySelectorAll('.tool-link').forEach((toolLink) => {
  toolLink.addEventListener('click', (e) => {
    const toolName = e.target.getAttribute('data-tool-name');
    // 将工具记录到历史中
    recentHistory.unshift(toolName); // 将新工具添加到历史顶部
    recentHistory = recentHistory.slice(0, 5); // 限制最多保存5条历史记录
    updateRecentHistory();
  });
});

// 初始化
document.addEventListener('DOMContentLoaded', updateRecentHistory);
