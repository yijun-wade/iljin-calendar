import { getIljin } from '../data/iljin';
import { getSonLabel } from '../utils/lunarCalc';
import { MinhwaAnimal } from './MinhwaAnimals';

const WEEK_SHORT = ['일','월','화','수','목','금','토'];

function getWeekStart(date) {
  const d = new Date(date);
  d.setDate(d.getDate() - d.getDay()); // 일요일로
  d.setHours(0, 0, 0, 0);
  return d;
}

function isSameDay(a, b) {
  return a.getFullYear() === b.getFullYear()
    && a.getMonth() === b.getMonth()
    && a.getDate() === b.getDate();
}

export default function WeekStrip({ selectedDate, onSelectDate, onOpenPicker }) {
  const today = new Date();
  const weekStart = getWeekStart(selectedDate);

  function prevWeek() {
    const d = new Date(selectedDate);
    d.setDate(d.getDate() - 7);
    onSelectDate(d);
  }
  function nextWeek() {
    const d = new Date(selectedDate);
    d.setDate(d.getDate() + 7);
    onSelectDate(d);
  }

  const days = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(weekStart);
    d.setDate(weekStart.getDate() + i);
    return d;
  });

  const monthLabel = (() => {
    const months = new Set(days.map(d => d.getMonth()));
    if (months.size === 1) {
      return `${days[0].getFullYear()}년 ${days[0].getMonth() + 1}월`;
    }
    const arr = [...months];
    return `${days[0].getMonth() + 1}월 · ${days[6].getMonth() + 1}월`;
  })();

  return (
    <div className="week-strip">
      {/* 상단 바: 월 표시 + 날짜 선택 버튼 */}
      <div className="ws-header">
        <button className="ws-arrow" onClick={prevWeek} aria-label="이전 주">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
            <path d="M15 5 L 8 12 L 15 19"/>
          </svg>
        </button>
        <span className="ws-month-label">{monthLabel}</span>
        <button className="ws-arrow" onClick={nextWeek} aria-label="다음 주">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
            <path d="M9 5 L 16 12 L 9 19"/>
          </svg>
        </button>
        <button className="ws-pick-btn" onClick={onOpenPicker} aria-label="날짜 선택">
          📅
        </button>
      </div>

      {/* 7일 타일 */}
      <div className="ws-days">
        {days.map((day, i) => {
          const iljin = getIljin(day);
          const son   = getSonLabel(day);
          const sel   = isSameDay(day, selectedDate);
          const tod   = isSameDay(day, today);
          const dow   = day.getDay();

          return (
            <button
              key={i}
              className={[
                'ws-tile',
                dow === 0 ? 'sun' : dow === 6 ? 'sat' : '',
                sel  ? 'selected' : '',
                tod  ? 'today'    : '',
                son.isSonNone ? 'son-none' : '',
              ].filter(Boolean).join(' ')}
              onClick={() => onSelectDate(new Date(day))}
            >
              <span className="ws-wd">{WEEK_SHORT[dow]}</span>
              <span className="ws-num">{day.getDate()}</span>
              <span className="ws-animal">
                <MinhwaAnimal jiji={iljin.jiji} size={28} />
              </span>
              {son.isSonNone && <span className="ws-son-dot" title="손없는날" />}
            </button>
          );
        })}
      </div>
    </div>
  );
}
