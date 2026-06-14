import { useState, useCallback } from "react";
import QUIZ_DATA from "../data/quizData";
import QuestionExpansion, { getAllQuestions } from "../components/QuestionExpansion";

const DIFF = {
  beginner: { label: "新手", desc: "天干地支、五行生克、十神名称", icon: "🌱" },
  intermediate: { label: "资深", desc: "旺衰格局、空亡、刑冲合害", icon: "🔥" },
  expert: { label: "大神", desc: "调候用神、格局成败、大运流年", icon: "👑" },
};

function shuffle(a) {
  const r = [...a];
  for (let i = r.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [r[i], r[j]] = [r[j], r[i]]; }
  return r;
}

function getWL() { try { return JSON.parse(localStorage.getItem("bazi-quiz-wrong") || "[]"); } catch { return []; } }
function setWL(l) { localStorage.setItem("bazi-quiz-wrong", JSON.stringify(l)); }

export default function QuizPage({ openWrongBook }) {
  const [phase, setPhase] = useState("select");
  const [diff, setDiff] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [idx, setIdx] = useState(0);
  const [answers, setAnswers] = useState({});
  const [confirmed, setConfirmed] = useState({});
  const [score, setScore] = useState(0);
  const [wrongs, setWrongs] = useState([]);

  const cur = questions[idx] || null;

  const start = useCallback((d) => {
    const merged = getAllQuestions(QUIZ_DATA);
    const pool = merged.filter(q => q.difficulty === d);
    if (pool.length === 0) return;
    const picked = shuffle(pool).slice(0, 10);
    setDiff(d); setQuestions(picked); setIdx(0);
    setAnswers({}); setConfirmed({}); setScore(0); setWrongs([]);
    setPhase("playing");
  }, []);

  const toggle = useCallback((opt) => {
    if (!cur || confirmed[cur.id]) return;
    setAnswers(p => {
      const c = p[cur.id] || [];
      if (cur.type === "single") return { ...p, [cur.id]: [opt] };
      const n = c.includes(opt) ? c.filter(x => x !== opt) : [...c, opt];
      return { ...p, [cur.id]: n };
    });
  }, [cur, confirmed]);

  const confirm = useCallback(() => {
    if (!cur) return;
    const ua = answers[cur.id] || [];
    const ca = cur.answer;
    const ok = ua.length === ca.length && ua.every(a => ca.includes(a));
    setConfirmed(p => ({ ...p, [cur.id]: true }));
    if (ok) setScore(s => s + 1);
    else setWrongs(w => [...w, { ...cur, userAnswer: ua }]);
  }, [cur, answers]);

  const next = useCallback(() => {
    if (idx < questions.length - 1) setIdx(i => i + 1);
    else {
      const existing = getWL();
      const add = wrongs.filter(w => !existing.some(e => e.id === w.id));
      setWL([...existing, ...add]);
      setPhase("result");
    }
  }, [idx, questions.length, wrongs]);

  if (phase === "select") {
    return (
      <div className="content"><div className="container"><div className="content-body">
        <QuestionExpansion />
        <h2 style={{textAlign:"center",border:"none",marginBottom:"0.5rem"}}>📝 随堂测验</h2>
        <p style={{textAlign:"center",color:"var(--ink-lighter)",marginBottom:"1.5rem"}}>
          选择难度，系统随机抽 10 题，检验你的八字水平
        </p>
        <div className="quiz-diff-grid">
          {Object.entries(DIFF).map(([k, v]) => (
            <div key={k} className="quiz-diff-card" onClick={() => start(k)}>
              <div className="quiz-diff-icon">{v.icon}</div>
              <div className="quiz-diff-label">{v.label}</div>
              <div className="quiz-diff-desc">{v.desc}</div>
              <div className="quiz-diff-count">{QUIZ_DATA.filter(q => q.difficulty === k).length} 题题库</div>
            </div>
          ))}
        </div>
      </div></div></div>
    );
  }

  if (phase === "result") {
    const pct = Math.round(score / questions.length * 100);
    const rank = diff === "expert" ? (pct >= 80 ? "堪比宗师！" : pct >= 60 ? "功底扎实" : "还需修炼")
      : diff === "intermediate" ? (pct >= 80 ? "优秀！" : pct >= 60 ? "还不错" : "再练练")
      : (pct >= 80 ? "学得不错！" : pct >= 60 ? "有基础了" : "继续加油");
    return (
      <div className="content"><div className="container"><div className="content-body quiz-result">
        <h2 style={{textAlign:"center",border:"none"}}>📊 测验完成</h2>
        <div className="quiz-score-circle">{score}/{questions.length}</div>
        <div className="quiz-pct">{pct}%</div>
        <div className="quiz-rank">{DIFF[diff].icon} {DIFF[diff].label} · {rank}</div>
        <div className="quiz-result-actions">
          <button className="btn btn-primary" onClick={() => start(diff)}>再来一组</button>
          <button className="btn btn-secondary" onClick={() => setPhase("select")}>选择难度</button>
          {wrongs.length > 0 && <button className="btn btn-secondary" onClick={openWrongBook}>📕 查看错题</button>}
        </div>
      </div></div></div>
    );
  }

  const ua = answers[cur?.id] || [];
  const ok = confirmed[cur?.id] || false;
  const ca = cur?.answer || [];

  return (
    <div className="content"><div className="container"><div className="content-body">
      <div className="quiz-top">
        <span className="quiz-progress">第 {idx + 1}/{questions.length} 题</span>
        <span className="quiz-diff-tag">{DIFF[diff]?.icon} {DIFF[diff]?.label}</span>
        <span className="quiz-score">得分：{score}</span>
      </div>
      <div className="quiz-cat">{cur?.category} · {cur?.type === "single" ? "单选题" : "多选题"}</div>
      <div className="quiz-question">{cur?.question}</div>
      <div className="quiz-options">
        {cur?.options.map(opt => {
          const k = opt.charAt(0);
          const sel = ua.includes(k);
          const cor = ca.includes(k);
          let cls = "quiz-opt";
          if (ok) { if (cor) cls += " correct"; if (sel && !cor) cls += " wrong"; }
          else if (sel) cls += " selected";
          return (
            <div key={k} className={cls} onClick={() => toggle(k)}>
              <span className="quiz-opt-key">{k}</span>
              <span className="quiz-opt-text">{opt.substring(2)}</span>
              {ok && cor && <span className="quiz-opt-mark">✓</span>}
              {ok && sel && !cor && <span className="quiz-opt-mark">✗</span>}
            </div>
          );
        })}
      </div>
      {!ok ? (
        <button className="btn btn-primary" disabled={ua.length === 0} onClick={confirm} style={{marginTop:16}}>提交答案</button>
      ) : (
        <div className="quiz-feedback">
          <div className={"quiz-feedback-icon " + (ua.length === ca.length && ua.every(a => ca.includes(a)) ? "correct" : "wrong")}>
            {ua.length === ca.length && ua.every(a => ca.includes(a)) ? "✅" : "❌"}
          </div>
          <div className="quiz-explanation"><strong>解析：</strong>{cur?.explanation}</div>
          <button className="btn btn-primary" onClick={next} style={{marginTop:12}}>
            {idx < questions.length - 1 ? "下一题 →" : "查看结果"}
          </button>
        </div>
      )}
    </div></div></div>
  );
}
