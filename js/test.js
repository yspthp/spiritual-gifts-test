// ==========================================
// 屬靈恩賜測驗類別
// ==========================================
console.log('開始載入 test.js...');

class SpiritualGiftsTest {
  constructor() {
    console.log('初始化 SpiritualGiftsTest 類別...');
    
    // 檢查依賴
    if (typeof QUESTIONS === 'undefined') {
      throw new Error('QUESTIONS 未定義，請確認 questions-data.js 已載入');
    }
    
    this.questions = QUESTIONS;
    this.currentIndex = 0;
    this.answers = {};
    this.loadProgress();
    
    console.log('SpiritualGiftsTest 初始化完成');
  }

  // 載入進度
  loadProgress() {
    try {
      const saved = localStorage.getItem('sg-test-progress');
      if (saved) {
        const data = JSON.parse(saved);
        this.currentIndex = data.currentIndex || 0;
        this.answers = data.answers || {};
        console.log('✓ 載入進度:', this.currentIndex + 1, '/', this.questions.length);
        console.log('✓ 已答題數:', Object.keys(this.answers).length);
      } else {
        console.log('沒有儲存的進度，從頭開始');
      }
    } catch (error) {
      console.error('載入進度時發生錯誤:', error);
      this.currentIndex = 0;
      this.answers = {};
    }
  }

  // 儲存進度
  saveProgress() {
    try {
      const data = {
        currentIndex: this.currentIndex,
        answers: this.answers,
        timestamp: Date.now()
      };
      localStorage.setItem('sg-test-progress', JSON.stringify(data));
      console.log('進度已儲存:', this.currentIndex + 1, '/', this.questions.length);
    } catch (error) {
      console.error('儲存進度時發生錯誤:', error);
    }
  }

  // 取得當前問題
  getCurrentQuestion() {
    return this.questions[this.currentIndex];
  }

  // 回答問題
  answer(value) {
    const question = this.getCurrentQuestion();
    let score = 1;
    
    if (value === '有') {
      score = 3;
    } else if (value === '或許有') {
      score = 2;
    } else if (value === '沒有') {
      score = 1;
    }
    
    this.answers[question.id] = {
      questionId: question.id,
      giftId: question.giftId,
      value: value,
      score: score,
      timestamp: Date.now()
    };
    
    this.saveProgress();
    console.log('✓ 回答問題', question.id, ':', value, '(得分:', score, ')');
  }

  // 下一題
  next() {
    if (this.currentIndex < this.questions.length - 1) {
      this.currentIndex++;
      this.saveProgress();
      return true;
    }
    return false;
  }

  // 上一題
  previous() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.saveProgress();
      return true;
    }
    return false;
  }

  // 取得進度百分比
  getProgress() {
    return Math.round(((this.currentIndex + 1) / this.questions.length) * 100);
  }

  // 檢查是否完成
  isComplete() {
    const answeredCount = Object.keys(this.answers).length;
    const isComplete = answeredCount === this.questions.length;
    console.log('完成檢查:', answeredCount, '/', this.questions.length, '=', isComplete);
    return isComplete;
  }

  // 計算結果
  calculateResults() {
    console.log('=== 開始計算結果 ===');
    console.log('答案數量:', Object.keys(this.answers).length);
    
    // 檢查 GIFTS_DATA
    if (typeof GIFTS_DATA === 'undefined') {
      console.error('❌ GIFTS_DATA 未定義');
      alert('錯誤：恩賜資料未載入');
      return [];
    }
    
    // 初始化恩賜分數物件
    const giftScores = {};
    
    GIFTS_DATA.forEach(gift => {
      giftScores[gift.id] = {
        id: gift.id,
        name: gift.name,
        icon: gift.icon,
        description: gift.description,
        indicators: gift.indicators,
        ministries: gift.ministries,
        totalScore: 0,
        maxScore: 15,
        percentage: 0,
        answers: []
      };
    });

    // 累計每個恩賜的分數
    Object.values(this.answers).forEach(answer => {
      if (giftScores[answer.giftId]) {
        giftScores[answer.giftId].totalScore += answer.score;
        giftScores[answer.giftId].answers.push(answer);
      } else {
        console.warn('找不到恩賜:', answer.giftId);
      }
    });

    // 計算百分比
    Object.keys(giftScores).forEach(giftId => {
      const gift = giftScores[giftId];
      gift.percentage = Math.round((gift.totalScore / gift.maxScore) * 100);
    });

    // 排序（分數高到低）
    const sortedGifts = Object.values(giftScores).sort((a, b) => {
      if (b.totalScore !== a.totalScore) {
        return b.totalScore - a.totalScore;
      }
      return a.name.zh.localeCompare(b.name.zh);
    });

    console.log('計算完成，前5名:');
    sortedGifts.slice(0, 5).forEach((g, i) => {
      console.log(`${i+1}. ${g.name.zh}: ${g.totalScore}/15 (${g.percentage}%)`);
    });

    // 建立結果物件
    const results = {
      gifts: sortedGifts,
      timestamp: Date.now(),
      topGifts: sortedGifts.slice(0, 5)
    };
    
    // 儲存到 localStorage
    try {
      const jsonString = JSON.stringify(results);
      localStorage.setItem('sg-test-results', jsonString);
      console.log('✓ 結果已儲存到 localStorage');
      console.log('✓ 資料大小:', jsonString.length, '字元');
      
      // 驗證儲存
      const saved = localStorage.getItem('sg-test-results');
      if (saved) {
        console.log('✓ 驗證成功：資料已正確儲存');
      } else {
        console.error('❌ 驗證失敗：無法讀取剛儲存的資料');
      }
    } catch (error) {
      console.error('❌ 儲存結果時發生錯誤:', error);
      alert('儲存結果時發生錯誤：' + error.message);
    }

    console.log('=== 結果計算完成 ===');
    return sortedGifts;
  }

  // 重置測驗
  reset() {
    console.log('重置測驗...');
    this.currentIndex = 0;
    this.answers = {};
    localStorage.removeItem('sg-test-progress');
    localStorage.removeItem('sg-test-results');
    console.log('✓ 測驗已重置');
  }
}

console.log('✓ test.js 載入完成');
console.log('✓ SpiritualGiftsTest 類別已定義');

// 驗證類別是否可用
if (typeof SpiritualGiftsTest !== 'undefined') {
  console.log('✓ SpiritualGiftsTest 驗證成功');
} else {
  console.error('❌ SpiritualGiftsTest 驗證失敗');
}
