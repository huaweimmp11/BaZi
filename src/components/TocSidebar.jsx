import { useState, useEffect, useRef, useCallback } from "react";

export default function TocSidebar({ children }) {
  const [headings, setHeadings] = useState([]);
  const [activeId, setActiveId] = useState("");
  const [open, setOpen] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;
    const items = [];
    el.querySelectorAll("h2, h3, h4").forEach((h, idx) => {
      if (!h.id) h.id = "toc-" + idx;
      items.push({ id: h.id, text: h.textContent.trim(), level: +h.tagName[1] });
    });
    setHeadings(items);
    if (items.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        let best = null;
        for (const e of entries) {
          if (e.isIntersecting) { best = e.target.id; break; }
        }
        if (best) setActiveId(best);
      },
      { rootMargin: "-60px 0px -65% 0px" }
    );
    items.forEach(({ id }) => {
      const h = document.getElementById(id);
      if (h) observer.observe(h);
    });
    return () => observer.disconnect();
  }, [children]);

  const scrollTo = useCallback((id) => {
    const el = document.getElementById(id);
    if (el) { el.scrollIntoView({ behavior: "smooth", block: "start" }); setActiveId(id); setOpen(false); }
  }, []);

  if (headings.length < 3) return <div className="toc-wrapper">{children}</div>;

  return (
    <div className="toc-wrapper">
      <div className="toc-content" ref={contentRef}>{children}</div>
      <button className="toc-toggle" onClick={() => setOpen(o => !o)} title="目录">
        {open ? "✕" : "☰"}
      </button>
      <nav className={"toc-sidebar" + (open ? " toc-open" : "")}>
        <div className="toc-title">本页目录</div>
        {headings.map(h => (
          <button key={h.id} className={"toc-item toc-l" + h.level + (activeId === h.id ? " toc-active" : "")} onClick={() => scrollTo(h.id)}>
            {h.text}
          </button>
        ))}
      </nav>
    </div>
  );
}
