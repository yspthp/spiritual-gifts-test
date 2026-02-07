// 根據 GIFTS_DATA 自動生成 100 個問題
const QUESTIONS = [];

// 手動定義所有 100 個問題（每個恩賜 5 題）
const QUESTIONS_RAW = [
  // 1. 治理 (Administration) - 5 題
  { giftId: 'administration', text: '能有效地安排人力資源和組織計劃，以達到事工的目標。' },
  { giftId: 'administration', text: '目標明確，計劃周詳。' },
  { giftId: 'administration', text: '很自然地分派任務，為上帝的國度作出更大的貢獻。' },
  { giftId: 'administration', text: '能夠掌握決策的時機。' },
  { giftId: 'administration', text: '知道如何使夢想成真。' },

  // 2. 使徒 (Apostle) - 5 題
  { giftId: 'apostle', text: '致力為上帝開創新的工作，多數是指建立教會而言。' },
  { giftId: 'apostle', text: '喜歡冒險性的新挑戰。' },
  { giftId: 'apostle', text: '喜歡參與能改變人們生命的事工。' },
  { giftId: 'apostle', text: '迫切地想要成為基督在世上的大使。' },
  { giftId: 'apostle', text: '願意努力工作，讓教會可以為上帝完全發揮潛力。' },

  // 3. 分辨 (Discernment) - 5 題
  { giftId: 'discernment', text: '善於「讀懂」別人，並且通常是正確的。' },
  { giftId: 'discernment', text: '能識別信息的屬靈來源——是來自上帝、撒但或人。' },
  { giftId: 'discernment', text: '能識別他人自相矛盾之處。' },
  { giftId: 'discernment', text: '容易鑑定他人真正的動機和心中的盤算。' },
  { giftId: 'discernment', text: '能察覺出被扭曲或被誤傳的真理。' },

  // 4. 鼓勵 (Encouragement) - 5 題
  { giftId: 'encouragement', text: '為基督的緣故，非常樂意去啟發他人，為他們的生活帶來正面的影響。' },
  { giftId: 'encouragement', text: '與那些因信靠基督而勝過困難的人一同歡欣。' },
  { giftId: 'encouragement', text: '尋找機會幫助他人，使他們可以全面發揮在基督裡的潛力。' },
  { giftId: 'encouragement', text: '很會用言語或行動去鼓勵人。' },
  { giftId: 'encouragement', text: '為他人的成就而歡喜。' },

  // 5. 傳福音 (Evangelism) - 5 題
  { giftId: 'evangelism', text: '盡量尋找與非信徒建立關係的機會。' },
  { giftId: 'evangelism', text: '能察覺出某人願意聆聽基督的信息。' },
  { giftId: 'evangelism', text: '看過許多人接受耶穌。' },
  { giftId: 'evangelism', text: '用愛而不是單靠邏輯來將人贏向基督。' },
  { giftId: 'evangelism', text: '對還不認識基督的人非常有負擔。' },

  // 6. 信心 (Faith) - 5 題
  { giftId: 'faith', text: '不怕為上帝冒險。' },
  { giftId: 'faith', text: '因有變數而精神抖擻。' },
  { giftId: 'faith', text: '願意接受挑戰，去嘗試多數人認為不可能的事。' },
  { giftId: 'faith', text: '有熱切的禱告生活。' },
  { giftId: 'faith', text: '在所作的事工中，對上帝大有信心。' },

  // 7. 施捨 (Giving) - 5 題
  { giftId: 'giving', text: '為了上帝國度的擴展，有計劃並有目標地奉獻金錢，通常是超過收入的十分之一。' },
  { giftId: 'giving', text: '比較喜歡用不記名或以低姿態的方式來奉獻。' },
  { giftId: 'giving', text: '尋找策略性的投資方法，增加他們的資源，以致能奉獻更多金錢為上帝所用。' },
  { giftId: 'giving', text: '視他們的經濟資源為可以被上帝使用的工具。' },
  { giftId: 'giving', text: '認定上帝是一切事物的終極擁有者。' },

  // 8. 醫治 (Healing) - 5 題
  { giftId: 'healing', text: '堅定地相信，人們可以透過超自然的方式得到醫治。' },
  { giftId: 'healing', text: '祈求上帝特別使用他們去醫治別人。' },
  { giftId: 'healing', text: '充分了解到只有上帝的許可，超自然的醫治才會發生。' },
  { giftId: 'healing', text: '認為醫藥也是上帝可以選擇用來醫治的方法之一。' },
  { giftId: 'healing', text: '歡然接受他們醫治的恩賜，知道那是從上帝而來的，並將其看為榮耀上帝的一種特殊方式。' },

  // 9. 幫助 (Helps) - 5 題
  { giftId: 'helps', text: '喜歡找機會在「幕後」服事。' },
  { giftId: 'helps', text: '為他人的成功而歡喜。' },
  { giftId: 'helps', text: '常常注意到細節。' },
  { giftId: 'helps', text: '想盡方法去幫助他人。' },
  { giftId: 'helps', text: '不追求別人的讚賞。' },

  // 10. 款待 (Hospitality) - 5 題
  { giftId: 'hospitality', text: '令他周圍的人感到受尊重和被關懷。' },
  { giftId: 'hospitality', text: '常常留意在人群中被忽略的人。' },
  { giftId: 'hospitality', text: '渴望別人感受到被愛和受歡迎。' },
  { giftId: 'hospitality', text: '將自己的家視為上帝的產業，使訪客有賓至如歸的感覺。' },
  { giftId: 'hospitality', text: '無論身在何處，總是加強他人彼此間的關係。' },

  // 11. 翻方言 (Interpretation) - 5 題
  { giftId: 'interpretation', text: '能清楚明白上帝想要傳達的信息，雖然當時講話的人所用的語言是他沒學過的。' },
  { giftId: 'interpretation', text: '翻譯出上帝的信息和話語，讓信徒得到造就、安慰和勸誡。' },
  { giftId: 'interpretation', text: '傳達他人的聲音、言語和話語中的意思，使上帝得著榮耀。' },
  { giftId: 'interpretation', text: '在聚會中能解釋方言禱告的內容。' },
  { giftId: 'interpretation', text: '此恩賜通常與說方言恩賜配搭使用。' },

  // 12. 知識 (Knowledge) - 5 題
  { giftId: 'knowledge', text: '花很多時間閱讀聖經。' },
  { giftId: 'knowledge', text: '喜愛分享自己對聖經的領會。' },
  { giftId: 'knowledge', text: '喜歡幫助他人增加對上帝話語的了解。' },
  { giftId: 'knowledge', text: '因為肯花時間學習並研究聖經而受益良多。' },
  { giftId: 'knowledge', text: '喜歡回答有關聖經中困難的問題。' },

  // 13. 領導 (Leadership) - 5 題
  { giftId: 'leadership', text: '常有宏偉的遠見去為主作工，並能激勵他人朝著目標前進，使夢想成真，榮神益人。' },
  { giftId: 'leadership', text: '很自然就成為領袖。' },
  { giftId: 'leadership', text: '很會激勵個人或團隊共同努力，去完成上帝的旨意。' },
  { giftId: 'leadership', text: '很容易就能掌握「大方向」。' },
  { giftId: 'leadership', text: '會將責任分派給能擔當的人。' },

  // 14. 憐憫 (Mercy) - 5 題
  { giftId: 'mercy', text: '善於找機會去幫助有需要的人。' },
  { giftId: 'mercy', text: '花很多時間為有需要的人禱告。' },
  { giftId: 'mercy', text: '先考慮他人的需要，才考慮自己的需要。' },
  { giftId: 'mercy', text: '與哀哭的人同哭。' },
  { giftId: 'mercy', text: '去探訪有需要的人時，心中感到很滿足；喜歡探訪醫院、老人院、監牢、孤兒院、農村，或是其他上帝帶領他去的地方。' },

  // 15. 行神蹟 (Miracles) - 5 題
  { giftId: 'miracles', text: '認定禱告是個超自然的媒介，並且相信上帝能藉著禱告在人的生命中作工。' },
  { giftId: 'miracles', text: '在經歷到超自然作為的時候，將功勞和感謝全獻給上帝。' },
  { giftId: 'miracles', text: '清楚明白惟有上帝要神蹟發生的時候，才可能發生神蹟。' },
  { giftId: 'miracles', text: '將自己看為上帝可用的器皿。' },
  { giftId: 'miracles', text: '在生活中遇到不能解決的困境時，用禱告來尋求超自然的轉機。' },

  // 16. 牧養 (Shepherding) - 5 題
  { giftId: 'shepherding', text: '全力想幫助他人，使他們可以全面發揮在基督裡的潛力。' },
  { giftId: 'shepherding', text: '喜歡為他人服務並常找機會如此行。' },
  { giftId: 'shepherding', text: '在小組中，善於建立彼此信任的個人關係。' },
  { giftId: 'shepherding', text: '喜歡解決他人的需要，尤其願意花時間去幫助別人處理屬靈的問題。' },
  { giftId: 'shepherding', text: '相信人比事情更重要。' },

  // 17. 先知 (Prophecy) - 5 題
  { giftId: 'prophecy', text: '用不同的方法在公開場合傳講上帝的話語。' },
  { giftId: 'prophecy', text: '喜愛與他人分享你從聖經中領悟到的堅強信念。' },
  { giftId: 'prophecy', text: '自視為上帝的器皿，預備好讓聖靈使用，幫助別人靈命成長。' },
  { giftId: 'prophecy', text: '勇於向別人提出挑戰，為了使他們達到上帝的標準。' },
  { giftId: 'prophecy', text: '時常用直接從上帝而來的信息與別人分享，因此能安慰、激勵並勸誡祂的子民。' },

  // 18. 教師 (Teaching) - 5 題
  { giftId: 'teaching', text: '願意花時間研讀聖經，並善用聖經原則和真理。' },
  { giftId: 'teaching', text: '喜歡幫助他人清楚明白聖經。' },
  { giftId: 'teaching', text: '懂得尋找機會針對生活處境，宣講聖經的教導。' },
  { giftId: 'teaching', text: '善於幫助他人學習聖經。' },
  { giftId: 'teaching', text: '用言語或各種有效的方法傳達上帝的話語。' },

  // 19. 說方言 (Tongues) - 5 題
  { giftId: 'tongues', text: '相信是上帝在促使他們用自己不明白的語言去傳講上帝的信息，這通常是用在禱告中。' },
  { giftId: 'tongues', text: '使用「無人明白」的詞語、聲音和話語為他人代禱。' },
  { giftId: 'tongues', text: '渴慕使用那種「無人明白」的語言與上帝溝通，榮耀上帝。' },
  { giftId: 'tongues', text: '使用上帝所賜那種「無人明白」的語言，與他人分享上帝的話語或信息。' },
  { giftId: 'tongues', text: '使用上帝啟示的那種「無人明白」的語言，去安慰並勸誡他人。' },

  // 20. 智慧 (Wisdom) - 5 題
  { giftId: 'wisdom', text: '喜歡以聖經的真理來詮釋生活的處境。' },
  { giftId: 'wisdom', text: '常常是別人尋求忠告或智慧的對象。' },
  { giftId: 'wisdom', text: '喜歡輔導他人。' },
  { giftId: 'wisdom', text: '善於作正確的決定和判斷。' },
  { giftId: 'wisdom', text: '認定上帝才是智慧和人生方向的主要來源。' }
];

// 為每個問題加上 ID 和恩賜資訊
QUESTIONS_RAW.forEach((q, index) => {
  const gift = GIFTS_DATA.find(g => g.id === q.giftId);
  QUESTIONS.push({
    id: index + 1,
    giftId: q.giftId,
    giftName: gift ? gift.name : { zh: '未知', en: 'Unknown' },
    giftIcon: gift ? gift.icon : '❓',
    text: q.text
  });
});

// 打亂問題順序（可選）
function shuffleQuestions() {
  const shuffled = [...QUESTIONS];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// 依恩賜分組問題
function getQuestionsByGift(giftId) {
  return QUESTIONS.filter(q => q.giftId === giftId);
}

// 取得特定問題
function getQuestionById(id) {
  return QUESTIONS.find(q => q.id === id);
}
