import { getIljin } from '../data/iljin';
import { getAnimal } from '../data/animals';
import { getSonLabel } from '../utils/lunarCalc';
import { MinhwaAnimal } from './MinhwaAnimals';

export default function DayCell({ date, isToday, isSelected, onClick }) {
  if (!date) return <div className="day-cell empty" />;

  const dow = date.getDay();
  const iljin = getIljin(date);
  const animal = getAnimal(iljin.jiji);
  const son = getSonLabel(date);

  const classes = [
    'day-cell',
    dow === 0 ? 'sun' : dow === 6 ? 'sat' : '',
    son.isSonNone ? 'son-none' : '',
    isToday ? 'today' : '',
    isSelected ? 'selected' : '',
  ].filter(Boolean).join(' ');

  return (
    <button className={classes} onClick={() => onClick(date)}>
      {son.isSonNone && (
        <span className="son-stamp" aria-hidden="true">
          <svg viewBox="0 0 40 40" width="100%" height="100%">
            <circle cx="20" cy="20" r="16" fill="none" stroke="#b83325" strokeWidth="2" opacity="0.85"/>
            <text x="20" y="27" textAnchor="middle" fontFamily="serif" fontSize="18" fontWeight="900" fill="#b83325" opacity="0.9">吉</text>
          </svg>
        </span>
      )}

      <div className="cell-top">
        <span className="day-number">{date.getDate()}</span>
        {son.isSonNone && <span className="son-badge">손없는날</span>}
      </div>

      <div className="cell-animal">
        <MinhwaAnimal jiji={iljin.jiji} size={52} />
      </div>

      <div className="cell-bottom">
        <span className="day-lunar">음 {son.lunarMonth}.{son.lunarDay}</span>
        <span className="day-ganji">{iljin.full}</span>
      </div>

      {isToday && <span className="today-marker">오늘</span>}
    </button>
  );
}
