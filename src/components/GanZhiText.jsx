import * as Tooltip from "@radix-ui/react-tooltip";

const STEM_DATA = {
  "甲": { wx: "木", yy: "阳", desc: "栋梁之木" },
  "乙": { wx: "木", yy: "阴", desc: "花草之木" },
  "丙": { wx: "火", yy: "阳", desc: "太阳之火" },
  "丁": { wx: "火", yy: "阴", desc: "灯烛之火" },
  "戊": { wx: "土", yy: "阳", desc: "高岗之土" },
  "己": { wx: "土", yy: "阴", desc: "田园之土" },
  "庚": { wx: "金", yy: "阳", desc: "斧钺之金" },
  "辛": { wx: "金", yy: "阴", desc: "珠玉之金" },
  "壬": { wx: "水", yy: "阳", desc: "江河之水" },
  "癸": { wx: "水", yy: "阴", desc: "雨露之水" }
};
const BRANCH_DATA = {
  "子": { wx: "水", desc: "子鼠·夜半" },
  "丑": { wx: "土", desc: "丑牛·凌晨" },
  "寅": { wx: "木", desc: "寅虎·平旦" },
  "卯": { wx: "木", desc: "卯兔·日出" },
  "辰": { wx: "土", desc: "辰龙·食时" },
  "巳": { wx: "火", desc: "巳蛇·隅中" },
  "午": { wx: "火", desc: "午马·日中" },
  "未": { wx: "土", desc: "未羊·日昳" },
  "申": { wx: "金", desc: "申猴·晡时" },
  "酉": { wx: "金", desc: "酉鸡·日入" },
  "戌": { wx: "土", desc: "戌狗·黄昏" },
  "亥": { wx: "水", desc: "亥猪·人定" }
};
const ALL = new Set([...Object.keys(STEM_DATA), ...Object.keys(BRANCH_DATA)]);

function getInfo(c) {
  const s = STEM_DATA[c];
  if (s) return `${c} · ${s.wx}（${s.yy}）${s.desc}`;
  const b = BRANCH_DATA[c];
  if (b) return `${c} · ${b.wx} — ${b.desc}`;
  return null;
}

export function ColoredChar({ c }) {
  const s = STEM_DATA[c];
  const b = BRANCH_DATA[c];
  const wx = s ? s.wx : b ? b.wx : null;
  const info = getInfo(c);
  const el = <span className={wx ? "wx-" + wx : ""} style={{fontWeight:600}}>{c}</span>;
  if (!info) return el;
  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>{el}</Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content className="tooltip-content" sideOffset={4}>
            {info}
            <Tooltip.Arrow className="tooltip-arrow" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}

export function GanzhiText({ children }) {
  if (typeof children !== "string") return children;
  const parts = [];
  for (let i = 0; i < children.length; i++) {
    const ch = children[i];
    if (ALL.has(ch)) {
      parts.push(<ColoredChar key={i} c={ch} />);
    } else {
      parts.push(ch);
    }
  }
  return parts.length > 0 ? <>{parts}</> : children;
}