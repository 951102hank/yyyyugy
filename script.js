/**
 * 撰寫 JavaScript 函式：標記今日課程
 */
function highlightToday() {
    // 1. 取得今天是星期幾 (0 是週日, 1 是週一, 依此類推)
    const today = new Date().getDay();
    
    // 2. 先清除所有之前的高亮 (避免重複點擊)
    const allCells = document.querySelectorAll('td');
    allCells.forEach(cell => cell.classList.remove('highlight'));

    // 3. 根據今天日期找到對應的 class 並加上高亮
    // 例如今天是週一，就找所有 .day-1 的元素
    const todayCells = document.querySelectorAll('.day-' + today);
    
    if (todayCells.length > 0) {
        todayCells.forEach(cell => cell.classList.add('highlight'));
        alert("已為您標記今天的課程！");
    } else {
        alert("今天沒有課，或是今天不在週一至週三的範例範圍內喔！");
    }
}
