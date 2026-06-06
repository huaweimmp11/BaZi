export default function ShiShenPage() {
  const list = [
    { n: "比肩", d: "同我·同阴阳", l: "兄弟/朋友", t: "独立自尊，固执自我" },
    { n: "劫财", d: "同我·异阴阳", l: "姐妹/朋友", t: "热情豪爽，冲动破财" },
    { n: "食神", d: "我生·同阴阳", l: "女命之女", t: "温和才华，福寿之星" },
    { n: "伤官", d: "我生·异阴阳", l: "女命之儿", t: "聪明叛逆，伤官配印为贵" },
    { n: "正财", d: "我克·异阴阳", l: "男命之妻", t: "稳重节俭，勤劳致富" },
    { n: "偏财", d: "我克·同阴阳", l: "父/横财", t: "慷慨灵活，经商之才" },
    { n: "正官", d: "克我·异阴阳", l: "女命之夫", t: "正直责任，贵气之星" },
    { n: "七杀", d: "克我·同阴阳", l: "女命情人", t: "权威魄力，食神制杀为贵" },
    { n: "正印", d: "生我·异阴阳", l: "母亲/师长", t: "仁慈好学，文贵之星" },
    { n: "偏印", d: "生我·同阴阳", l: "继母/偏门", t: "独特领悟，精于玄学" }
  ];

  return (
    <div>
      <div className="page-header">
        <div className="container"><h1>十神体系</h1><p>以日干为中心 · 十种关系的语言</p></div>
      </div>
      <section className="content">
        <div className="container"><div className="content-body">
          <h2>十神定义</h2>
          <p>以日柱天干为中心，与其他干支的生克关系定义十种角色。</p>
          <table><thead><tr><th>关系</th><th>阴阳相同</th><th>阴阳相异</th></tr></thead><tbody>
            <tr><td><strong>同我</strong></td><td>比肩</td><td>劫财</td></tr>
            <tr><td><strong>我生</strong></td><td>食神</td><td>伤官</td></tr>
            <tr><td><strong>我克</strong></td><td>偏财</td><td>正财</td></tr>
            <tr><td><strong>克我</strong></td><td>七杀</td><td>正官</td></tr>
            <tr><td><strong>生我</strong></td><td>偏印</td><td>正印</td></tr>
          </tbody></table>

          <h2>十神详解</h2>
          {list.map(s => (
            <div key={s.n} style={{marginBottom:"0.8rem"}}>
              <h3 style={{margin:"0.6rem 0 0.2rem"}}>{s.n} · {s.d}</h3>
              <p style={{fontSize:"0.9rem",color:"var(--text-secondary)"}}>六亲：{s.l} · {s.t}</p>
            </div>
          ))}
        </div></div>
      </section>
    </div>
  );
}
