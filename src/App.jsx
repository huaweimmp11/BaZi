import { useState, useEffect, useRef } from "react";
import { Routes, Route, NavLink, useLocation, useNavigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BasicsPage from "./pages/BasicsPage";
import CalculatorPage from "./pages/CalculatorPage";
import ShiShenPage from "./pages/ShiShenPage";
import PatternsPage from "./pages/PatternsPage";
import ClassicsPage from "./pages/ClassicsPage";
import MethodsPage from "./pages/MethodsPage";
import CalendarPage from "./pages/CalendarPage";
import RelationsPage from "./pages/RelationsPage";
import "./App.css";
import QuizPage from './pages/QuizPage';
import WrongBookDialog from './components/WrongBookDialog';
import "./animations.css";
import "./wuxing.css";

const links = [
  { to: "/", label: "🏠 首页" },
  { to: "/basics", label: "📖 基础入门" },
  { to: "/calculator", label: "🧮 在线排盘" },
  { to: "/relations", label: "🔗 干支关系" },
  { to: "/shishen", label: "🔤 十神" },
  { to: "/patterns", label: "🏛️ 格局大运" },
  { to: "/methods", label: "📐 推算起法" },

  { to: "/classics", label: "📚 经典参考" }
];

const THEMES = [
  { value: "guya", label: "古雅" },
  { value: "moyu", label: "墨玉" }
];

function CrossFade({ children, locationKey }) {
  const [prevChild, setPrevChild] = useState(null);
  const [exiting, setExiting] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    if (locationKey) {
      setPrevChild(children);
      setExiting(true);
      timerRef.current = setTimeout(() => {
        setExiting(false);
        setPrevChild(null);
      }, 200);
    }
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [locationKey]);

  return (
    <div className="route-container">
      <div className="crossfade-wrap">
        {exiting && prevChild && (
          <div className="crossfade-exit-active">{prevChild}</div>
        )}
        <div className="crossfade-enter-active">{children}</div>
      </div>
    </div>
  );
}

export default function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [theme, setTheme] = useState("guya");
  const [dd, setDD] = useState(false);
  const [wbOpen, setWbOpen] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("bazi-theme");
    if (saved && THEMES.some(t => t.value === saved)) {
      setTheme(saved);
      document.documentElement.dataset.theme = saved;
    } else {
      document.documentElement.dataset.theme = "guya";
    }
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("bazi-theme", theme);
  }, [theme]);

  useEffect(() => { if ('scrollRestoration' in history) history.scrollRestoration = 'manual'; window.scrollTo(0, 0); }, []);
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, [location.pathname]);

  return (
    <div style={{ background: "var(--paper)", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <header className="header">
        <div className="header-inner">
          <div className="logo"><span>八</span>字命理 · <span>学</span></div>
          <nav className="nav">
            {links.filter(l => l.to !== "/classics").map(l => (
              <NavLink key={l.to} to={l.to} end={l.to === "/"} className={({ isActive }) => isActive ? "active" : ""}>
                {l.label}
              </NavLink>
            ))}
            <div className="nav-dd-wrap">
              <button className="nav-dd-btn" onClick={() => setToolsOpen(o => !o)} onBlur={() => setTimeout(() => setToolsOpen(false), 150)}>
                🛠️ 工具 ▾
              </button>
              {toolsOpen && <div className="nav-dd-menu">
                <button className="nav-dd-item" onClick={() => { setToolsOpen(false); navigate("/tools"); }}>📅 万年历</button>
                <button className="nav-dd-item" onClick={() => { setToolsOpen(false); navigate("/quiz"); }}>📝 随堂测验</button>
              </div>}
            </div>
            <NavLink to="/classics" className={({ isActive }) => isActive ? "active" : ""}>📚 经典参考</NavLink>
                        <div className="theme-dd-wrap">
              <button className="theme-dd-btn" onClick={() => setDD(o => !o)} onBlur={() => setTimeout(() => setDD(false), 150)}>
                {THEMES.find(t => t.value === theme)?.label || "主题"} ▾
              </button>
              {dd && <div className="theme-dd-menu">
                {THEMES.map(t => (
                  <div key={t.value} className={"theme-dd-item" + (t.value === theme ? " active" : "")}
                    onMouseDown={() => { setTheme(t.value); setDD(false); }}>
                    {t.label}
                  </div>
                ))}
              </div>}
            </div>
          </nav>
        </div>
      </header>

      <div style={{ flex: 1 }}>
        <CrossFade locationKey={location.pathname}>
          <Routes location={location}>
            <Route path="/" element={<HomePage />} />
            <Route path="/basics" element={<BasicsPage />} />
            <Route path="/methods" element={<MethodsPage />} />
            <Route path="/calculator" element={<CalculatorPage />} />
            <Route path="/shishen" element={<ShiShenPage />} />
            <Route path="/patterns" element={<PatternsPage />} />
            <Route path="/tools" element={<CalendarPage />} />
            <Route path="/classics" element={<ClassicsPage />} />
            <Route path="/relations" element={<RelationsPage />} />
            <Route path="/quiz" element={<QuizPage openWrongBook={() => setWbOpen(true)} />} />
          </Routes>
        </CrossFade>
      </div>

      <WrongBookDialog open={wbOpen} onClose={() => setWbOpen(false)} />
      <footer className="footer">
        <p><strong>八字命理 · 从零开始学</strong> — 传承经典，理性研习</p>
        <p style={{ marginTop: 8, fontSize: "0.8rem" }}>命理学为传统文化遗产，其理论未经过现代科学验证，请理性对待</p>
      </footer>
    </div>
  );
}
