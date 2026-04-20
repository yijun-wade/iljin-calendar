import { getIljin } from '../data/iljin';
import { getAnimal } from '../data/animals';
import { getSonLabel } from '../utils/lunarCalc';
import { MinhwaAnimal } from './MinhwaAnimals';

const WEEK_CHAR = ['日','月','火','水','木','金','土'];
const MONTH_EN  = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];

export default function DayView({ date }) {
  const iljin  = getIljin(date);
  const animal = getAnimal(iljin.jiji);
  const son    = getSonLabel(date);

  const dow = date.getDay();
  const isSun = dow === 0;
  const isSat = dow === 6;

  return (
    <div className="day-view">

      {/* 상단 코너 바: [1 / JAN] ··· 2025 ··· [水] */}
      <div className="dv-top-bar">
        <div className="dv-corner-box">
          <span className="dv-corner-month-num">{date.getMonth() + 1}</span>
          <span className="dv-corner-month-en">{MONTH_EN[date.getMonth()]}</span>
        </div>
        <span className="dv-top-year">{date.getFullYear()}</span>
        <div className={`dv-corner-box dv-corner-dow ${isSun ? 'sun' : isSat ? 'sat' : ''}`}>
          <span className="dv-corner-char">{WEEK_CHAR[dow]}</span>
        </div>
      </div>

      {/* 히어로: 큰 날짜 숫자 + 동물이 옆에서 갖고 놀기 */}
      <div className="dv-hero-wrap">
        <div className="dv-hero">
          <span className={`dv-big-num ${isSun ? 'sun' : isSat ? 'sat' : ''}`}>
            {date.getDate()}
          </span>
          <div className="dv-animal-play">
            <MinhwaAnimal jiji={iljin.jiji} size={88} />
          </div>
        </div>
      </div>

      {/* 일진 · 음력 · 동물이름 · 손없는날 태그 */}
      <div className="dv-meta-row">
        <span className="dv-ganji">{iljin.full}</span>
        <span className="dv-meta-sep">·</span>
        <span className="dv-lunar">음력 {son.lunarMonth}.{son.lunarDay}</span>
        {animal && (
          <>
            <span className="dv-meta-sep">·</span>
            <span className="dv-animal-name">{animal.name}</span>
          </>
        )}
        {son.isSonNone && (
          <>
            <span className="dv-meta-sep">·</span>
            <span className="dv-son-tag">손없는날</span>
          </>
        )}
      </div>

      {/* 손없는날 카드 */}
      {son.isSonNone && (
        <div className="dv-son good">
          <div className="dv-son-seal">
            <svg viewBox="0 0 60 60" width="44" height="44">
              <circle cx="30" cy="30" r="26" fill="#1a1a1a" stroke="#000" strokeWidth="1.5"/>
              <text x="30" y="40" textAnchor="middle" fontFamily="serif" fontSize="30" fontWeight="900" fill="#ffffff">吉</text>
            </svg>
          </div>
          <div>
            <div className="dv-son-title">손 없 는 날</div>
            <div className="dv-son-sub">이사 · 결혼 · 개업에 좋은 날</div>
            <div className="dv-son-hint">귀신이 쉬는 날</div>
          </div>
        </div>
      )}

    </div>
  );
}
