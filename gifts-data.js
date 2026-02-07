// 20種屬靈恩賜資料
const GIFTS_DATA = [
  {
    id: 'administration',
    name: { zh: '治理', en: 'Administration' },
    icon: '📋',
    description: '能有效地安排人力資源和組織計劃，以達到事工的目標。',
    indicators: [
      '目標明確，計劃周詳',
      '很自然地分派任務',
      '能夠掌握決策的時機',
      '知道如何使夢想成真'
    ],
    ministries: ['教會行政管理', '活動統籌', '專案管理', '團隊協調']
  },
  {
    id: 'apostle',
    name: { zh: '使徒', en: 'Apostle' },
    icon: '🌍',
    description: '致力為上帝開創新的工作，多數是指建立教會而言。',
    indicators: [
      '喜歡冒險性的新挑戰',
      '喜歡參與能改變人們生命的事工',
      '迫切地想要成為基督在世上的大使'
    ],
    ministries: ['宣教事工', '開拓教會', '跨文化服事', '福音拓展']
  },
  {
    id: 'discernment',
    name: { zh: '分辨', en: 'Discernment' },
    icon: '👁️',
    description: '善於「讀懂」別人，並且通常是正確的。',
    indicators: [
      '能識別信息的屬靈來源',
      '能識別他人自相矛盾之處',
      '容易鑑定他人真正的動機'
    ],
    ministries: ['輔導事工', '屬靈指導', '教會守望', '真理辨別']
  },
  {
    id: 'encouragement',
    name: { zh: '鼓勵', en: 'Encouragement' },
    icon: '💪',
    description: '非常樂意去啟發他人，為他們的生活帶來正面的影響。',
    indicators: [
      '很會用言語或行動去鼓勵人',
      '為他人的成就而歡喜',
      '尋找機會幫助他人發揮潛力'
    ],
    ministries: ['關懷探訪', '小組輔導', '新人關懷', '生命陪伴']
  },
  {
    id: 'evangelism',
    name: { zh: '傳福音', en: 'Evangelism' },
    icon: '📢',
    description: '盡量尋找與非信徒建立關係的機會。',
    indicators: [
      '能察覺出某人願意聆聽基督的信息',
      '看過許多人接受耶穌',
      '對還不認識基督的人非常有負擔'
    ],
    ministries: ['佈道會', '福音外展', '個人佈道', '校園福音']
  },
  {
    id: 'faith',
    name: { zh: '信心', en: 'Faith' },
    icon: '⭐',
    description: '不怕為上帝冒險。',
    indicators: [
      '因有變數而精神抖擻',
      '願意接受挑戰去嘗試不可能的事',
      '有熱切的禱告生活'
    ],
    ministries: ['代禱事工', '信心宣告', '異象推動', '突破性服事']
  },
  {
    id: 'giving',
    name: { zh: '施捨', en: 'Giving' },
    icon: '💝',
    description: '有計劃並有目標地奉獻金錢，通常是超過收入的十分之一。',
    indicators: [
      '比較喜歡用不記名方式來奉獻',
      '視經濟資源為可以被上帝使用的工具',
      '認定上帝是一切事物的終極擁有者'
    ],
    ministries: ['奉獻支持', '慈善事工', '資源調配', '財務管理']
  },
  {
    id: 'healing',
    name: { zh: '醫治', en: 'Healing' },
    icon: '🙏',
    description: '堅定地相信，人們可以透過超自然的方式得到醫治。',
    indicators: [
      '祈求上帝特別使用他們去醫治別人',
      '充分了解到只有上帝的許可，超自然的醫治才會發生'
    ],
    ministries: ['醫治禱告', '病人探訪', '醫療宣教', '身心靈關懷']
  },
  {
    id: 'helps',
    name: { zh: '幫助', en: 'Helps' },
    icon: '🤝',
    description: '喜歡找機會在「幕後」服事。',
    indicators: [
      '為他人的成功而歡喜',
      '常常注意到細節',
      '想盡方法去幫助他人',
      '不追求別人的讚賞'
    ],
    ministries: ['後勤支援', '場地佈置', '接待服務', '行政協助']
  },
  {
    id: 'hospitality',
    name: { zh: '款待', en: 'Hospitality' },
    icon: '🏠',
    description: '令他周圍的人感到受尊重和被關懷。',
    indicators: [
      '常常留意在人群中被忽略的人',
      '渴望別人感受到被愛和受歡迎',
      '將自己的家視為上帝的產業'
    ],
    ministries: ['接待事工', '愛筵服事', '新朋友關懷', '家庭小組']
  },
  {
    id: 'interpretation',
    name: { zh: '翻方言', en: 'Interpretation' },
    icon: '🗣️',
    description: '能清楚明白上帝想要傳達的信息。',
    indicators: [
      '翻譯出上帝的信息和話語',
      '在聚會中能解釋方言禱告的內容'
    ],
    ministries: ['敬拜聚會', '禱告會', '靈恩服事', '信息傳譯']
  },
  {
    id: 'knowledge',
    name: { zh: '知識', en: 'Knowledge' },
    icon: '📚',
    description: '花很多時間閱讀聖經。',
    indicators: [
      '喜愛分享自己對聖經的領會',
      '喜歡幫助他人增加對上帝話語的了解',
      '喜歡回答有關聖經中困難的問題'
    ],
    ministries: ['查經班', '聖經教導', '神學研究', '真理裝備']
  },
  {
    id: 'leadership',
    name: { zh: '領導', en: 'Leadership' },
    icon: '👑',
    description: '常有宏偉的遠見去為主作工，並能激勵他人朝著目標前進。',
    indicators: [
      '很自然就成為領袖',
      '很會激勵個人或團隊共同努力',
      '很容易就能掌握「大方向」'
    ],
    ministries: ['團隊領導', '異象推動', '策略規劃', '組織管理']
  },
  {
    id: 'mercy',
    name: { zh: '憐憫', en: 'Mercy' },
    icon: '❤️',
    description: '善於找機會去幫助有需要的人。',
    indicators: [
      '花很多時間為有需要的人禱告',
      '先考慮他人的需要',
      '與哀哭的人同哭'
    ],
    ministries: ['關懷探訪', '社區服務', '弱勢關懷', '醫院探訪']
  },
  {
    id: 'miracles',
    name: { zh: '行神蹟', en: 'Miracles' },
    icon: '✨',
    description: '認定禱告是個超自然的媒介，並且相信上帝能藉著禱告在人的生命中作工。',
    indicators: [
      '在經歷到超自然作為的時候，將功勞和感謝全獻給上帝',
      '清楚明白惟有上帝要神蹟發生的時候，才可能發生神蹟'
    ],
    ministries: ['神蹟禱告', '信心宣告', '權能服事', '醫治釋放']
  },
  {
    id: 'shepherding',
    name: { zh: '牧養', en: 'Shepherding' },
    icon: '🐑',
    description: '全力想幫助他人，使他們可以全面發揮在基督裡的潛力。',
    indicators: [
      '喜歡為他人服務並常找機會如此行',
      '在小組中，善於建立彼此信任的個人關係',
      '相信人比事情更重要'
    ],
    ministries: ['小組牧養', '門徒訓練', '生命陪伴', '靈命關懷']
  },
  {
    id: 'prophecy',
    name: { zh: '先知', en: 'Prophecy' },
    icon: '🔥',
    description: '用不同的方法在公開場合傳講上帝的話語。',
    indicators: [
      '喜愛與他人分享你從聖經中領悟到的堅強信念',
      '勇於向別人提出挑戰',
      '時常用直接從上帝而來的信息與別人分享'
    ],
    ministries: ['講道服事', '先知性禱告', '屬靈宣告', '信息傳遞']
  },
  {
    id: 'teaching',
    name: { zh: '教師', en: 'Teaching' },
    icon: '👨‍🏫',
    description: '願意花時間研讀聖經，並善用聖經原則和真理。',
    indicators: [
      '喜歡幫助他人清楚明白聖經',
      '懂得尋找機會針對生活處境，宣講聖經的教導',
      '善於幫助他人學習聖經'
    ],
    ministries: ['主日學', '聖經教導', '門徒訓練', '真理裝備']
  },
  {
    id: 'tongues',
    name: { zh: '說方言', en: 'Tongues' },
    icon: '🌐',
    description: '相信是上帝在促使他們用自己不明白的語言去傳講上帝的信息。',
    indicators: [
      '使用「無人明白」的詞語、聲音和話語為他人代禱',
      '渴慕使用那種「無人明白」的語言與上帝溝通'
    ],
    ministries: ['方言禱告', '靈恩敬拜', '代禱服事', '屬靈爭戰']
  },
  {
    id: 'wisdom',
    name: { zh: '智慧', en: 'Wisdom' },
    icon: '🦉',
    description: '喜歡以聖經的真理來詮釋生活的處境。',
    indicators: [
      '常常是別人尋求忠告或智慧的對象',
      '喜歡輔導他人',
      '善於作正確的決定和判斷'
    ],
    ministries: ['輔導諮商', '決策顧問', '生命教練', '智慧分享']
  }
];

console.log('恩賜資料載入完成，共', GIFTS_DATA.length, '個恩賜');
