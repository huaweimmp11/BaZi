import { Link } from "react-router-dom";

export default function HomePage() {
  const steps = [
    { step: 1, title: "阴阳五行 · 基础", desc: "金木水火土相生相克，阴阳消长", link: "/basics" },
    { step: 2, title: "天干地支 · 干支体系", desc: "十天干十二地支、刑冲合害", link: "/basics" },
    { step: 3, title: "推算起法 · 五虎遁五鼠遁", desc: "年柱/月柱/日柱/时柱的推算方法", link: "/methods" },
    { step: 4, title: "排盘实践 · 在线工具", desc: "输入出生信息，一键排四柱八字", link: "/calculator" },
    { step: 5, title: "十神体系 · 关系语言", desc: "比劫食伤财官杀印", link: "/shishen" },
    { step: 6, title: "旺衰格局 · 取用神", desc: "正格八格、调候用神、大运流年", link: "/patterns" }
  ];

  return (
    <div>
      <section className="hero">
        <div className="container">
          <h1>从零开始 · 八字命理</h1>
          <hr />
          <p>系统学习中国传统四柱命理学，从阴阳五行到格局用神，循序渐进</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>📖 学习路径</h2>
            <p>按顺序逐步深入，每步皆建立在前一步基础之上</p>
          </div>
          <div className="roadmap">
            {steps.map(s => (
              <div key={s.step} className="roadmap-item" data-step={s.step}>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <Link to={s.link} className="tag">开始 →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--paper-dark)" }}>
        <div className="container">
          <div className="section-title">
            <h2>🔧 实用工具</h2>
            <p>即学即用</p>
          </div>
          <div className="card-grid card-grid-2">
            <div className="card">
              <span className="card-icon">🧮</span>
              <h3>在线排盘</h3>
              <p>输入出生信息，一键四柱八字+大运+十神，万年历数据精准</p>
              <Link to="/calculator" style={{ color: "var(--red)", fontWeight: 600, fontSize: "0.85rem" }}>进入排盘 →</Link>
            </div>
            <div className="card">
              <span className="card-icon">📐</span>
              <h3>推算起法</h3>
              <p>五虎遁起月、五鼠遁起时、日柱公式、大运起法全解</p>
              <Link to="/methods" style={{ color: "var(--red)", fontWeight: 600, fontSize: "0.85rem" }}>学习方法 →</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
