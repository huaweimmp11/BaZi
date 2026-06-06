const stems = ["甲","乙","丙","丁","戊","己","庚","辛","壬","癸"];
const branches = ["子","丑","寅","卯","辰","巳","午","未","申","酉","戌","亥"];
const stemWx = ["木","木","火","火","土","土","金","金","水","水"];
const branchWx = ["水","土","木","木","土","火","火","土","金","金","土","水"];

function StemWx({ c }) { const i = stems.indexOf(c); return i >= 0 ? <span className={"wx-" + stemWx[i]}>{c}</span> : c; }
function BranchWx({ c }) { const i = branches.indexOf(c); return i >= 0 ? <span className={"wx-" + branchWx[i]}>{c}</span> : c; }

const fiveHe = [
  ["甲己","土",0,5,"甲木属阳己土属阴，甲木本身克土但阳木遇阴土异性相吸则合"],
  ["乙庚","金",1,6,"庚金属阳乙木属阴，庚金本身克木但阳金遇阴木异性相吸则合"],
  ["丙辛","水",2,7,"丙火属阳辛金属阴，丙火本身克金但阳火遇阴金异性相吸则合"],
  ["丁壬","木",3,8,"丁火属阴壬水属阳，壬水本身克火但阳水遇阴火异性相吸则合"],
  ["戊癸","火",4,9,"戊土属阳癸水属阴，戊土本身克水但阳土遇阴水异性相吸则合"]
];

const fourChong = [
  ["甲庚",0,6], ["乙辛",1,7], ["丙壬",2,8], ["丁癸",3,9]
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

const xingItems = [
  { name: "无礼之刑", pairs: [["子","卯"]], desc: "子属水卯属木，水生木为母与子，子卯相刑为子不敬母" },
  { name: "无恩之刑", pairs: [["寅","巳"],["巳","申"]], desc: "寅刑巳、巳刑申，以强凌弱忘恩负义" },
  { name: "恃势之刑", pairs: [["丑","未"],["未","戌"],["戌","丑"]], desc: "丑未戌皆属土，同类相争恃势欺人" },
  { name: "自刑", pairs: [["辰"],["午"],["酉"],["亥"]], desc: "辰辰、午午、酉酉、亥亥自相刑" }
];

const shengWang = ["长生","沐浴","冠带","临官","帝旺","衰","病","死","墓","绝","胎","养"];
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
const swGan = ["甲","丙","戊","庚","壬","乙","丁","己","辛","癸"];

const hiddenStemData = [
  { branch: "子", main: "癸", desc: "单藏一个阴水" },
  { branch: "丑", main: "己", mid: "癸", rest: "辛", desc: "四墓库之一，湿土含癸水辛金" },
  { branch: "寅", main: "甲", mid: "丙", rest: "戊", desc: "本气甲木，次季为夏故中气丙火" },
  { branch: "卯", main: "乙", desc: "单藏一个阴木" },
  { branch: "辰", main: "戊", mid: "乙", rest: "癸", desc: "四墓库之一，水库藏癸水，春之余气乙木" },
  { branch: "巳", main: "丙", mid: "庚", rest: "戊", desc: "本气丙火，次季为秋故中气庚金" },
  { branch: "午", main: "丁", mid: "己", desc: "火土同宫，含丁火和己土" },
  { branch: "未", main: "己", mid: "丁", rest: "乙", desc: "四墓库之一，木库藏乙木" },
  { branch: "申", main: "庚", mid: "壬", rest: "戊", desc: "本气庚金，次季为冬故中气壬水" },
  { branch: "酉", main: "辛", desc: "单藏一个阴金" },
  { branch: "戌", main: "戊", mid: "辛", rest: "丁", desc: "四墓库之一，火库藏丁火" },
  { branch: "亥", main: "壬", mid: "甲", desc: "本气壬水，次季为春故中气甲木" }
];

const xunKong = [
  ["甲子","甲戌","甲申","甲午","甲辰","甲寅"],
  ["乙丑","乙亥","乙酉","乙未","乙巳","乙卯"],
  ["丙寅","丙子","丙戌","丙申","丙午","丙辰"],
  ["丁卯","丁丑","丁亥","丁酉","丁未","丁巳"],
  ["戊辰","戊寅","戊子","戊戌","戊申","戊午"],
  ["己巳","己卯","己丑","己亥","己酉","己未"],
  ["庚午","庚辰","庚寅","庚子","庚戌","庚申"],
  ["辛未","辛巳","辛卯","辛丑","辛亥","辛酉"],
  ["壬申","壬午","壬辰","壬寅","壬子","壬戌"],
  ["癸酉","癸未","癸巳","癸卯","癸丑","癸亥"]
];
const kongNames = ["戌亥","申酉","午未","辰巳","寅卯","子丑"];

function getXun(gz) {
  for (let i = 0; i < xunKong[0].length; i++) {
    if (xunKong.some(row => row[i] === gz)) return i;
  }
  return -1;
}

import TocSidebar from "../components/TocSidebar";export default function RelationsPage() {
  return (
    <div>
      <div className="page-header">
        <div className="container"><h1>干支关系</h1><p>天干五合 · 天干四冲 · 地支刑冲合害 · 生旺死绝 · 地支藏干 · 空亡</p></div>
      </div>
      <section className="content"><TocSidebar>
        <div className="container"><div className="content-body">

          <h2>一、天干五合</h2>
          <p>"合"的本意是吸引、相好、合作。合不一定好，好坏需要看全面分析。</p>
          <p>十天干，两两相合，两个天干之间总是阳天干的元素克阴天干的元素，但因为异性相吸而化解了克的关系，转而相合，共五组，故称"五合"。</p>
          <table><thead><tr><th>相合</th><th>合化</th><th>说明</th></tr></thead><tbody>
            {fiveHe.map(([pair, wx,,,desc], i) => (
              <tr key={i}>
                <td>{pair.split("").map((c, j) => <StemWx key={j} c={c} />)}</td>
                <td className={"wx-" + wx}>{wx}</td>
                <td style={{textAlign:"left",fontSize:"0.85rem"}}>{desc}</td>
              </tr>
            ))}
          </tbody></table>
          <div className="info-box"><strong>口诀：</strong>甲己合土，乙庚合金，丙辛合水，丁壬合木，戊癸合火。</div>

          <h2>二、天干四冲</h2>
          <p>"冲"的本意就是排斥、对冲、干仗，冲的力量伤害比较大。方位上是<strong>对门相冲</strong>，阴阳上是<strong>同性相斥</strong>。</p>
          <p>天干相冲，相距七位（相隔 7 个干），同性相克为"冲"——阳克阳、阴克阴，力度大于普通相克：</p>
          <table><thead><tr><th>相冲</th><th>关系</th></tr></thead><tbody>
            {fourChong.map(([pair, si1, si2], i) => (
              <tr key={i}>
                <td><StemWx c={pair[0]} /> ↔ <StemWx c={pair[1]} /></td>
                <td>{stemWx[si1]}克{stemWx[si2]}，同{stemWx[si1]}相冲</td>
              </tr>
            ))}
          </tbody></table>

          <h2>三、地支六合</h2>
          <p>地支六合与天干五合同理，两两相合化生另一种五行：</p>
          <table><thead><tr><th>六合</th><th>合化</th></tr></thead><tbody>
            {sixHe.map(([b1, b2, wx], i) => (
              <tr key={i}>
                <td><BranchWx c={b1} /><BranchWx c={b2} /></td>
                <td className={"wx-" + wx}>{wx}</td>
              </tr>
            ))}
          </tbody></table>

          <h2>四、地支六冲</h2>
          <p>地支相距六位者相冲，共六组。冲则动，冲则变：</p>
          <table><thead><tr><th>六冲</th></tr></thead><tbody>
            {sixHe.slice(0,6).map(([b1, b2], i) => (
              <tr key={i}>
                <td><BranchWx c={b1} /> ↔ <BranchWx c={b2} /> — {b1}{b2}相冲</td>
              </tr>
            ))}
          </tbody></table>

          <h2>五、地支三合</h2>
          <p>三个地支凑齐为三合局，力量强大。三合局中间的地支为"中神"，力量最旺：</p>
          <table><thead><tr><th>三合</th><th>合化</th></tr></thead><tbody>
            {sanHe.map(([b1, b2, b3, wx], i) => (
              <tr key={i}>
                <td><BranchWx c={b1} /><BranchWx c={b2} /><BranchWx c={b3} /></td>
                <td className={"wx-" + wx}>{wx + "局"}</td>
              </tr>
            ))}
          </tbody></table>

          <h2>六、地支三会</h2>
          <p>同一季节的三个地支凑齐为三会局，力量最大，代表季节之气：</p>
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
          {xingItems.map((x, i) => (
            <div key={i} style={{marginBottom:"0.6rem"}}>
              <h3>{x.name}</h3>
              <p>{x.pairs.map((p, j) => (
                <span key={j}>{p.map((c, k) => <BranchWx key={k} c={c} />)}{j < x.pairs.length - 1 ? "、" : ""}</span>
              ))} — {x.desc}</p>
            </div>
          ))}
          <div className="callout-box"><strong>📌 注意：</strong>刑不一定全凶，需结合命局喜忌综合判断。</div>

          <h2>八、十二生旺表</h2>
          <p>十天干在十二地支所处的位置不同，状态也不同，通过十二生旺表可以判断五行气数的盛衰。</p>
          <p>从"长生"到"帝旺"为事物从出生到鼎盛的过程，从"衰"到"绝"为衰落直至消亡，"胎""养"则是新一轮生命的孕育。</p>
          <div className="table-scroll">
          <table className="small"><thead><tr><th>天干\状态</th>
            {shengWang.map((s, i) => <th key={i} style={{fontSize:"0.75rem"}}>{s}</th>)}
          </tr></thead><tbody>
            {swTable.map((row, ri) => (
              <tr key={ri}>
                <th><StemWx c={row[0]} /></th>
                {row.slice(1).map((b, ci) => (
                  <td key={ci} className={ci < 5 ? "wx-" + branchWx[branches.indexOf(b)] : ""}>
                    <BranchWx c={b} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody></table>
          </div>
          <div className="callout-box"><strong>📌 阳顺阴逆：</strong>阳干（甲丙戊庚壬）顺行排十二宫，阴干（乙丁己辛癸）逆行排十二宫。阳干帝旺在阴支，阴干帝旺在阳支。</div>

          <h2>九、地支藏干</h2>
          <p>地支是核心力量，天干是表象。每个地支中藏有不同程度的天干能量，分<strong>主气（本气）</strong>、<strong>中气</strong>、<strong>余气</strong>。</p>
          <div className="callout-box">
            <strong>📌 力量判断：</strong>一个天干的力量在不考虑生克的情况下，仅仅是地支藏干一个中气的力量，甚至还可能不如。<br/>
            天干力量只占 <strong>30%</strong>，地支力量占到 <strong>70%</strong>。<br/>
            有三个藏干时：本气 60%、中气 30%、余气 10%。<br/>
            有两个藏干时：本气 70%、中气 30%。<br/>
            有一个藏干时：本气 100%。
          </div>
          <table><thead><tr><th>地支</th><th>主气（本气）</th><th>中气</th><th>余气</th><th>说明</th></tr></thead><tbody>
            {hiddenStemData.map((h, i) => (
              <tr key={i}>
                <td><BranchWx c={h.branch} /></td>
                <td><StemWx c={h.main} /></td>
                <td>{h.mid ? <StemWx c={h.mid} /> : "—"}</td>
                <td>{h.rest ? <StemWx c={h.rest} /> : "—"}</td>
                <td style={{textAlign:"left",fontSize:"0.82rem"}}>{h.desc}</td>
              </tr>
            ))}
          </tbody></table>
          <p><strong>四墓库</strong>（辰戌丑未）比较特殊：本气都是土，辰为水库藏癸水，戌为火库藏丁火，丑为金库藏辛金，未为木库藏乙木。四墓库中除了土，藏的藏干都是阴干（乙辛癸丁）。</p>
          <p><strong>四生方</strong>（寅申巳亥）：本气是当前季节的五行，中气是下一季节的五行。如寅本气甲木（春），中气丙火（夏）；申本气庚金（秋），中气壬水（冬）。</p>

          <h2>十、空亡</h2>
          <p>"空亡"是八字命理中一个非常独特且重要的概念，可以理解为一种<strong>"有名无实、力量落空"</strong>的状态。就像某个岗位排了值班者，但人却没来。</p>
          <p>天干共 10 个，地支共 12 个，天干从甲开始搭配地支从子开始，每 10 对为一旬，六旬为一甲子。每旬必定会有 2 个地支轮空，这两个轮空的地支即为该旬中的<strong>空亡</strong>地支。</p>
          <p>以日柱所在的一旬为准，如果四柱中出现空亡的地支，该柱力量减弱：</p>
          <div className="table-scroll">
          <table className="small"><thead><tr><th>旬</th><th>空亡地支</th></tr></thead><tbody>
            {kongNames.map((kn, i) => (
              <tr key={i}>
                <td>{xunKong[0][i]}旬 ~ {xunKong[9][i]}</td>
                <td className="wx-土">{kn.split("").map((c, j) => <BranchWx key={j} c={c} />)}</td>
              </tr>
            ))}
          </tbody></table>
          </div>
          <div className="callout-box">
            <strong>📌 查法：</strong>先看日柱属于哪一旬，该旬对应的空亡地支即为日柱的空亡。比如日柱甲子（甲子旬），戌亥为空亡。<br/>
            <strong>📌 力量判断：</strong>空亡之地支所代表的十神力量减弱约 50%。若被大运/流年填实（出现该地支），则空亡解除。
          </div>

        </div></div>
      </TocSidebar></section>
    </div>
  );
}

