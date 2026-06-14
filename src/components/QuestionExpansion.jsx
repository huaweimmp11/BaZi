import { useState, useEffect, useCallback } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import * as Tabs from "@radix-ui/react-tabs";
import * as Checkbox from "@radix-ui/react-checkbox";
import * as RadioGroup from "@radix-ui/react-radio-group";
import QUIZ_DATA from "../data/quizData";
import { createPortal } from "react-dom";

const CUSTOM_KEY = "bazi_custom_questions";
function getCustom() { try { return JSON.parse(localStorage.getItem(CUSTOM_KEY) || "[]"); } catch { return []; } }
function setCustom(list) { localStorage.setItem(CUSTOM_KEY, JSON.stringify(list)); }

export function getAllQuestions(staticData) {
  return [...staticData, ...getCustom()];
}

async function callDeepSeek(apiKey, difficulty, categories, count) {
  const sysPrompt = "你是一位精通八字命理的中文专家。请根据用户指定的难度和知识点，生成一批中文选择题（支持单选或多选），严格以 JSON 数组格式输出。每个题目对象包含字段：difficulty（难度，仅允许 beginner/intermediate/expert）、type（题型，仅允许 single/multiple）、category（知识点分类）、question（题目）、options（字符串数组，如[A. 选项1, B. 选项2]）、answer（正确选项字母的数组，如[B]）、explanation（详细解析）。不要输出任何额外文字。";
  const userPrompt = `难度：${difficulty}；知识点：${categories.join("、")}；生成数量：${count}道。`;
  const resp = await fetch("https://api.deepseek.com/v1/chat/completions", {
    method: "POST",
    headers: { "Authorization": "Bearer " + apiKey, "Content-Type": "application/json" },
    body: JSON.stringify({
      model: "deepseek-chat",
      messages: [{ role: "system", content: sysPrompt }, { role: "user", content: userPrompt }],
      temperature: 0.7, max_tokens: 4000
    })
  });
  if (!resp.ok) throw new Error("API 请求失败: " + resp.status);
  const data = await resp.json();
  const text = data.choices?.[0]?.message?.content || "";
  try { return { questions: JSON.parse(text), raw: text }; }
  catch { return { questions: null, raw: text }; }
}

function mockGenerate(difficulty, categories) {
  const mock = [
    { id: "mock_001", difficulty, type: "single", category: categories[0] || "天干",
      question: "日干为甲木，见庚金，庚金是甲的什么十神？",
      options: ["A. 正官", "B. 七杀", "C. 偏财", "D. 劫财"],
      answer: ["B"],
      explanation: "甲为阳木，庚为阳金，金克木，同性相克为七杀。" },
    { id: "mock_002", difficulty, type: "single", category: categories[0] || "五行",
      question: "五行相生的正确顺序是？",
      options: ["A. 木生火生土生金生水", "B. 木生金生火生水生土", "C. 金生木生水生火生土", "D. 水生金生木生火生土"],
      answer: ["A"],
      explanation: "木生火、火生土、土生金、金生水、水生木。" }
  ];
  return { questions: mock, raw: JSON.stringify(mock) };
}

export default function QuestionExpansion() {
  const [open, setOpen] = useState(false);
  const [toastOpen, setToastOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [toastMsg, setToastMsg] = useState("");

  const showToast = useCallback((msg) => { setToastMsg(msg); setToastOpen(true); }, []);
  useEffect(() => { if (toastOpen) { const t = setTimeout(() => setToastOpen(false), 2200); return () => clearTimeout(t); } }, [toastOpen]);

  return (
    <>
      <button className="btn btn-secondary" onClick={() => setOpen(true)} style={{marginBottom:16}}>
        📚 题库扩充
      </button>

      <Dialog.Root open={open} onOpenChange={(v) => { if (isLoading) return; setOpen(v); if (v) { document.body.style.overflow = "hidden"; document.documentElement.style.overflow = "hidden"; document.body.style.paddingRight = "15px"; } else { document.body.style.overflow = ""; document.documentElement.style.overflow = ""; document.body.style.paddingRight = ""; } }}>
        <Dialog.Portal>
          <Dialog.Overlay className="qe-overlay" />
          <Dialog.Content className="qe-dialog qe-content" onEscapeKeyDown={(e) => { if (isLoading) e.preventDefault(); }} onInteractOutside={(e) => { if (isLoading) e.preventDefault(); }}>
            {isLoading && <div className="qe-loading-overlay"><div className="qe-loading-spinner">⏳</div><div className="qe-loading-text">正在生成题目...</div></div>}
            <Dialog.Title className="qe-title">📚 题库扩充</Dialog.Title>
            <Dialog.Description className="qe-desc">AI 批量生成或手动添加题目</Dialog.Description>
            <div className="qe-custom-count">题库总量：{QUIZ_DATA.length + getCustom().length} 题</div>

            <Tabs.Root defaultValue="ai" className="qe-tabs">
              <Tabs.List className="qe-tab-list" aria-label="生成方式">
                <Tabs.Trigger className="qe-tab" value="ai">🤖 AI 批量生成</Tabs.Trigger>
                <Tabs.Trigger className="qe-tab" value="manual">✏️ 手动添加</Tabs.Trigger>
              </Tabs.List>

              <Tabs.Content value="ai" className="qe-tab-content">
                <AIGenerationTab showToast={showToast} onClose={() => setOpen(false)} onLoadingChange={setIsLoading} />
              </Tabs.Content>
              <Tabs.Content value="manual" className="qe-tab-content">
                <ManualAddTab showToast={showToast} onClose={() => setOpen(false)} />
              </Tabs.Content>
            </Tabs.Root>

            <div className="qe-footer">
              <Dialog.Close className="btn btn-secondary" disabled={isLoading} style={isLoading ? {opacity:.5,cursor:"not-allowed"} : {}}>关闭</Dialog.Close>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>

      {toastOpen && createPortal(
        <div className="qe-toast-root" onClick={() => setToastOpen(false)}>
          {toastMsg}
        </div>,
        document.body
      )}
    </>
  );
}

function AIGenerationTab({ showToast, onClose, onLoadingChange }) {
  const [step, setStep] = useState(1);
  const [difficulty, setDifficulty] = useState("beginner");
  const [categories, setCategories] = useState(["天干地支"]);
  const [count, setCount] = useState(10);
  const [apiKey, setApiKey] = useState("");
  const [loading, setLoading] = useState(false);
  const [drafts, setDrafts] = useState([]);
  const [rawText, setRawText] = useState("");
  const [selected, setSelected] = useState({});
  const [error, setError] = useState("");

  const allCats = ["天干地支","五行生克","排盘规则","十神","旺衰","格局","调候","古籍"];
  const diffOpts = [{v:"beginner",l:"新手"},{v:"intermediate",l:"资深"},{v:"expert",l:"大神"}];

  const toggleCat = useCallback((cat) => {
    setCategories(prev => prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]);
  }, []);

  const doGenerate = useCallback(async () => {
    if (!apiKey.trim()) { setError("请输入 DeepSeek API Key"); return; }
    if (categories.length === 0) { setError("请选择至少一个知识点"); return; }
    setLoading(true); setError(""); if (onLoadingChange) onLoadingChange(true);
    try {
      const result = await callDeepSeek(apiKey, difficulty, categories.slice(0,5), Math.min(count, 30));
      if (result.questions) {
        setDrafts(result.questions.map(q => ({ ...q, id: "ai_" + Date.now() + "_" + Math.random().toString(36).slice(2,8) })));
        const sel = {}; result.questions.forEach(q => { sel[q.id] = true; });
        setSelected(sel);
        setStep(3);
      } else {
        setRawText(result.raw);
        setError("AI 返回格式有误，请重试。可查看原始返回文本。");
      }
    } catch (e) {
      setError(e.message || "请求失败");
    }
    setLoading(false); if (onLoadingChange) onLoadingChange(false);
  }, [apiKey, difficulty, categories, count]);

  const doMock = useCallback(() => {
    const result = mockGenerate(difficulty, categories);
    setDrafts(result.questions.map(q => ({ ...q, id: "mock_" + Date.now() + "_" + Math.random().toString(36).slice(2,8) })));
    const sel = {}; result.questions.forEach(q => { sel[q.id] = true; });
    setSelected(sel);
    setStep(3);
  }, [difficulty, categories, onClose]);

  const toggleSelect = useCallback((id) => {
    setSelected(prev => ({ ...prev, [id]: !prev[id] }));
  }, []);

  const importSelected = useCallback(() => {
    const toImport = drafts.filter(d => selected[d.id]);
    if (toImport.length === 0) { showToast("请选择要入库的题目"); return; }
    const existing = getCustom();
    setCustom([...existing, ...toImport]);
    showToast("已成功添加 " + toImport.length + " 道题目");
    setDrafts([]); setStep(1);
    if (onClose) setTimeout(onClose, 400);
  }, [drafts, selected, showToast]);

  if (step === 1) {
    return (
      <div className="qe-step">
        <h4>选择生成条件</h4>
        <div className="qe-field"><label>难度</label>
          <div className="qe-diff-select">
            {diffOpts.map(d => (
              <button key={d.v} className={"qe-diff-opt" + (difficulty === d.v ? " active" : "")} onClick={() => setDifficulty(d.v)}>{d.l}</button>
            ))}
          </div>
        </div>
        <div className="qe-field"><label>知识点（可多选）</label>
          <div className="qe-checkbox-group">
            {allCats.map(cat => (
              <label key={cat} className="qe-cb-label">
                <Checkbox.Root className="qe-cb" checked={categories.includes(cat)} onCheckedChange={() => toggleCat(cat)}>
                  <Checkbox.Indicator className="qe-cb-ind">{categories.includes(cat) ? "✓" : ""}</Checkbox.Indicator>
                </Checkbox.Root>
                {cat}
              </label>
            ))}
          </div>
        </div>
        <div className="qe-field"><label>生成数量</label>
          <input type="number" className="qe-input" value={count} onChange={e => setCount(Math.min(30, Math.max(1, +e.target.value || 1)))} min={1} max={30} />
        </div>
        <div className="qe-field"><label>DeepSeek API Key（必填）</label>
          <input type="password" className="qe-input qe-api-key" value={apiKey} onChange={e => setApiKey(e.target.value)} placeholder="sk-..." />
        </div>
        {error && <div className="qe-error">{error}</div>}
        <div className="qe-actions">
          <button className="btn btn-primary" onClick={doGenerate} disabled={loading}>{loading ? "⏳ 生成中..." : "🤖 开始生成"}</button>
          <button className="btn btn-secondary" onClick={doMock} disabled={loading}>📋 模拟生成（测试用）</button>
        </div>
      </div>
    );
  }

  if (step === 2) {
    return <div className="qe-step qe-loading">💫 正在生成题目...</div>;
  }

  if (step === 3) {
    return (
      <div className="qe-step">
        <div className="qe-draft-header">
          <span>共 {drafts.length} 道草稿</span>
          <label className="qe-cb-label"><Checkbox.Root className="qe-cb"
            checked={drafts.length > 0 && drafts.every(d => selected[d.id])}
            onCheckedChange={(v) => { const sel = {}; drafts.forEach(d => { sel[d.id] = v; }); setSelected(sel); }}>
            <Checkbox.Indicator className="qe-cb-ind">✓</Checkbox.Indicator></Checkbox.Root> 全选
          </label>
        </div>
        <div className="qe-draft-list">
          {drafts.map(d => (
            <div key={d.id} className="qe-draft-item">
              <label className="qe-cb-label">
                <Checkbox.Root className="qe-cb" checked={!!selected[d.id]} onCheckedChange={() => toggleSelect(d.id)}>
                  <Checkbox.Indicator className="qe-cb-ind">✓</Checkbox.Indicator>
                </Checkbox.Root>
              </label>
              <div className="qe-draft-body">
                <div className="qe-draft-q">{d.question}</div>
                <div className="qe-draft-meta"><span>{d.difficulty === "beginner" ? "🌱 新手" : d.difficulty === "intermediate" ? "🔥 资深" : "👑 大神"}</span><span>{d.category}</span></div>
              </div>
            </div>
          ))}
        </div>
        <div className="qe-actions">
          <button className="btn btn-primary" onClick={importSelected}>📥 全部入库</button>
          <button className="btn btn-secondary" onClick={() => { setDrafts([]); setStep(1); }}>🔄 重新生成</button>
        </div>
      </div>
    );
  }

  return null;
}

function ManualAddTab({ showToast, onClose }) {
  const [diff, setDiff] = useState("beginner");
  const [type, setType] = useState("single");
  const [cat, setCat] = useState("天干");
  const [qText, setQText] = useState("");
  const [opts, setOpts] = useState(["","","",""]);
  const [answer, setAnswer] = useState([]);
  const [expl, setExpl] = useState("");

  const handleAdd = useCallback(() => {
    if (!qText.trim() || opts.some(o => !o.trim())) { showToast("请填写完整信息"); return; }
    if (answer.length === 0) { showToast("请选择正确答案"); return; }
    const newQ = {
      id: "manual_" + Date.now(),
      difficulty: diff, type, category: cat,
      question: qText,
      options: opts.map((o, i) => String.fromCharCode(65 + i) + ". " + o),
      answer, explanation: expl
    };
    const existing = getCustom();
    setCustom([...existing, newQ]);
    showToast("已添加 1 道题目");
    setQText(""); setOpts(["","","",""]); setAnswer([]); setExpl("");
    if (onClose) setTimeout(onClose, 400);
  }, [diff, type, cat, qText, opts, answer, expl, showToast]);

  const labels = ["A","B","C","D"];
  const diffOpts = [{v:"beginner",l:"新手"},{v:"intermediate",l:"资深"},{v:"expert",l:"大神"}];

  return (
    <div className="qe-step">
      <div className="qe-field"><label>难度</label>
        <div className="qe-diff-select">
          {diffOpts.map(d => (
            <button key={d.v} className={"qe-diff-opt" + (diff === d.v ? " active" : "")} onClick={() => setDiff(d.v)}>{d.l}</button>
          ))}
        </div>
      </div>
      <div className="qe-field"><label>题型</label>
        <div className="qe-diff-select">
          <button className={"qe-diff-opt" + (type === "single" ? " active" : "")} onClick={() => setType("single")}>单选题</button>
          <button className={"qe-diff-opt" + (type === "multiple" ? " active" : "")} onClick={() => setType("multiple")}>多选题</button>
        </div>
      </div>
      <div className="qe-field"><label>分类</label><input className="qe-input" value={cat} onChange={e => setCat(e.target.value)} /></div>
      <div className="qe-field"><label>题目</label><textarea className="qe-input qe-textarea" value={qText} onChange={e => setQText(e.target.value)} rows={3} /></div>
      {labels.map((l, i) => (
        <div key={l} className="qe-field qe-opt-row">
          <label>{l}.</label>
          <input className="qe-input" value={opts[i]} onChange={e => { const o = [...opts]; o[i] = e.target.value; setOpts(o); }} />
        </div>
      ))}
      <div className="qe-field"><label>正确答案</label>
        <div className="qe-checkbox-group">
          {labels.map(l => (
            <label key={l} className="qe-cb-label">
              <Checkbox.Root className="qe-cb" checked={answer.includes(l)} onCheckedChange={(v) => {
                if (type === "single") setAnswer(v ? [l] : []);
                else setAnswer(prev => v ? [...prev, l] : prev.filter(x => x !== l));
              }}>
                <Checkbox.Indicator className="qe-cb-ind">✓</Checkbox.Indicator>
              </Checkbox.Root>
              {l}
            </label>
          ))}
        </div>
      </div>
      <div className="qe-field"><label>解析</label><textarea className="qe-input qe-textarea" value={expl} onChange={e => setExpl(e.target.value)} rows={2} /></div>
      <div className="qe-actions"><button className="btn btn-primary" onClick={handleAdd}>添加题目</button></div>
    </div>
  );
}
