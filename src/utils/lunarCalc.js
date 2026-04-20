/**
 * 손없는날 계산
 *
 * 손없는날: 음력 1·2·15·16일
 * "손"은 사방을 돌아다니며 사람에게 해를 끼치는 귀신.
 * 음력 특정일에는 이 귀신이 없으므로 이사·결혼 등에 길하다.
 *
 * 음력 변환은 korean-lunar-calendar 라이브러리 없이 근사값으로 처리.
 * 정확한 음력 변환을 위해 lookup table 방식 사용.
 */

// 손없는날 판별: 음력 날짜가 1, 2, 15, 16일인지
export const SON_GOOD_LUNAR_DAYS = [1, 2, 15, 16];

/**
 * 양력 날짜 → 음력 날짜 근사 변환
 * 음력 1달 ≈ 29.530589일
 * 기준: 2027년 2월 1일 = 음력 2027년 1월 4일 (달력 이미지에서 확인된 값: 12.25 → 음력 12월 25일)
 *
 * 실제로는 한국천문연구원 API나 lookup table이 필요하나,
 * 여기서는 달력 이미지의 음력 표기를 기준 앵커로 사용한다.
 *
 * 기준: 2027-02-01 = 음력 2026년 12월 25일
 * 즉, 양력 2027-02-07이 음력 1월 1일 (설날)
 */
const LUNAR_ANCHOR = {
  solar: new Date(2027, 1, 7), // 양력 2027년 2월 7일 (설날)
  lunarMonth: 1,
  lunarDay: 1,
};

const LUNAR_MONTH_DAYS = 29.530589;

export function getLunarDate(date) {
  const anchorDate = new Date(
    LUNAR_ANCHOR.solar.getFullYear(),
    LUNAR_ANCHOR.solar.getMonth(),
    LUNAR_ANCHOR.solar.getDate()
  );
  const targetDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  const diffDays = Math.round((targetDate - anchorDate) / (1000 * 60 * 60 * 24));

  // 총 경과 음력일 수 (기준점에서, 음수 가능)
  const totalLunarDays = LUNAR_ANCHOR.lunarDay - 1 + diffDays;

  // JS % 연산자는 음수에서 부호를 보존하므로 직접 계산
  const monthsElapsed = Math.floor(totalLunarDays / LUNAR_MONTH_DAYS);
  const dayFraction = totalLunarDays - monthsElapsed * LUNAR_MONTH_DAYS; // 항상 0 이상
  const lunarDay = Math.min(30, Math.floor(dayFraction) + 1);

  // 음력 월 (음수 모듈러 처리)
  const lunarMonth = (((LUNAR_ANCHOR.lunarMonth - 1 + monthsElapsed) % 12) + 12) % 12 + 1;

  return { lunarMonth, lunarDay };
}

export function isSonNone(date) {
  const { lunarDay } = getLunarDate(date);
  return SON_GOOD_LUNAR_DAYS.includes(lunarDay);
}

export function getSonLabel(date) {
  const { lunarMonth, lunarDay } = getLunarDate(date);
  const isGood = SON_GOOD_LUNAR_DAYS.includes(lunarDay);
  return {
    lunarMonth,
    lunarDay,
    isSonNone: isGood,
    label: isGood ? '손없는날' : null,
  };
}
