import TocSidebar from "../components/TocSidebar";
const stems = ["甲","乙","丙","丁","戊","己","庚","辛","壬","癸"];
const stemWx = ["木","木","火","火","土","土","金","金","水","水"];

function StemWx({ c }) { const i = stems.indexOf(c); return i >= 0 ? <span className={"wx-" + stemWx[i]}>{c}</span> : c; }

export default function ShiShenPage() {
  const list = [
    { n: "比肩", d: "同我·同阴阳", l: "兄弟/朋友", t: "独立自尊，固执自我", leixing: "自身，竞争者" },
    { n: "劫财", d: "同我·异阴阳", l: "姐妹/朋友", t: "热情豪爽，冲动破财", leixing: "合作者，损财者" },
    { n: "食神", d: "我生·同阴阳", l: "女命之女", t: "温和才华，福寿之星", leixing: "才华，享受，福气" },
    { n: "伤官", d: "我生·异阴阳", l: "女命之儿", t: "聪明叛逆，伤官配印为贵", leixing: "口才，创新，傲气" },
    { n: "正财", d: "我克·异阴阳", l: "男命之妻", t: "稳重节俭，勤劳致富", leixing: "正当收入，稳定" },
    { n: "偏财", d: "我克·同阴阳", l: "父/横财", t: "慷慨灵活，经商之才", leixing: "偏门财，投机" },
    { n: "正官", d: "克我·异阴阳", l: "女命之夫", t: "正直责任，贵气之星", leixing: "官运，名誉" },
    { n: "七杀", d: "克我·同阴阳", l: "女命情人", t: "权威魄力，食神制杀为贵", leixing: "压力，权威" },
    { n: "正印", d: "生我·异阴阳", l: "母亲/师长", t: "仁慈好学，文贵之星", leixing: "学业，贵人" },
    { n: "偏印", d: "生我·同阴阳", l: "继母/偏门", t: "独特领悟，精于玄学", leixing: "偏门，玄学" }
  ];

  return (
    <div>
      <div className="page-header">
        <div className="container"><h1>十神体系</h1><p>以日干为中心 · 十种关系的语言</p></div>
      </div>
      <section className="content"><TocSidebar>
        <div className="container"><div className="content-body">

          <h2 id="shi-shen-ding-yi">十神定义</h2>
          <p>以日柱天干（日主）为中心，与其他干支的生克关系定义十种角色。五行相同为"同我"，
          日干生别的为"我生"，别的生日干为"生我"，日干克别的为"我克"，别的克日干为"克我"。</p>
          <table><thead><tr><th>关系</th><th>阴阳相同</th><th>阴阳相异</th></tr></thead><tbody>
            <tr><td><strong>同我</strong></td><td>比肩</td><td>劫财</td></tr>
            <tr><td><strong>我生</strong></td><td>食神</td><td>伤官</td></tr>
            <tr><td><strong>我克</strong></td><td>偏财</td><td>正财</td></tr>
            <tr><td><strong>克我</strong></td><td>七杀</td><td>正官</td></tr>
            <tr><td><strong>生我</strong></td><td>偏印</td><td>正印</td></tr>
          </tbody></table>

          <div className="callout-box"><strong>口诀：</strong>生我正印偏印，我生食神伤官；克我正官七杀，我克正财偏财；同我比肩劫财。</div>

          <h2 id="shi-shen-xiang-jie">十神详解</h2>
          <table><thead><tr><th>十神</th><th>关系</th><th>六亲</th><th>类象</th><th>特点</th></tr></thead><tbody>
            {list.map((s, i) => (
              <tr key={i}>
                <td><strong>{s.n}</strong></td><td>{s.d}</td>
                <td>{s.l}</td><td>{s.leixing}</td><td>{s.t}</td>
              </tr>
            ))}
          </tbody></table>

          <h2 id="zhi-cang-gan">地支藏干与十神</h2>
          <p>地支中的藏干也与日干产生十神关系。比如日干为<StemWx c="戊" />，
          地支<StemWx c="寅" />中藏有<StemWx c="甲" />（七杀）、<StemWx c="丙" />（偏印）、<StemWx c="戊" />（比肩）。</p>
          <div className="callout-box">
            <strong>📌 藏干力量：</strong>主气（本气）力量约 60%，中气约 30%，余气约 10%。在判断十神强弱时需加权考量。
          </div>

        </div></div>
      </TocSidebar></section>
    </div>
  );
}
