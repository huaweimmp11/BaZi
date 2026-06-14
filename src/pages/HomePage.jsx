import { Link } from "react-router-dom";
import QUIZ_DATA from "../data/quizData";

export default function HomePage() {
  const steps = [
    { step: 1, title: "阴阳五行 · 基础", desc: "金木水火土相生相克，阴阳消长", link: "/basics" },
    { step: 2, title: "天干地支 · 干支体系", desc: "十天干十二地支、刑冲合害", link: "/basics" },
    { step: 3, title: "推算起法 · 五虎遁五鼠遁", desc: "年柱/月柱/日柱/时柱的推算方法", link: "/methods" },
    { step: 4, title: "排盘实践 · 在线工具", desc: "输入出生信息，一键排四柱八字", link: "/calculator" },
    { step: 5, title: "十神体系 · 关系语言", desc: "比劫食伤财官杀印", link: "/shishen" },
    { step: 6, title: "旺衰格局 · 取用神", desc: "正格八格、调候用神、大运流年", link: "/patterns" }
  ];

  const navCards = [
    { icon: "📖", title: "基础入门", desc: "阴阳五行、天干地支、节气时令", link: "/basics", color: "var(--jade)" },
    { icon: "📡", title: "干支关系", desc: "六合六冲、三合三会、相刑相害", link: "/relations", color: "var(--gold)" },
    { icon: "🧮", title: "十神体系", desc: "比劫食伤财官杀印的克制关系", link: "/shishen", color: "var(--red)" },
    { icon: "🏛️", title: "格局大运", desc: "正格八格、旺衰判断、大运流年", link: "/patterns", color: "var(--red)" },
    { icon: "🧙", title: "推算起法", desc: "五虎遁、五鼠遁、日柱计算、起大运", link: "/methods", color: "var(--jade)" },
    { icon: "📜", title: "经典参考", desc: "《渊海子平》《滴天醒》《笼后签》", link: "/classics", color: "var(--gold)" },
  ];

  const tips = [
    "阴阳五行的核心是“生克制化”，相生为友、相克为主",
    "十天干中，甲丙戊庚壬为阳，乙丁己辛癸为阴",
    "子午卯酉为“四正”方位，居东西南北四正，气势最正",
    "全站共有 " + QUIZ_DATA.length + " 道随堂测验题目，每次随机抽 10 题",
    "日干是命主自己，称为“日主”“元男”，是整个八字的核心",
  ];
  const tip = tips[Math.floor(Math.random() * tips.length)];

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
          <div className="hp-layout">
            <div className="hp-main">
              {/* Quick nav */}
              <div className="section-title" style={{textAlign:"left",marginBottom:"16px"}}>
                <h2 style={{border:"none",margin:0}}>🧰 快速导航</h2>
              </div>
              <div className="hp-nav-grid">
                {navCards.map(c => (
                  <Link key={c.title} to={c.link} className="hp-nav-card" style={{borderTopColor:c.color}}>
                    <span className="hp-nav-icon">{c.icon}</span>
                    <span className="hp-nav-title">{c.title}</span>
                    <span className="hp-nav-desc">{c.desc}</span>
                    <span className="hp-nav-arrow">→</span>
                  </Link>
                ))}
              </div>

              {/* Knowledge card */}
              <div className="hp-tip-card">
                <div className="hp-tip-icon">💡</div>
                <div className="hp-tip-body">
                  <div className="hp-tip-label">随机小知识</div>
                  <div className="hp-tip-text">{tip}</div>
                </div>
              </div>
            </div>

            <aside className="hp-sidebar">
              <div className="hp-sidebar-section">
                <div className="hp-sidebar-title">🎯 学习路径</div>
                <div className="hp-roadmap">
                  {steps.map(s => (
                    <Link key={s.step} to={s.link} className="hp-roadmap-item" data-step={s.step}>
                      <span className="hp-roadmap-step">{s.step}</span>
                      <div className="hp-roadmap-body">
                        <div className="hp-roadmap-title">{s.title}</div>
                        <div className="hp-roadmap-desc">{s.desc}</div>
                      </div>
                      <span className="hp-roadmap-arrow">›</span>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="hp-sidebar-section">
                <div className="hp-sidebar-title">📊 学习概览</div>
                <div className="hp-stats">
                  <div className="hp-stat-item"><span className="hp-stat-num">{navCards.length}</span><span className="hp-stat-label">模块</span></div>
                  <div className="hp-stat-item"><span className="hp-stat-num">{QUIZ_DATA.length}</span><span className="hp-stat-label">题库</span></div>
                  <div className="hp-stat-item"><span className="hp-stat-num">9</span><span className="hp-stat-label">页面</span></div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--paper-dark)" }}>
        <div className="container">
          <div className="section-title">
            <h2>🛠️ 实用工具</h2>
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
              <span className="card-icon">📝</span>
              <h3>随堂测验</h3>
              <p>三档难度，60+ 题库，即时判分+解析+错题本</p>
              <Link to="/quiz" style={{ color: "var(--red)", fontWeight: 600, fontSize: "0.85rem" }}>去做题 →</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
