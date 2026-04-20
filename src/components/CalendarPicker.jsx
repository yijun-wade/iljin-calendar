import { useState } from 'react';
import { getSonLabel } from '../utils/lunarCalc';

const WEEKDAYS = ['일','월','화','수','목','금','토'];
const MONTHS   = ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'];

function getDaysInMonth(y, m) { return new Date(y, m + 1, 0).getDate(); }
function getFirstDow(y, m)    { return new Date(y, m, 1).getDay(); }

function isSameDay(a, b) {
  return a && b
    && a.getFullYear() === b.getFullYear()
    && a.getMonth()    === b.getMonth()
    && a.getDate()     === b.getDate();
}

export default function CalendarPicker({ selectedDate, onSelect, onClose }) {
  const today = new Date();
  const [viewYear,  setViewYear]  = useState(selectedDate.getFullYear());
  const [viewMonth, setViewMonth] = useState(selectedDate.getMonth());

  function prevMonth() { viewMonth === 0  ? (setViewYear(y=>y-1), setViewMonth(11)) : setViewMonth(m=>m-1); }
  function nextMonth() { viewMonth === 11 ? (setViewYear(y=>y+1), setViewMonth(0))  : setViewMonth(m=>m+1); }

  const firstDow    = getFirstDow(viewYear, viewMonth);
  const daysInMonth = getDaysInMonth(viewYear, viewMonth);
  const cells = [];
  for (let i = 0; i < firstDow; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(new Date(viewYear, viewMonth, d));
  while (cells.length % 7 !== 0) cells.push(null);

  return (
    <div className="picker-overlay" onClick={onClose}>
      <div className="picker-panel" onClick={e => e.stopPropagation()}>
        <div className="picker-header">
          <button className="picker-nav" onClick={prevMonth}>‹</button>
          <span className="picker-month-label">{viewYear}년 {MONTHS[viewMonth]}</span>
          <button className="picker-nav" onClick={nextMonth}>›</button>
          <button className="picker-close" onClick={onClose}>✕</button>
        </div>

        <div className="picker-weekdays">
          {WEEKDAYS.map((wd, i) => (
            <div key={wd} className={`picker-wd ${i===0?'sun':i===6?'sat':''}`}>{wd}</div>
          ))}
        </div>

        <div className="picker-grid">
          {cells.map((date, i) => {
            if (!date) return <div key={i} className="picker-cell empty" />;
            const dow = date.getDay();
            const son = getSonLabel(date);
            const sel = isSameDay(date, selectedDate);
            const tod = isSameDay(date, today);
            return (
              <button
                key={i}
                className={[
                  'picker-cell',
                  dow === 0 ? 'sun' : dow === 6 ? 'sat' : '',
                  sel ? 'selected' : '',
                  tod ? 'today'    : '',
                  son.isSonNone ? 'son-none' : '',
                ].filter(Boolean).join(' ')}
                onClick={() => { onSelect(new Date(date)); onClose(); }}
              >
                <span className="picker-num">{date.getDate()}</span>
                {son.isSonNone && <span className="picker-son-dot" />}
              </button>
            );
          })}
        </div>

        <div className="picker-legend">
          <span className="picker-son-dot" /> 손없는날
        </div>
      </div>
    </div>
  );
}
