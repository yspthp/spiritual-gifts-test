// 工具函數集合

// LocalStorage 操作
const StorageUtils = {
  // 儲存資料
  save(key, data) {
    try {
      localStorage.setItem(key, JSON.stringify(data));
      return true;
    } catch (e) {
      console.error('儲存失敗:', e);
      return false;
    }
  },

  // 讀取資料
  load(key) {
    try {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : null;
    } catch (e) {
      console.error('讀取失敗:', e);
      return null;
    }
  },

  // 刪除資料
  remove(key) {
    try {
      localStorage.removeItem(key);
      return true;
    } catch (e) {
      console.error('刪除失敗:', e);
      return false;
    }
  },

  // 清空所有資料
  clear() {
    try {
      localStorage.clear();
      return true;
    } catch (e) {
      console.error('清空失敗:', e);
      return false;
    }
  }
};

// 日期格式化
const DateUtils = {
  // 格式化為 YYYY-MM-DD
  formatDate(date = new Date()) {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  },

  // 格式化為 YYYY-MM-DD HH:mm:ss
  formatDateTime(date = new Date()) {
    const d = new Date(date);
    const dateStr = this.formatDate(d);
    const hours = String(d.getHours()).padStart(2, '0');
    const minutes = String(d.getMinutes()).padStart(2, '0');
    const seconds = String(d.getSeconds()).padStart(2, '0');
    return `${dateStr} ${hours}:${minutes}:${seconds}`;
  },

  // 計算時間差（分鐘）
  getMinutesDiff(startTime, endTime = new Date()) {
    const diff = new Date(endTime) - new Date(startTime);
    return Math.floor(diff / 1000 / 60);
  }
};

// 檔案下載
const FileUtils = {
  // 下載文字檔
  downloadText(content, filename = 'download.txt') {
    const blob = new Blob([content], { type: 'text/
