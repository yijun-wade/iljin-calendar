// 지지별 띠동물 매핑
export const JIJI_ANIMAL = {
  '子': { name: '쥐', emoji: '🐭', en: 'rat' },
  '丑': { name: '소', emoji: '🐮', en: 'ox' },
  '寅': { name: '호랑이', emoji: '🐯', en: 'tiger' },
  '卯': { name: '토끼', emoji: '🐰', en: 'rabbit' },
  '辰': { name: '용', emoji: '🐲', en: 'dragon' },
  '巳': { name: '뱀', emoji: '🐍', en: 'snake' },
  '午': { name: '말', emoji: '🐴', en: 'horse' },
  '未': { name: '양', emoji: '🐑', en: 'goat' },
  '申': { name: '원숭이', emoji: '🐒', en: 'monkey' },
  '酉': { name: '닭', emoji: '🐓', en: 'rooster' },
  '戌': { name: '개', emoji: '🐶', en: 'dog' },
  '亥': { name: '돼지', emoji: '🐷', en: 'pig' },
};

export function getAnimal(jiji) {
  return JIJI_ANIMAL[jiji] || null;
}
