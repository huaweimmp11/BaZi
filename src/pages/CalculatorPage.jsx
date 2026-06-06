import TocSidebar from "../components/TocSidebar";
﻿import { useState } from "react";
import { calculate } from "../engine/bazi";

const hours = [
  { v: 0, l: "子时 23:00-00:59" }, { v: 2, l: "丑时 01:00-02:59" }, { v: 4, l: "寅时 03:00-04:59" },
  { v: 6, l: "卯时 05:00-06:59" }, { v: 8, l: "辰时 07:00-08:59" }, { v: 10, l: "巳时 09:00-10:59" },
  { v: 12, l: "午时 11:00-12:59" }, { v: 14, l: "未时 13:00-14:59" }, { v: 16, l: "申时 15:00-16:59" },
  { v: 18, l: "酉时 17:00-18:59" }, { v: 20, l: "戌时 19:00-20:59" }, { v: 22, l: "亥时 21:00-22:59" }
];
const pn = ["年柱", "月柱", "日柱", "时柱"];

export default function CalculatorPage() {
  const [showSun, setShowSun] = useState(false);
  const [y, setY] = useState(2000);
  const [m, setM] = useState(1);
  const [d, setD] = useState(15);
  const [h, setH] = useState(12);
  const [g, setG] = useState("male");
  const [r, setR] = useState(null);

  const doCalc = () => {
    if (!y || !m || !d) { alert("请填写完整"); return; }
    setR(calculate(y, m, d, h, g));
  };

  return (
    <div>
      <div className="page-header">
        <div className="container"><h1>在线排盘</h1><p>输入出生信息 · 一键排四柱八字</p></div>
      </div>
      <section className="content">
        <div className="container">
          <TocSidebar>
            <div className="content-body">
          
              <div className="collapsible" style={{"marginTop":"14px"}}>
                <button className="collapsible-btn" onClick={() => setShowSun(!showSun)}>🌞 关于真太阳时 {showSun ? "▲" : "▼"}</button>
                <div className={"collapsible-body" + (showSun ? "" : " collapsible-hidden")}>
<h4>八字——真太阳时</h4>八字命理学的根基在于“天人合一”，其时间系统完全由太阳的相对位置决定使用真太阳时排盘后，时辰的天干必须用“五鼠遁”重新计算，整个时柱的干支组合都可能改变<h4>排盘操作建议</h4><ol><li>获取准确的出生时间：记下北京时间（官方的出生证明时间）</li><li>将北京时间换算成真太阳时：</li></ol><ol><li>手动方法：根据出生地经度，每比东经 120° 小 1 度，时间就减 4 分钟，反之每大 1 度，时间就加 4 分钟</li><li>推荐方法：使用可靠的在线真太阳时换算工具或专业排盘软件（<code><a href="https://www.yigua.net/ztys-chaxun" target="_blank">https://www.yigua.net/ztys-chaxun</a></code>），输入公历日期、时间、出生起，即可直接得到校正后的时间</li></ol><ol><li>按真太阳时确定时辰：用校正后的时间，对照古代的十二时辰（23 点 ~ 1 点对应子时）来确定是哪一个时辰</li><li>排定四柱：基于校正后的时辰，排定完整的年、月、日、时四柱</li></ol><h4>案例</h4>出生信息：2026 年 6 月 3 日北京时间 14 时 30 分在新疆喀什市<h4>第一步：确定日柱</h4>通过万年历<code><a href="https://www.wnlcha.com/" target="_blank">https://www.wnlcha.com/</a></code>查询，2026 年 6 月 3 日的干支是戊申日，日干为：戊<h4>第二步：换算时间</h4>将北京时间换算成真太阳时，得到 11 时 36 分为出生时间<h4>第三步：根据真太阳时确定时辰</h4>午时：11 点 ~ 13 点，所以日支为：午<h4>第四步：用“五鼠遁”来推算出时干</h4>已知日柱的干支和时支，来推算时干，日干为戊，戊日壬子时，根据壬子时按地支顺序推算得到戊午时，所以时干为：戊，时柱即为：戊午日<h4>时间换算前后对比差异</h4><table><tr><td>对比项</td><td>北京时间</td><td>真太阳时校正后</td></tr><tr><td>出生时间</td><td>14:30</td><td>11:36</td></tr><tr><td>对应的时支</td><td>未时</td><td>午时</td></tr><tr><td>日干</td><td>戊</td><td>戊</td></tr><tr><td>五鼠遁推时干</td><td>己未</td><td>戊午</td></tr><tr><td>最终时柱</td><td>己未</td><td>戊午</td></tr></table><h4>这个变化意味着什么？</h4><ol><li>五行变了：未为土，午为火。时柱从“己未”（湿土）变成“戊午”（旺火）。</li><li>十神变了：日干戊土，见己未为“劫财”；见戊午，天干戊是“比肩”，地支午中藏丁火（正印）、己土（劫财）。整个时柱对日主的帮扶性质和力度完全不同。</li><li>子女宫变了：时柱代表子女，用未和用午断子女的信息会完全不同。</li><li>格局可能受影响：如果命局喜火，那么“戊午”时就是好事，用北京时间排成“己未”就可能误判。</li></ol>这就是为什么在经度偏差较大的地区，必须用真太阳时校正时辰——时辰一错，时柱的干支就可能全错，直接影响断命的准确性。
                </div>
              </div>

          <div className="info-box"><strong>💡</strong> 输入公历出生信息，基于万年历数据精准推算。</div>

          <div className="calc-form">
            <div className="form-row">
              <div className="form-group"><label>公历年份</label><input type="number" value={y} onChange={e => setY(+e.target.value)} min={1900} max={2100} /></div>
              <div className="form-group"><label>月份</label><input type="number" value={m} onChange={e => setM(+e.target.value)} min={1} max={12} /></div>
            </div>
            <div className="form-row">
              <div className="form-group"><label>日期</label><input type="number" value={d} onChange={e => setD(+e.target.value)} min={1} max={31} /></div>
              <div className="form-group"><label>时辰</label><select value={h} onChange={e => setH(+e.target.value)}>{hours.map(hh => <option key={hh.v} value={hh.v}>{hh.l}</option>)}</select></div>
            </div>
            <div className="form-row" style={{ gridTemplateColumns: "1fr 1fr" }}>
              <div className="form-group"><label>性别</label><select value={g} onChange={e => setG(e.target.value)}><option value="male">男</option><option value="female">女</option></select></div>
            </div>
            <div className="form-actions">
              <button className="btn btn-primary" onClick={doCalc}>📊 开始排盘</button>
              <button className="btn btn-secondary" onClick={() => setR(null)}>🔄 清空</button>
            </div>
          </div>

          {r && (
            <div>
              <h3>📋 排盘结果</h3>
              <p className="small" style={{color:"var(--ink-lighter)",fontSize:"0.85rem",marginBottom:12}}>
                {y}年{m}月{d}日 {h}时 · {g === "male" ? "男" : "女"}
              </p>

              {/* 四柱表 */}
              <div className="bazi-chart">
                <div className="cl"></div>
                {pn.map(n => <div key={n} className="cl">{n}</div>)}
                <div className="cl">天干</div>
                {r.pillars.map((p, i) =>
                  <div key={"s"+i} className="cp">
                    <div className={"stem wx-" + p.wuxing}>{p.stem}</div>
                    <div className="ss">{i === 2 ? "日主" : r.shiShenPillars[i]}</div>
                  </div>
                )}
                <div className="cl">地支</div>
                {r.pillars.map((p, i) =>
                  <div key={"b"+i} className="cp">
                    <div className={"branch wx-" + p.wuxing}>{p.branch}</div>
                  </div>
                )}
                <div className="cl">纳音</div>
                {r.pillars.map((p, i) =>
                  <div key={"n"+i} className="cp">
                    <div className="ny">{p.naYin}</div>
                  </div>
                )}
                <div className="cl">藏干</div>
                {r.hiddenStems.map((hs, i) =>
                  <div key={"h"+i} className="cp">
                    <div className="hs">
                      {hs.map((x, j) => {
                        const wx = ["木","木","火","火","土","土","金","金","水","水"][x.stemIdx];
                        return <span key={j} className={"wx-" + wx} style={{marginRight:4}}>{x.stem}</span>;
                      })}
                    </div>
                  </div>
                )}
              </div>

              {/* 十神表 */}
              <h3>🔤 十神</h3>
              <table><thead><tr><th>四柱</th>{pn.map(n => <th key={n}>{n}</th>)}</tr></thead><tbody>
                <tr><th>天干</th>{r.pillars.map((p, i) => <td key={i}><span className={"wx-" + p.wuxing}>{p.stem}</span></td>)}</tr>
                <tr><th>十神</th>{r.shiShenPillars.map((s, i) => <td key={i}>{i === 2 ? "日主" : s}</td>)}</tr>
                <tr><th>五行</th>{r.pillars.map((p, i) => <td key={i}><span className={"wx-" + p.wuxing}>{p.wuxing}</span></td>)}</tr>
              </tbody></table>

              {/* 大运 */}
              <h3>🚀 大运</h3>
              <p className="small" style={{color:"var(--ink-lighter)",fontSize:"0.85rem"}}>
                {r.daYun.forward ? "顺排" : "逆排"} · {r.daYun.startAge}岁起运
              </p>
              <table><thead><tr><th>大运</th>{r.daYun.luckPillars.map((lp, i) => <th key={i}>{lp.stem}{lp.branch}</th>)}</tr></thead><tbody>
                <tr><th>十神</th>{r.daYun.luckPillars.map((lp, i) => <td key={i}>{lp.shiShen}</td>)}</tr>
                <tr><th>年龄</th>{r.daYun.luckPillars.map((lp, i) => <td key={i}>{lp.ageStart}-{lp.ageEnd}岁</td>)}</tr>
              </tbody></table>

              <div className="info-box" style={{marginTop:16}}>
                <strong>⚠️ 理性提示：</strong>命理学为传统文化遗产，其理论未经过现代科学验证，请理性对待。
              </div>
            </div>
          )}
        </div>
          </TocSidebar>
        </div>
      </section>
    </div>
  );
}


