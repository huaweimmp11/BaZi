const stems = ["甲","乙","丙","丁","戊","己","庚","辛","壬","癸"];
const branches = ["子","丑","寅","卯","辰","巳","午","未","申","酉","戌","亥"];
const stemWx = ["木","木","火","火","土","土","金","金","水","水"];
const branchWx = ["水","土","木","木","土","火","火","土","金","金","土","水"];
const wxcy = ["木","火","土","金","水"];

function StemWx({ c }) { const i = stems.indexOf(c); return i >= 0 ? <span className={"wx-" + stemWx[i]}>{c}</span> : c; }
function BranchWx({ c }) { const i = branches.indexOf(c); return i >= 0 ? <span className={"wx-" + branchWx[i]}>{c}</span> : c; }

const fiveHe = [
  ["甲己","土",[0,5]], ["乙庚","金",[1,6]], ["丙辛","水",[2,7]],
  ["丁壬","木",[3,8]], ["戊癸","火",[4,9]]
];

const fourChong = [
  ["甲庚","金克木",0,6,"阳金克阳木"], ["乙辛","金克木",1,7,"阴金克阴木"],
  ["丙壬","水克火",2,8,"阳水克阳火"], ["丁癸","水克火",3,9,"阴水克阴火"]
];

const sixHe = [
  ["子丑","土",0,1], ["寅亥","木",2,11], ["卯戌","火",3,10],
  ["辰酉","金",4,9], ["巳申","水",5,8], ["午未","土",6,7]
];

const sanHe = [
  ["申","子","辰","水",8,0,4], ["亥","卯","未","木",11,3,7],
  ["寅","午","戌","火",2,6,10], ["巳","酉","丑","金",5,9,1]
];

const sanHui = [
  ["寅","卯","辰","木","春",2,3,4],
  ["巳","午","未","火","夏",5,6,7],
  ["申","酉","戌","金","秋",8,9,10],
  ["亥","子","丑","水","冬",11,0,1]
];

const xingMap = [
  { name: "无礼之刑", pairs: [["子","卯"]], desc: "子属水卯属木，水生木为母与子，子卯相刑为子不敬母" },
  { name: "无恩之刑", pairs: [["寅","巳"],["巳","申"]], desc: "寅刑巳、巳刑申，以强凌弱忘恩负义" },
  { name: "恃势之刑", pairs: [["丑","未"],["未","戌"],["戌","丑"]], desc: "丑未戌皆属土，同类相争恃势欺人" },
  { name: "自刑", pairs: [["辰"],["午"],["酉"],["亥"]], desc: "辰辰、午午、酉酉、亥亥自相刑害" }
];

const shengWang = [
  { stage: "长生", idx: 0 }, { stage: "沐浴", idx: 1 }, { stage: "冠带", idx: 2 },
  { stage: "临官", idx: 3 }, { stage: "帝旺", idx: 4 }, { stage: "衰", idx: 5 },
  { stage: "病", idx: 6 },  { stage: "死", idx: 7 },   { stage: "墓", idx: 8 },
  { stage: "绝", idx: 9 },  { stage: "胎", idx: 10 },  { stage: "养", idx: 11 }
];
const yangGan = [0,2,4,6,8];
const swTable = [
  ["甲","亥","子","丑","寅","卯","辰","巳","午","未","申","酉","戌"],
  ["丙","寅","卯","辰","巳","午","未","申","酉","戌","亥","子","丑"],
  ["戊","寅","卯","辰","巳","午","未","申","酉","戌","亥","子","丑"],
  ["庚","巳","午","未","申","酉","戌","亥","子","丑","寅","卯","辰"],
  ["壬","申","酉","戌","亥","子","丑","寅","卯","辰","巳","午","未"],
  ["乙","午","巳","辰","卯","寅","丑","子","亥","戌","酉","申","未"],
  ["丁","酉","申","未","午","巳","辰","卯","寅","丑","子","亥","戌"],
  ["己","酉","申","未","午","巳","辰","卯","寅","丑","子","亥","戌"],
  ["辛","子","亥","戌","酉","申","未","午","巳","辰","卯","寅","丑"],
  ["癸","卯","寅","丑","子","亥","戌","酉","申","未","午","巳","辰"]
];

const hiddenStemData = [
  { branch: "子", main: "癸" },
  { branch: "丑", main: "己", mid: "癸", rest: "辛" },
  { branch: "寅", main: "甲", mid: "丙", rest: "戊" },
  { branch: "卯", main: "乙" },
  { branch: "辰", main: "戊", mid: "乙", rest: "癸" },
  { branch: "巳", main: "丙", mid: "庚", rest: "戊" },
  { branch: "午", main: "丁", mid: "己" },
  { branch: "未", main: "己", mid: "丁", rest: "乙" },
  { branch: "申", main: "庚", mid: "壬", rest: "戊" },
  { branch: "酉", main: "辛" },
  { branch: "戌", main: "戊", mid: "辛", rest: "丁" },
  { branch: "亥", main: "壬", mid: "甲" }
];

const xunKong = [
  ["甲子","乙丑","丙寅","丁卯","戊辰","己巳","庚午","辛未","壬申","癸酉"],
  ["甲戌","乙亥","丙子","丁丑","戊寅","己卯","庚辰","辛巳","壬午","癸未"],
  ["甲申","乙酉","丙戌","丁亥","戊子","己丑","庚寅","辛卯","壬辰","癸巳"],
  ["甲午","乙未","丙申","丁酉","戊戌","己亥","庚子","辛丑","壬寅","癸卯"],
  ["甲辰","乙巳","丙午","丁未","戊申","己酉","庚戌","辛亥","壬子","癸丑"],
  ["甲寅","乙卯","丙辰","丁巳","戊午","己未","庚申","辛酉","壬戌","癸亥"]
];
const kongNames = ["戌亥","申酉","午未","辰巳","寅卯","子丑"];

export default function RelationsPage() {
  return (
    <div>
      <div className="page-header">
        <div className="container"><h1>干支关系</h1><p>天干五合 · 天干四冲 · 地支刑冲合害 · 生旺死绝 · 地支藏干 · 空亡</p></div>
      </div>
      <section className="content">
        <div className="container"><div className="content-body">

          <h2>一、天干五合</h2>
          <p>天干相合，又称"五合"，两干相合后<strong>化</strong>为另一种五行：</p>
          <table><thead><tr><th>相合</th><th>合化</th><th>说明</th></tr></thead><tbody>
            {fiveHe.map(([pair, wx], i) => (
              <tr key={i}>
                <td>{pair.split("").map((c, j) => <StemWx key={j} c={c} />)}</td>
                <td className={"wx-" + wx}>{wx}</td>
                <td>{pair[0]}与{pair[1]}相合，合化为{wx}</td>
              </tr>
            ))}
          </tbody></table>
          <div className="info-box"><strong>口诀：</strong>甲己合土，乙庚合金，丙辛合水，丁壬合木，戊癸合火。</div>

          <h2>二、天干四冲</h2>
          <p>天干相冲，相距七位（相隔 7 个干），同性相克为"冲"：</p>
          <table><thead><tr><th>相冲</th><th>关系</th><th>说明</th></tr></thead><tbody>
            {fourChong.map(([pair, rel], i) => (
              <tr key={i}>
                <td>{pair.split("").map((c, j) => <StemWx key={j} c={c} />)}</td>
                <td className="wx-金">{rel}</td>
                <td>{pair[2] + pair[3]}</td>
              </tr>
            ))}
          </tbody></table>
          <div className="callout-box"><strong>📌 注意：</strong>天干四冲为阳克阳、阴克阴，力度大于普通相克。</div>

          <h2>三、地支六合</h2>
          <p>地支两两相合，合化后产生新的五行：</p>
          <table><thead><tr><th>六合</th><th>合化</th><th>说明</th></tr></thead><tbody>
            {sixHe.map(([b1, b2, wx], i) => (
              <tr key={i}>
                <td><BranchWx c={b1} /><BranchWx c={b2} /></td>
                <td className={"wx-" + wx}>{wx}</td>
                <td>{b1}与{b2}相合为{wx}</td>
              </tr>
            ))}
          </tbody></table>

          <h2>四、地支六冲</h2>
          <p>地支相距六位者相冲，共有六组：</p>
          <table><thead><tr><th>六冲</th><th>对冲关系</th></tr></thead><tbody>
            {sixHe.map(([b1, b2], i) => (
              <tr key={i}>
                <td><BranchWx c={b1} /> ↔ <BranchWx c={b2} /></td>
                <td>{b1}与{b2}相冲</td>
              </tr>
            ))}
          </tbody></table>
          <div className="callout-box"><strong>📌 规则：</strong>子午冲、丑未冲、寅申冲、卯酉冲、辰戌冲、巳亥冲。凡地支相距六位即相冲。</div>

          <h2>五、地支三合</h2>
          <p>三个地支凑齐为三合局，力量强大：</p>
          <table><thead><tr><th>三合</th><th>合化</th></tr></thead><tbody>
            {sanHe.map(([b1, b2, b3, wx], i) => (
              <tr key={i}>
                <td><BranchWx c={b1} /><BranchWx c={b2} /><BranchWx c={b3} /></td>
                <td className={"wx-" + wx}>{wx + "局"}</td>
              </tr>
            ))}
          </tbody></table>

          <h2>六、地支三会</h2>
          <p>同一季节的三个地支凑齐为三会局，力量最大：</p>
          <table><thead><tr><th>三会</th><th>会合</th><th>季节</th></tr></thead><tbody>
            {sanHui.map(([b1, b2, b3, wx, season], i) => (
              <tr key={i}>
                <td><BranchWx c={b1} /><BranchWx c={b2} /><BranchWx c={b3} /></td>
                <td className={"wx-" + wx}>{wx + "局"}</td>
                <td>{season}</td>
              </tr>
            ))}
          </tbody></table>

          <h2>七、地支相刑</h2>
          {xingMap.map((x, i) => (
            <div key={i}>
              <h3>{x.name}</h3>
              <p>{x.pairs.map((p, j) => (
                <span key={j}>{p.map((c, k) => <BranchWx key={k} c={c} />)}{j < x.pairs.length - 1 ? "、" : ""}</span>
              ))} — {x.desc}</p>
            </div>
          ))}

          <h2>八、十二生旺表</h2>
          <p>十天干在十二地支的不同状态，反映五行气数的盛衰变化：</p>
          <div className="table-scroll">
          <table className="small"><thead><tr><th>天干 \\ 状态</th>
            {shengWang.map((s, i) => <th key={i} style={{fontSize:"0.78rem"}}>{s.stage}</th>)}
          </tr></thead><tbody>
            {swTable.map((row, ri) => (
              <tr key={ri}>
                <th><StemWx c={row[0]} /></th>
                {row.slice(1).map((b, ci) => (
                  <td key={ci} className={["wx-","wx-","wx-","wx-","wx-","","","wx-死","","wx-绝","",""][ci] || ""}>
                    <BranchWx c={b} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody></table>
          </div>
          <div className="callout-box"><strong>📌 阳顺阴逆：</strong>阳干（甲丙戊庚壬）顺行排十二宫，阴干（乙丁己辛癸）逆行排十二宫。</div>

          <h2>九、地支藏干</h2>
          <p>每个地支中藏有不同程度的天干能量，分主气、中气、余气：</p>
          <table><thead><tr><th>地支</th><th>主气</th><th>中气</th><th>余气</th></tr></thead><tbody>
            {hiddenStemData.map((h, i) => (
              <tr key={i}>
                <td><BranchWx c={h.branch} /></td>
                <td><StemWx c={h.main} /></td>
                <td>{h.mid ? <StemWx c={h.mid} /> : "—"}</td>
                <td>{h.rest ? <StemWx c={h.rest} /> : "—"}</td>
              </tr>
            ))}
          </tbody></table>

          <h2>十、空亡</h2>
          <p>空亡以日柱所在的"旬"来查，甲子旬中戌亥空，其他旬以此类推：</p>
          <div className="table-scroll">
          <table className="small"><thead><tr><th>旬</th><th>干支</th><th>空亡</th></tr></thead><tbody>
            {xunKong.map((xun, i) => (
              <tr key={i}>
                <th style={{whiteSpace:"nowrap"}}>{xun[0]} ~ {xun[9]}</th>
                <td>{xun.map((gz, j) => <span key={j} style={{margin:"0 2px",fontSize:"0.85rem"}}>
                  {gz.split("").map((c, k) => c === kongNames[i][k] ? <StemWx key={k} c={c} /> : c)}
                </span>)}</td>
                <td className="wx-土">{kongNames[i]}</td>
              </tr>
            ))}
          </tbody></table>
          </div>
          <div className="callout-box"><strong>📌 查法：</strong>先看日柱属于哪一旬，该旬对应的"空亡"地支即为日柱的空亡。</div>

        </div></div>
      </section>
    </div>
  );
}
