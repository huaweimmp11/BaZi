import { useState, useEffect } from "react";
function getWL() { try { return JSON.parse(localStorage.getItem("bazi-quiz-wrong") || "[]"); } catch { return []; } }
function setWL(l) { localStorage.setItem("bazi-quiz-wrong", JSON.stringify(l)); }
export default function WrongBookDialog({ open, onClose }) {
  const [list, setList] = useState([]);
  useEffect(() => { if (open) setList(getWL()); }, [open]);
  const remove = (id) => { const n = list.filter(w => w.id !== id); setList(n); setWL(n); };
  const clear = () => { setList([]); setWL([]); };
  if (!open) return null;
  return (
    <div className="dialog-overlay" onClick={onClose}>
      <div className="dialog quiz-wb-dialog" onClick={e => e.stopPropagation()}>
        <div className="dialog-header">
          <h3>📕 错题本</h3>
          <button className="dialog-close" onClick={onClose}>✕</button>
        </div>
        <div className="dialog-body">
          {list.length === 0 ? (
            <div style={{textAlign:"center",padding:"2rem 0",color:"var(--ink-lighter)"}}>
              <div style={{fontSize:"2rem",marginBottom:8}}>🎉</div>
              <p>暂无错题，继续保持！</p>
            </div>
          ) : (
            <>
              <div style={{marginBottom:12,color:"var(--ink-lighter)",fontSize:"0.85rem"}}>
                共 {list.length} 道错题
              </div>
              {list.map(w => (
                <div key={w.id} className="quiz-wb-item">
                  <div className="quiz-wb-head">
                    <span className="quiz-diff-tag" style={{fontSize:"0.72rem"}}>
                      {w.difficulty === "beginner" ? "🌱" : w.difficulty === "intermediate" ? "🔥" : "👑"}
                      {w.category}
                    </span>
                    <button className="quiz-wb-remove" onClick={() => remove(w.id)}>删除</button>
                  </div>
                  <div className="quiz-wb-question">{w.question}</div>
                  <div className="quiz-wb-answer">
                    <span style={{color:"var(--red)"}}>你的答案：{w.userAnswer?.join("、") || "未作答"}</span>
                    <span style={{color:"var(--jade)",marginLeft:16}}>正确答案：{w.answer?.join("、")}</span>
                  </div>
                  <div className="quiz-wb-explanation"><strong>解析：</strong>{w.explanation}</div>
                </div>
              ))}
              <div style={{textAlign:"center",marginTop:16}}>
                <button className="btn btn-secondary" onClick={clear} style={{color:"var(--red)"}}>清空错题本</button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
