import { useState } from "react";
import { calculate } from "../engine/bazi";

const hours = [
  { v: 0, l: "子时 23:00-00:59" }, { v: 2, l: "丑时 01:00-02:59" }, { v: 4, l: "寅时 03:00-04:59" },
  { v: 6, l: "卯时 05:00-06:59" }, { v: 8, l: "辰时 07:00-08:59" }, { v: 10, l: "巳时 09:00-10:59" },
  { v: 12, l: "午时 11:00-12:59" }, { v: 14, l: "未时 13:00-14:59" }, { v: 16, l: "申时 15:00-16:59" },
  { v: 18, l: "酉时 17:00-18:59" }, { v: 20, l: "戌时 19:00-20:59" }, { v: 22, l: "亥时 21:00-22:59" }
];
const pn = ["年柱", "月柱", "日柱", "时柱"];

export default function CalculatorPage() {
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
        <div className="container"><div className="content-body">
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
        </div></div>
      </section>
    </div>
  );
}
