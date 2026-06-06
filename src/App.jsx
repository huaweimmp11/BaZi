import { useState, useEffect, useRef } from "react";
import { Routes, Route, NavLink, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BasicsPage from "./pages/BasicsPage";
import CalculatorPage from "./pages/CalculatorPage";
import ShiShenPage from "./pages/ShiShenPage";
import PatternsPage from "./pages/PatternsPage";
import ClassicsPage from "./pages/ClassicsPage";
import MethodsPage from "./pages/MethodsPage";
import "./App.css";
import "./animations.css";
import "./wuxing.css";

const links = [
  { to: "/", label: "🏠 首页" },
  { to: "/basics", label: "📖 基础" },
  { to: "/methods", label: "📐 起法" },
  { to: "/calculator", label: "🧮 排盘" },
  { to: "/shishen", label: "🔤 十神" },
  { to: "/patterns", label: "🏛️ 格局" },
  { to: "/classics", label: "📚 经典" }
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

  return (
    <div style={{ background: "var(--paper)", minHeight: "100vh" }}>
      <header className="header">
        <div className="header-inner">
          <div className="logo"><span>八</span>字命理 · <span>学</span></div>
          <nav className="nav">
            {links.map(l => (
              <NavLink key={l.to} to={l.to} end={l.to === "/"} className={({ isActive }) => isActive ? "active" : ""}>
                {l.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <CrossFade locationKey={location.pathname}>
        <Routes location={location}>
          <Route path="/" element={<HomePage />} />
          <Route path="/basics" element={<BasicsPage />} />
          <Route path="/methods" element={<MethodsPage />} />
          <Route path="/calculator" element={<CalculatorPage />} />
          <Route path="/shishen" element={<ShiShenPage />} />
          <Route path="/patterns" element={<PatternsPage />} />
          <Route path="/classics" element={<ClassicsPage />} />
        </Routes>
      </CrossFade>

      <footer className="footer">
        <p><strong>八字命理 · 从零开始学</strong> — 传承经典，理性研习</p>
        <p style={{ marginTop: 8, fontSize: "0.8rem" }}>命理学为传统文化遗产，其理论未经过现代科学验证，请理性对待</p>
      </footer>
    </div>
  );
}
