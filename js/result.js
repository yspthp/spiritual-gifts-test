// 結果頁面處理類別
class ResultsHandler {
  constructor() {
    this.results = null;
    this.loadResults();
  }

  // 載入結果
  loadResults() {
    const saved = localStorage.getItem('sg-test-results');
    if (saved) {
      this.results = JSON.parse(saved);
      return true;
    }
    return false;
  }

  // 取得前 N 名恩賜
  getTopGifts(n = 5) {
    if (!this.results) return [];
    return this.results.gifts.slice(0, n);
  }

  // 取得所有恩賜
  getAllGifts() {
    if (!this.results) return [];
    return this.results.gifts;
  }

  // 生成個人化描述
  generatePersonalDescription() {
    const top3 = this.getTopGifts(3);
    if (top3.length < 3) return '請先完成測驗';

    const [gift1, gift2, gift3] = top3;

    // 預設描述模板
    const templates = {
      // 教導型組合
      'teaching-knowledge-wisdom': {
        title: '智慧的真理教師',
        description: `你是一位充滿智慧的真理教師 📚 你不僅深入研讀聖經，更能將複雜的真理用清晰易懂的方式傳達。你的教導不只是知識的傳遞，更帶著屬天的智慧，能夠幫助人在生活中應用神的話語。`
      },
      
      // 牧養型組合
      'shepherding-mercy-encouragement': {
        title: '溫暖的生命牧者',
        description: `你是一位溫暖的生命牧者 🐑 你對人有深刻的關懷，能夠敏銳察覺他人的需要。你的服事充滿憐憫和鼓勵，讓人在你身邊感到被愛、被接納、被建造。你相信每個生命都值得被好好牧養。`
      },
      
      // 領導型組合
      'leadership-administration-wisdom': {
        title: '有遠見的策略領袖',
        description: `你是一位有遠見的策略領袖 👑 你能夠看見大局，制定清晰的計劃，並有效地帶領團隊朝目標前進。你的領導充滿智慧，能夠在複雜的情況中做出正確的決策，為神的國度帶來實質的影響。`
      },
      
      // 福音型組合
      'evangelism-faith-prophecy': {
        title: '熱情的福音使者',
        description: `你是一位熱情的福音使者 📢 你對失喪靈魂有強烈的負擔，勇於分享信仰，並相信神能行大事。你的見證和宣講能夠觸動人心，帶領人歸向基督。你是神手中得人如得魚的漁夫。`
      },
      
      // 服事型組合
      'helps-hospitality-mercy': {
        title: '愛心的實際服事者',
        description: `你是一位愛心的實際服事者 🤝 你總是注意到被忽略的人和細節，願意付出時間和精力去關懷有需要的人。你的服事讓人感受到神的愛和接納，你是教會中不可或缺的祝福。`
      }
    };

    // 嘗試匹配組合
    const key = `${gift1.id}-${gift2.id}-${gift3.id}`;
    if (templates[key]) {
      return templates[key];
    }

    // 預設描述
    return {
      title: `獨特的${gift1.name.zh}者`,
      description: `你是一位獨特的${gift1.name.zh}者 ${gift1.icon} 神賜給你特別的恩賜組合：${gift1.name.zh}、${gift2.name.zh}和${gift3.name.zh}。這個組合使你能夠在祂的國度中發揮獨特的影響力，成為祝福他人的管道。`
    };
  }

  // 計算百分位數
  calculatePercentile(score, maxScore = 15) {
    const percentage = (score / maxScore) * 100;
    // 簡化計算：假設常態分佈
    return Math.min(95, Math.max(5, Math.round(percentage * 0.9)));
  }

  // 生成服事建議
  generateMinistryRecommendations() {
    const top3 = this.getTopGifts(3);
    const recommendations = [];

    top3.forEach(gift => {
      if (gift.ministries && gift.ministries.length > 0) {
        recommendations.push({
          gift: gift.name.zh,
          icon: gift.icon,
          ministries: gift.ministries
        });
      }
    });

    return recommendations;
  }

  // 匯出報告為文字
  exportAsText() {
    if (!this.results) return '';

    const top5 = this.getTopGifts(5);
    const description = this.generatePersonalDescription();
    
    let report = '='.repeat(60) + '\n';
    report += '屬靈恩賜評測報告\n';
    report += 'Spiritual Gifts Assessment Report\n';
    report += '='.repeat(60) + '\n\n';
    
    report += `測驗日期：${new Date(this.results.timestamp).toLocaleDateString('zh-TW')}\n`;
    report += `完成時間：${new Date(this.results.timestamp).toLocaleTimeString('zh-TW')}\n\n`;
    
    report += '【你的恩賜類型】\n';
    report += '-'.repeat(60) + '\n';
    report += `${description.title}\n\n`;
    report += `${description.description}\n\n`;
    
    report += '【前 5 大恩賜】\n';
    report += '-'.repeat(60) + '\n';
    top5.forEach((gift, index) => {
      report += `${index + 1}. ${gift.icon} ${gift.name.zh} (${gift.name.en})\n`;
      report += `   得分：${gift.totalScore}/15 (${gift.percentage}%)\n`;
      report += `   排名：超越 ${this.calculatePercentile(gift.totalScore)}% 的受測者\n`;
      report += `   描述：${gift.description}\n\n`;
    });
    
    report += '【詳細分析】\n';
    report += '-'.repeat(60) + '\n\n';
    
    top5.slice(0, 3).forEach(gift => {
      report += `${gift.name.zh} (${gift.name.en}) ${gift.icon}\n`;
      report += `${'='.repeat(40)}\n\n`;
      
      report += '特質：\n';
      gift.indicators.forEach(trait => {
        report += `  ✓ ${trait}\n`;
      });
      report += '\n';
      
      report += '適合的服事：\n';
      gift.ministries.forEach(ministry => {
        report += `  → ${ministry}\n`;
      });
      report += '\n\n';
    });
    
    report += '【反思問題】\n';
    report += '-'.repeat(60) + '\n';
    report += '我可以怎樣使用這些恩賜去服事別人？\n\n';
    
    const reflection = localStorage.getItem('sg-reflection');
    if (reflection) {
      report += reflection + '\n\n';
    } else {
      report += '（尚未填寫反思）\n\n';
    }
    
    report += '【下一步行動】\n';
    report += '-'.repeat(60) + '\n';
    report += '1. 與牧者或小組長分享你的恩賜報告\n';
    report += '2. 尋找教會中與你恩賜相符的服事機會\n';
    report += '3. 開始小規模嘗試，操練你的恩賜\n';
    report += '4. 持續學習成長，發展你的恩賜\n\n';
    
    report += '='.repeat(60) + '\n';
    report += '願神使用你的恩賜，成為祂手中貴重的器皿！\n';
    report += '"各人要照所得的恩賜彼此服事，作神百般恩賜的好管家。"\n';
    report += '（彼得前書 4:10）\n';
    report += '='.repeat(60) + '\n';
    
    return report;
  }

  // 生成分享文字
  generateShareText() {
    const top3 = this.getTopGifts(3);
    const description = this.generatePersonalDescription();
    
    let shareText = '🎯 我完成了屬靈恩賜評測！\n\n';
    shareText += `我的恩賜類型：${description.title}\n\n`;
    shareText += '我的前三大恩賜是：\n';
    top3.forEach((gift, index) => {
      shareText += `${index + 1}. ${gift.icon} ${gift.name.zh} (${gift.percentage}%)\n`;
    });
    shareText += '\n你也來測測看，發現神給你的獨特恩賜吧！';
    
    return shareText;
  }
}
