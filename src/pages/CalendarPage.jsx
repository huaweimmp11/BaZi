import { useState, useCallback } from "react";
import TocSidebar from "../components/TocSidebar";
import { Solar, Lunar } from "lunar-javascript";
import { ColoredChar } from "../components/GanZhiText";

const STEMS = ["甲","乙","丙","丁","戊","己","庚","辛","壬","癸"];
const BRANCHES = ["子","丑","寅","卯","辰","巳","午","未","申","酉","戌","亥"];
const STEM_WX = ["木","木","火","火","土","土","金","金","水","水"];
const BRANCH_WX = ["水","土","木","木","土","火","火","土","金","金","土","水"];
const WEEKDAYS = ["日","一","二","三","四","五","六"];
const MONTHS = ["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"];
const SHENGXIAO = ["鼠","牛","虎","兔","龙","蛇","马","羊","猴","鸡","狗","猪"];

function Stem({ c }) { const i = STEMS.indexOf(c); return i >= 0 ? <span className={"wx-"+STEM_WX[i]}>{c}</span> : c; }
function Branch({ c }) { const i = BRANCHES.indexOf(c); return i >= 0 ? <span className={"wx-"+BRANCH_WX[i]}>{c}</span> : c; }

function DateDetail({ year, month, day, info, firstDay, onClose }) {
  if (!info) return null;
  const gz = info.dayGz || "";
  const mGz = info.monthGz || "";
  const yGz = info.yearGz || "";
  const weekdayIdx = (firstDay + day - 1) % 7;
  return (
    <div className="cal-detail">
      <button className="cal-detail-close" onClick={onClose}>✕</button>
      <div className="cal-detail-main">
        <div className="cal-detail-solar">{year}年{month}月{day}日</div>
        <div className="cal-detail-week">星期{WEEKDAYS[weekdayIdx]}</div>
        <div className="cal-detail-lunar">
          <span className="cal-detail-lm">{info.lunarMonth || ""}</span>
          <span className="cal-detail-ld">{info.lunarDay || ""}</span>
        </div>
        {info.jieQi && <div className="cal-detail-jieqi">{info.jieQi}</div>}
      </div>

      <div className="cal-detail-divider"></div>

      <div className="cal-detail-ganzhi">
        <div className="cd-row"><span className="cd-label">年柱</span><span>{yGz.length>=2?<><ColoredChar c={yGz[0]} /><ColoredChar c={yGz[1]} /></>:"—"}</span></div>
        <div className="cd-row"><span className="cd-label">月柱</span><span>{mGz.length>=2?<><ColoredChar c={mGz[0]} /><ColoredChar c={mGz[1]} /></>:"—"}</span></div>
        <div className="cd-row"><span className="cd-label">日柱</span><span>{gz.length>=2?<><ColoredChar c={gz[0]} /><ColoredChar c={gz[1]} /></>:"—"}</span></div>
      </div>

      <div className="cal-detail-divider"></div>

      <div className="cal-detail-tags">
        {info.shengxiao && <span className="cd-tag">生肖：{info.shengxiao}</span>}
        {info.naYin && <span className="cd-tag">纳音：{info.naYin}</span>}
      </div>

      {info.yi?.length > 0 && info.ji?.length > 0 && (
        <>
          <div className="cal-detail-divider"></div>
          <div className="cal-detail-yj">
            <div><span className="cd-yj-label cd-yi">宜</span> {info.yi.slice(0,8).join("、")}</div>
            <div><span className="cd-yj-label cd-ji">忌</span> {info.ji.slice(0,8).join("、")}</div>
          </div>
        </>
      )}
    </div>
  );
}

export default function CalendarPage() {
  const today = new Date();
  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth() + 1);
  const [selected, setSelected] = useState(null);
  const [detailInfo, setDetailInfo] = useState(null);

  const daysInMonth = new Date(year, month, 0).getDate();
  const firstDay = new Date(year, month - 1, 1).getDay();

  const goMonth = useCallback((d) => {
    let y = year, m = month + d;
    if (m < 1) { m = 12; y--; }
    if (m > 12) { m = 1; y++; }
    setYear(y); setMonth(m);
    setSelected(null);
    setDetailInfo(null);
  }, [year, month]);

  const goToday = useCallback(() => {
    const y = today.getFullYear(), m = today.getMonth() + 1, d = today.getDate();
    setYear(y);
    setMonth(m);
    const info = getLunarInfo(y, m, d);
    setSelected(d);
    setDetailInfo({ day: d, info });
  }, []);

  const [jumpY, setJumpY] = useState(today.getFullYear());
  const [jumpM, setJumpM] = useState(today.getMonth() + 1);
  const [jumpD, setJumpD] = useState(today.getDate());

  const doJump = useCallback(() => {
    if (jumpY && jumpM && jumpD) {
      const m = Math.min(12, Math.max(1, jumpM));
      const maxD = new Date(jumpY, m, 0).getDate();
      const d = Math.min(maxD, Math.max(1, jumpD));
      setYear(jumpY);
      setMonth(m);
      setJumpD(d);
      const info = getLunarInfo(jumpY, m, d);
      setSelected(d);
      setDetailInfo({ day: d, info });
    }
  }, [jumpY, jumpM, jumpD]);

  function getLunarInfo(y, m, d) {
    try {
      const solar = Solar.fromYmd(y, m, d);
      const lunar = solar.getLunar();
      if (!lunar) return null;
      const gz = lunar.getDayInGanZhi();
      const monthGz = lunar.getMonthInGanZhi();
      const yearGz = lunar.getYearInGanZhi();
      const sxIdx = BRANCHES.indexOf(yearGz ? yearGz[1] : "");
      return {
        lunarDay: lunar.getDayInChinese(),
        lunarMonth: lunar.getMonthInChinese(),
        yearGz: yearGz || "",
        monthGz: monthGz || "",
        dayGz: gz || "",
        shengxiao: sxIdx >= 0 ? SHENGXIAO[sxIdx] : "",
        jieQi: lunar.getJieQi() || "",
        yi: lunar.getDayYi() || [],
        ji: lunar.getDayJi() || [],
        naYin: lunar.getYearNaYin() || "",
      };
    } catch(e) { return null; }
  }

  function handleDayClick(d) {
    const info = getLunarInfo(year, month, d);
    setSelected(d);
    setDetailInfo({ day: d, info });
  }

  function makeDays() {
    const cells = [];
    for (let i = 0; i < firstDay; i++)
      cells.push({ empty: true });
    for (let d = 1; d <= daysInMonth; d++) {
      const info = getLunarInfo(year, month, d);
      const isToday = d === today.getDate() && month === today.getMonth() + 1 && year === today.getFullYear();
      const isWeekend = (firstDay + d - 1) % 7 === 6 || (firstDay + d - 1) % 7 === 0;
      cells.push({ day: d, info, isToday, isWeekend, jieQi: info?.jieQi || "" });
    }
    return cells;
  }

  const days = makeDays();
  const weeks = [];
  for (let i = 0; i < days.length; i += 7)
    weeks.push(days.slice(i, i + 7));

  return (
    <div>
      <section className="content">
        <div className="container">
          <TocSidebar>
            <div className="content-body">

              {/* Navigation */}
              <div className="cal-nav">
                <button className="btn btn-secondary cal-nav-btn" onClick={() => goMonth(-1)}>← 上月</button>
                <h3 className="cal-nav-title">{year}年 {MONTHS[month-1]}</h3>
                <button className="btn btn-secondary cal-nav-btn" onClick={() => goMonth(1)}>下月 →</button>
                <button className="btn btn-primary cal-nav-today" onClick={goToday}>今天</button>
              </div>

              {/* Jump */}
              <div className="cal-jump-bar">
                <span>跳转：</span>
                <input type="number" value={jumpY} onChange={e => setJumpY(+e.target.value||year)} min={1900} max={2100} className="cal-jump-input cal-jump-y" />
                <span>年</span>
                <input type="number" value={jumpM} onChange={e => setJumpM(Math.min(12,Math.max(1,+e.target.value||1)))} min={1} max={12} className="cal-jump-input cal-jump-m" />
                <span>月</span>
                <input type="number" value={jumpD} onChange={e => setJumpD(Math.min(31,Math.max(1,+e.target.value||1)))} min={1} max={31} className="cal-jump-input cal-jump-d" />
                <span>日</span>
                <button className="btn btn-primary" onClick={doJump} style={{padding:"4px 14px",fontSize:"0.82rem"}}>跳转</button>
              </div>

              {/* Two-column layout */}
              <div className="cal-layout">
                {/* Left: Calendar */}
                <div className="cal-main">
                  <table className="cal-table">
                    <thead><tr>{WEEKDAYS.map((n, i) => <th key={i} className={"cal-weekday"+(i===0||i===6?" cal-weekend":"")}>{n}</th>)}</tr></thead>
                    <tbody>
                      {weeks.map((row, wi) => (
                        <tr key={wi}>
                          {row.map((cell, ci) => {
                            if (cell.empty) return <td key={"e"+ci} className="cal-empty"></td>;
                            const cl = ["cal-day"];
                            if (cell.isToday) cl.push("cal-today");
                            if (cell.isWeekend) cl.push("cal-weekend");
                            if (cell.jieQi) cl.push("cal-jieqi");
                            if (selected === cell.day) cl.push("cal-selected");
                            return (
                              <td key={cell.day} className={cl.join(" ")} onClick={() => handleDayClick(cell.day)}>
                                <div className="cal-solar">{cell.day}</div>
                                {cell.jieQi ? (
                                  <div className="cal-jieqi-name">{cell.jieQi}</div>
                                ) : cell.info ? (
                                  <div className="cal-lunar">{cell.info.lunarDay}</div>
                                ) : null}
                                {cell.info?.dayGz ? (
                                  <div className="cal-ganzhi"><Stem c={cell.info.dayGz[0]} /><Branch c={cell.info.dayGz[1]} /></div>
                                ) : null}
                              </td>
                            );
                          })}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Right: Detail Panel (sticky) */}
                <div className="cal-sidebar">
                  {detailInfo ? (
                    <DateDetail
                      year={year} month={month} day={detailInfo.day}
                      info={detailInfo.info} firstDay={firstDay}
                      onClose={() => { setSelected(null); setDetailInfo(null); }}
                    />
                  ) : (
                    <div className="cal-detail cal-detail-empty">
                      <div className="cal-detail-placeholder">
                        <div className="cd-empty-icon">📅</div>
                        <p>点击日期查看详细信息</p>
                        <p className="cd-empty-sub">公历 · 农历 · 干支 · 节气 · 宜忌</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="info-box" style={{marginTop:16}}>
                <strong>📌 说明：</strong>点击日期查看详细信息。红色标注为节气日。干支颜色代表五行属性。
              </div>
            </div>
          </TocSidebar>
        </div>
      </section>
    </div>
  );
}