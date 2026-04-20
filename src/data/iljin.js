// 60갑자 데이터
export const CHEONGAN = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'];
export const JIJI = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'];

export const CHEONGAN_KO = ['갑', '을', '병', '정', '무', '기', '경', '신', '임', '계'];
export const JIJI_KO = ['자', '축', '인', '묘', '진', '사', '오', '미', '신', '유', '술', '해'];

// 기준점: 2027년 2월 1일 = 辛亥 (wikidocs + 실물 달력 교차 검증)
// 辛 = 천간 7번 (0-indexed), 亥 = 지지 11번 (0-indexed)
// 60갑자 순번: 천간idx + 지지idx에서 계산
// 辛亥 = 천간 7(辛), 지지 11(亥) → 60갑자 48번째 (1-indexed), 즉 index 47
const ANCHOR_DATE = new Date(2027, 1, 1); // 2027년 2월 1일 (month는 0-indexed)
const ANCHOR_GANJI_INDEX = 47; // 辛亥 = 60갑자 중 48번째 (0-indexed: 47)

// 날짜를 YYYY-MM-DD 형태로 로컬 기준 처리
function toLocalDate(date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

/**
 * 특정 날짜의 60갑자 index (0~59) 반환
 */
export function getGanjiIndex(date) {
  const local = toLocalDate(date);
  const anchor = toLocalDate(ANCHOR_DATE);
  const diffDays = Math.round((local - anchor) / (1000 * 60 * 60 * 24));
  return ((ANCHOR_GANJI_INDEX + diffDays) % 60 + 60) % 60;
}

/**
 * 특정 날짜의 일진 정보 반환
 */
export function getIljin(date) {
  const idx = getGanjiIndex(date);
  const cheonganIdx = idx % 10;
  const jijiIdx = idx % 12;

  return {
    index: idx,
    cheongan: CHEONGAN[cheonganIdx],
    jiji: JIJI[jijiIdx],
    cheonganKo: CHEONGAN_KO[cheonganIdx],
    jijiKo: JIJI_KO[jijiIdx],
    full: CHEONGAN[cheonganIdx] + JIJI[jijiIdx],
    fullKo: CHEONGAN_KO[cheonganIdx] + JIJI_KO[jijiIdx],
  };
}
