// 민화풍 12띠 동물 — 굵은 먹선 + 단순한 형태 + 전통 색

const INK   = '#2a1f17';
const CREAM = '#f6ecd4';
const RED   = '#b83325';
const OCHRE = '#d4a24a';
const INDIGO= '#2e5266';
const JADE  = '#6b8e5a';
const PEACH = '#e8a877';
const CORAL = '#d86b4a';
const GRAY  = '#8a7a6a';

const S = { stroke: INK, strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round', fill: 'none' };

const Rat = () => (
  <svg viewBox="0 0 48 48" width="100%" height="100%">
    <ellipse cx="24" cy="30" rx="14" ry="10" fill={GRAY} {...S}/>
    <circle cx="14" cy="22" r="5" fill={GRAY} {...S}/>
    <circle cx="10" cy="18" r="3" fill={PEACH} {...S}/>
    <circle cx="18" cy="18" r="3" fill={PEACH} {...S}/>
    <circle cx="11.5" cy="22" r="0.9" fill={INK}/>
    <circle cx="11" cy="21.6" r="0.25" fill="#fff"/>
    <path d="M38 32 Q 44 34 42 40" {...S}/>
    <path d="M18 34 L 18 40 M24 35 L 24 41 M30 34 L 30 40" {...S}/>
    <path d="M9 23 Q 7.5 23.5 7 22" {...S}/>
  </svg>
);

const Ox = () => (
  <svg viewBox="0 0 48 48" width="100%" height="100%">
    <ellipse cx="26" cy="30" rx="15" ry="10" fill={OCHRE} {...S}/>
    <ellipse cx="12" cy="26" rx="7" ry="6" fill={OCHRE} {...S}/>
    <path d="M7 21 Q 4 16 6 14 Q 9 17 10 22" fill={CREAM} {...S}/>
    <path d="M17 21 Q 20 16 18 14 Q 15 17 14 22" fill={CREAM} {...S}/>
    <circle cx="10" cy="25" r="0.9" fill={INK}/>
    <ellipse cx="9" cy="28" rx="2.5" ry="1.5" fill={PEACH} {...S}/>
    <circle cx="9" cy="28" r="0.4" fill={INK}/>
    <path d="M18 38 L 18 42 M24 38 L 24 42 M32 38 L 32 42" {...S}/>
    <path d="M25 22 Q 30 18 34 22" fill={CREAM} {...S}/>
  </svg>
);

const Tiger = () => (
  <svg viewBox="0 0 48 48" width="100%" height="100%">
    <ellipse cx="24" cy="32" rx="14" ry="9" fill={OCHRE} {...S}/>
    <circle cx="24" cy="20" r="11" fill={OCHRE} {...S}/>
    <path d="M15 12 L 12 8 L 18 12 Z" fill={OCHRE} {...S}/>
    <path d="M33 12 L 36 8 L 30 12 Z" fill={OCHRE} {...S}/>
    <path d="M14 16 L 18 18 M20 15 L 22 18 M26 15 L 28 18 M30 16 L 34 18" stroke={INK} strokeWidth="1.5" fill="none" strokeLinecap="round"/>
    <circle cx="20" cy="21" r="1.2" fill={INK}/>
    <circle cx="28" cy="21" r="1.2" fill={INK}/>
    <circle cx="19.6" cy="20.6" r="0.35" fill="#fff"/>
    <circle cx="27.6" cy="20.6" r="0.35" fill="#fff"/>
    <path d="M22 25 Q 24 27 26 25" fill={PEACH} {...S}/>
    <path d="M24 25 L 24 27" {...S}/>
    <text x="24" y="24.5" fontSize="4" fill={INK} textAnchor="middle" fontWeight="700" style={{fontFamily:'serif'}}>王</text>
  </svg>
);

const Rabbit = () => (
  <svg viewBox="0 0 48 48" width="100%" height="100%">
    <ellipse cx="24" cy="32" rx="11" ry="8" fill="#fff" {...S}/>
    <circle cx="24" cy="22" r="9" fill="#fff" {...S}/>
    <ellipse cx="18" cy="11" rx="3" ry="8" fill="#fff" {...S}/>
    <ellipse cx="30" cy="11" rx="3" ry="8" fill="#fff" {...S}/>
    <ellipse cx="18" cy="11" rx="1.3" ry="5" fill={PEACH}/>
    <ellipse cx="30" cy="11" rx="1.3" ry="5" fill={PEACH}/>
    <circle cx="20" cy="22" r="1.1" fill={RED}/>
    <circle cx="28" cy="22" r="1.1" fill={RED}/>
    <path d="M23 25 L 24 26 L 25 25" {...S}/>
    <path d="M22 27 Q 24 29 26 27" {...S}/>
    <circle cx="34" cy="32" r="3" fill="#fff" {...S}/>
  </svg>
);

const Dragon = () => (
  <svg viewBox="0 0 48 48" width="100%" height="100%">
    <path d="M8 36 Q 12 24 20 28 Q 28 32 32 22 Q 36 14 42 14" fill="none" stroke={JADE} strokeWidth="6" strokeLinecap="round"/>
    <path d="M8 36 Q 12 24 20 28 Q 28 32 32 22 Q 36 14 42 14" fill="none" {...S}/>
    <circle cx="42" cy="14" r="4" fill={JADE} {...S}/>
    <path d="M40 10 L 38 7 M43 10 L 43 6 M45 11 L 47 8" {...S}/>
    <circle cx="43.5" cy="13" r="0.9" fill={INK}/>
    <path d="M39 15 Q 37 17 39 17" {...S}/>
    <path d="M14 32 L 11 37 M22 29 L 20 34 M30 26 L 29 31" {...S}/>
  </svg>
);

const Snake = () => (
  <svg viewBox="0 0 48 48" width="100%" height="100%">
    <path d="M10 38 Q 20 38 20 28 Q 20 18 30 18 Q 40 18 38 10" fill="none" stroke={JADE} strokeWidth="6" strokeLinecap="round"/>
    <path d="M10 38 Q 20 38 20 28 Q 20 18 30 18 Q 40 18 38 10" fill="none" {...S}/>
    <circle cx="14" cy="38" r="0.8" fill={INK}/>
    <circle cx="22" cy="32" r="0.8" fill={INK}/>
    <circle cx="26" cy="22" r="0.8" fill={INK}/>
    <path d="M38 10 L 36 8 M38 10 L 40 8" {...S}/>
    <circle cx="39" cy="11" r="0.7" fill={INK}/>
  </svg>
);

const Horse = () => (
  <svg viewBox="0 0 48 48" width="100%" height="100%">
    <ellipse cx="24" cy="28" rx="14" ry="8" fill={CORAL} {...S}/>
    <path d="M34 24 Q 40 18 38 10 Q 34 14 32 20" fill={CORAL} {...S}/>
    <path d="M38 10 Q 42 12 40 16" fill={INK} {...S}/>
    <circle cx="36" cy="17" r="0.9" fill={INK}/>
    <path d="M36 19 Q 38 20 37 22" {...S}/>
    <path d="M34 14 L 33 10 L 32 14" fill={CORAL} {...S}/>
    <path d="M14 34 L 14 42 M20 36 L 20 42 M28 36 L 28 42 M34 34 L 34 42" {...S}/>
    <path d="M10 26 Q 6 30 10 32" {...S}/>
  </svg>
);

const Goat = () => (
  <svg viewBox="0 0 48 48" width="100%" height="100%">
    <circle cx="14" cy="22" r="4" fill={CREAM} {...S}/>
    <circle cx="10" cy="26" r="4" fill={CREAM} {...S}/>
    <circle cx="16" cy="28" r="4" fill={CREAM} {...S}/>
    <circle cx="22" cy="24" r="4" fill={CREAM} {...S}/>
    <circle cx="28" cy="28" r="4" fill={CREAM} {...S}/>
    <circle cx="24" cy="30" r="4" fill={CREAM} {...S}/>
    <ellipse cx="34" cy="26" rx="5" ry="5" fill={PEACH} {...S}/>
    <path d="M31 22 Q 28 18 32 17" fill={CREAM} {...S}/>
    <path d="M37 22 Q 40 18 36 17" fill={CREAM} {...S}/>
    <circle cx="33" cy="26" r="0.8" fill={INK}/>
    <circle cx="36" cy="26" r="0.8" fill={INK}/>
    <path d="M34 29 Q 35 30 36 29" {...S}/>
    <path d="M16 34 L 16 40 M22 34 L 22 40 M28 34 L 28 40" {...S}/>
  </svg>
);

const Monkey = () => (
  <svg viewBox="0 0 48 48" width="100%" height="100%">
    <ellipse cx="24" cy="30" rx="11" ry="9" fill="#8b5a3c" {...S}/>
    <circle cx="24" cy="20" r="9" fill="#8b5a3c" {...S}/>
    <circle cx="14" cy="18" r="3" fill="#8b5a3c" {...S}/>
    <circle cx="34" cy="18" r="3" fill="#8b5a3c" {...S}/>
    <ellipse cx="24" cy="23" rx="6" ry="5" fill={PEACH} {...S}/>
    <circle cx="21" cy="20" r="1" fill={INK}/>
    <circle cx="27" cy="20" r="1" fill={INK}/>
    <path d="M22 26 Q 24 27 26 26" {...S}/>
    <path d="M34 30 Q 42 30 40 22 Q 38 26 34 26" fill="none" {...S}/>
  </svg>
);

const Rooster = () => (
  <svg viewBox="0 0 48 48" width="100%" height="100%">
    <ellipse cx="22" cy="30" rx="11" ry="9" fill={RED} {...S}/>
    <circle cx="32" cy="20" r="7" fill={RED} {...S}/>
    <path d="M28 14 Q 30 8 32 12 Q 34 8 36 13 Q 38 9 38 14" fill={RED} {...S}/>
    <path d="M30 26 Q 32 29 34 26" fill={RED} {...S}/>
    <circle cx="34" cy="19" r="1" fill={INK}/>
    <circle cx="33.7" cy="18.7" r="0.3" fill="#fff"/>
    <path d="M38 20 L 43 20 L 39 23 Z" fill={OCHRE} {...S}/>
    <path d="M14 30 Q 8 30 8 26" fill={OCHRE} {...S}/>
    <path d="M20 39 L 20 43 M24 39 L 24 43" {...S}/>
  </svg>
);

const Dog = () => (
  <svg viewBox="0 0 48 48" width="100%" height="100%">
    <ellipse cx="26" cy="30" rx="13" ry="9" fill={OCHRE} {...S}/>
    <circle cx="14" cy="24" r="7" fill={OCHRE} {...S}/>
    <path d="M8 18 L 8 26 L 13 24 Z" fill={OCHRE} {...S}/>
    <path d="M20 18 L 20 26 L 15 24 Z" fill={OCHRE} {...S}/>
    <circle cx="11" cy="23" r="1" fill={INK}/>
    <circle cx="17" cy="23" r="1" fill={INK}/>
    <ellipse cx="14" cy="26" rx="1.5" ry="1" fill={INK}/>
    <path d="M12 28 Q 14 29 16 28" {...S}/>
    <path d="M18 34 L 18 40 M24 34 L 24 40 M30 34 L 30 40 M36 34 L 36 40" {...S}/>
    <path d="M39 26 Q 44 22 42 18 Q 40 22 38 24" fill={OCHRE} {...S}/>
  </svg>
);

const Pig = () => (
  <svg viewBox="0 0 48 48" width="100%" height="100%">
    <ellipse cx="24" cy="28" rx="14" ry="10" fill={PEACH} {...S}/>
    <ellipse cx="24" cy="28" rx="5" ry="4" fill={CORAL} {...S}/>
    <circle cx="22.5" cy="27.5" r="0.7" fill={INK}/>
    <circle cx="25.5" cy="27.5" r="0.7" fill={INK}/>
    <path d="M16 16 L 12 10 L 18 14 Z" fill={PEACH} {...S}/>
    <path d="M32 16 L 36 10 L 30 14 Z" fill={PEACH} {...S}/>
    <circle cx="18" cy="22" r="1" fill={INK}/>
    <circle cx="30" cy="22" r="1" fill={INK}/>
    <circle cx="17.7" cy="21.7" r="0.3" fill="#fff"/>
    <circle cx="29.7" cy="21.7" r="0.3" fill="#fff"/>
    <path d="M16 34 L 16 40 M21 35 L 21 40 M27 35 L 27 40 M32 34 L 32 40" {...S}/>
    <path d="M38 28 Q 42 26 40 24" {...S}/>
  </svg>
);

const ANIMAL_SVG = {
  '子': Rat, '丑': Ox, '寅': Tiger, '卯': Rabbit,
  '辰': Dragon, '巳': Snake, '午': Horse, '未': Goat,
  '申': Monkey, '酉': Rooster, '戌': Dog, '亥': Pig,
};

export function MinhwaAnimal({ jiji, size = 48 }) {
  const C = ANIMAL_SVG[jiji];
  if (!C) return null;
  return (
    <span style={{ display: 'inline-block', width: size, height: size, lineHeight: 0 }}>
      <C />
    </span>
  );
}
