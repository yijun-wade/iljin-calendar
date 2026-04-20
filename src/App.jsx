import { useState } from 'react';
import WeekStrip from './components/WeekStrip';
import DayView from './components/DayView';
import CalendarPicker from './components/CalendarPicker';
import './index.css';

export default function App() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [pickerOpen,   setPickerOpen]   = useState(false);

  return (
    <div className="app-wrapper paper-on">
      <div className="paper-bg" />
      <div className="paper-stain s1" />
      <div className="paper-stain s2" />

      <div className="app-inner">
        {/* 앱 타이틀 */}
        <div className="app-header">
          <div className="app-header-title">할머니집에서 본 그 달력</div>
        </div>

        {/* L2 — 주 단위 날짜 띠 */}
        <WeekStrip
          selectedDate={selectedDate}
          onSelectDate={setSelectedDate}
          onOpenPicker={() => setPickerOpen(true)}
        />

        {/* L1 — 선택된 날 상세 */}
        <DayView date={selectedDate} />
      </div>

      {/* L3 — 날짜 직접 선택 모달 */}
      {pickerOpen && (
        <CalendarPicker
          selectedDate={selectedDate}
          onSelect={setSelectedDate}
          onClose={() => setPickerOpen(false)}
        />
      )}
    </div>
  );
}
