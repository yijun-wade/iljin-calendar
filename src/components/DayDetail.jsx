import { getIljin } from '../data/iljin';
import { getAnimal } from '../data/animals';
import { getSonLabel } from '../utils/lunarCalc';
import { MinhwaAnimal } from './MinhwaAnimals';

const WEEK_KO  = ['일','월','화','수','목','금','토'];
const MONTHS   = ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'];

export default function DayDetail({ date, onClose }) {
  if (!date) return null;

  const iljin  = getIljin(date);
  const animal = getAnimal(iljin.jiji);
  const son    = getSonLabel(date);
  const dateStr = `${date.getFullYear()}년 ${MONTHS[date.getMonth()]} ${date.getDate()}일 ${WEEK_KO[date.getDay()]}요일`;

  return (
    <div className="detail-overlay" onClick={onClose}>
      <div className="detail-panel" onClick={e => e.stopPropagation()}>
        <button className="detail-close" onClick={onClose}>✕</button>

        <div className="detail-datehead">
          <div className="detail-date-jp">陰 · 음력 {son.lunarMonth}월 {son.lunarDay}일</div>
          <div className="detail-date-main">{dateStr}</div>
        </div>

        <div className="detail-hero">
          <div className="detail-hero-animal">
            <MinhwaAnimal jiji={iljin.jiji} size={100} />
          </div>
          <div className="detail-hero-text">
            <div className="detail-ganji-big">{iljin.full}</div>
            <div className="detail-ganji-ko">{iljin.fullKo} 일</div>
            {animal && (
              <div className="detail-animal-line">
                오늘의 띠 · <strong>{animal.name}</strong>
                <span className="detail-jiji-kanja">（{iljin.jiji}）</span>
              </div>
            )}
          </div>
        </div>

        {son.isSonNone ? (
          <div className="detail-son good">
            <div className="son-seal-big">
              <svg viewBox="0 0 60 60" width="64" height="64">
                <circle cx="30" cy="30" r="26" fill="#b83325" stroke="#8a1e1e" strokeWidth="1.5"/>
                <text x="30" y="40" textAnchor="middle" fontFamily="serif" fontSize="30" fontWeight="900" fill="#fff8ea">吉</text>
              </svg>
            </div>
            <div>
              <div className="son-title">손 없 는 날</div>
              <div className="son-sub">이사 · 결혼 · 개업 · 집수리에 좋은 날</div>
              <div className="son-hint">음력 {son.lunarDay}일 — 귀신이 쉬는 날이라 하오</div>
            </div>
          </div>
        ) : (
          <div className="detail-son plain">
            <div className="son-title small">손 있는 날</div>
            <div className="son-sub">가까운 손없는날까지 조금 기다리세요</div>
          </div>
        )}

        <div className="detail-foot">
          甲 乙 丙 丁 戊 己 庚 辛 壬 癸 · 子 丑 寅 卯 辰 巳 午 未 申 酉 戌 亥
        </div>
      </div>
    </div>
  );
}
