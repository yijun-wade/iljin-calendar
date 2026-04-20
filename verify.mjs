// 일진 계산 검증 스크립트
// 실행: node verify.mjs

const CHEONGAN = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'];
const JIJI = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'];

// 기준: 2027년 2월 1일 = 辛亥 (index 47)
const ANCHOR = new Date(2027, 1, 1);
const ANCHOR_IDX = 47;

function getIljin(date) {
  const local = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  const anchor = new Date(ANCHOR.getFullYear(), ANCHOR.getMonth(), ANCHOR.getDate());
  const diff = Math.round((local - anchor) / 86400000);
  const idx = ((ANCHOR_IDX + diff) % 60 + 60) % 60;
  return {
    full: CHEONGAN[idx % 10] + JIJI[idx % 12],
    idx,
  };
}

console.log('=== 일진 검증 (2027년 2월) ===\n');

const testCases = [
  { date: new Date(2027, 1, 1),  expected: '辛亥' },
  { date: new Date(2027, 1, 4),  expected: '甲寅' }, // 입춘
  { date: new Date(2027, 1, 7),  expected: '丁巳' }, // 뱀 ✅
  { date: new Date(2027, 1, 8),  expected: '戊午' }, // 말 ✅
  { date: new Date(2027, 1, 9),  expected: '己未' }, // 양 ✅
  { date: new Date(2027, 1, 19), expected: '己巳' }, // 뱀 ✅
  { date: new Date(2027, 1, 20), expected: '庚午' }, // 말 ✅
  { date: new Date(2027, 1, 21), expected: '辛未' }, // 양 ✅
];

let allPass = true;
for (const { date, expected } of testCases) {
  const result = getIljin(date);
  const pass = result.full === expected;
  if (!pass) allPass = false;
  const dateStr = `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,'0')}-${String(date.getDate()).padStart(2,'0')}`;
  console.log(`${pass ? '✅' : '❌'} ${dateStr} → ${result.full} (기대: ${expected})`);
}

console.log(`\n${allPass ? '🎉 전체 통과' : '⚠️  일부 실패'}`);
