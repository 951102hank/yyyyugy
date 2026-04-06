// 當頁面載入完成後執行
document.addEventListener('DOMContentLoaded', () => {
    const title = document.getElementById('main-title');

    // 點擊標題時會改變顏色
    title.addEventListener('click', () => {
        title.style.color = '#e74c3c';
        alert('你點擊了標題！這是 JavaScript 的互動效果。');
    });

    console.log("網頁已就緒，加油吧資工新鮮人！");
});
