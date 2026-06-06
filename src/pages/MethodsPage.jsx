import TocSidebar from "../components/TocSidebar";
import { Solar, Lunar } from "lunar-javascript";

const JIE_KEY_MAP = {
  'DA_XUE': '大雪', 'XIAO_HAN': '小寒', 'LI_CHUN': '立春',
  'JING_ZHE': '惊蛰', 'QING_MING': '清明', 'LI_XIA': '立夏',
  'MANG_ZHONG': '芒种', 'XIAO_SHU': '小暑', 'LI_QIU': '立秋',
  'BAI_LU': '白露', 'HAN_LU': '寒露', 'LI_DONG': '立冬'
};
const jieNames = ["小寒","立春","惊蛰","清明","立夏","芒种","小暑","立秋","白露","寒露","立冬","大雪"];
const branches = ["子","丑","寅","卯","辰","巳","午","未","申","酉","戌","亥"];
const stems = ["甲","乙","丙","丁","戊","己","庚","辛","壬","癸"];

function getJieDates(year) {
  const lunar = Lunar.fromYmd(year, 1, 1);
  const table = lunar.getJieQiTable();
  const list = lunar.getJieQiList();
  const result = [];
  const seen = new Set();
  for (let i = 0; i < list.length; i += 2) {
    const key = list[i];
    const name = JIE_KEY_MAP[key] || key;
    const idx = jieNames.indexOf(name);
    if (idx >= 0 && !seen.has(name)) {
      seen.add(name);
      const solar = table[key];
      if (!solar) continue;
      result[idx] = {
        month: solar.getMonth(),
        day: solar.getDay(),
        hour: solar.getHour(),
        minute: solar.getMinute(),
        branchIdx: [1,2,3,4,5,6,7,8,9,10,11,0][idx],
        name: name
      };
    }
  }
  return result;
}

export default function MethodsPage() {
  const jie = getJieDates(new Date().getFullYear());

  return (
    <div>
      <div className="page-header">
        <div className="container"><h1>推算起法</h1><p>五虎遁 · 五鼠遁 · 日柱公式 · 大运起法</p></div>
      </div>
      <section className="content">
        <div className="container">
          <TocSidebar>
            <div className="content-body">

          <h2>一、年柱起法</h2>
          <p>年柱由出生年份和立春分界共同决定。</p>

          <h3>干支基数</h3>
          <p>年干 = (公元年 − 4) % 10<br/>年支 = (公元年 − 4) % 12</p>
          <p>以 2026 年为例：(2026 − 4) % 10 = 2 → 丙，(2026 − 4) % 12 = 6 → 午，即 <strong style={{color:"var(--red)"}}>丙午年</strong>。</p>

          <h3>立春分界</h3>
          <p>立春之后才用新一年的干支。2026 年立春在 <strong>{jie[1]?.month}月{jie[1]?.day}日 {String(jie[1]?.hour).padStart(2,"0")}:{String(jie[1]?.minute).padStart(2,"0")}</strong>，此前的年柱用 <strong>乙巳</strong>（前一年）。</p>
          <div className="info-box"><strong>口诀：</strong>年柱以立春为界，非正月初一。立春前仍用去年干支。</div>

          <h2>二、五虎遁 · 起月干</h2>
          <p>月支由节气固定，月干从年干用五虎遁推出。</p>

          <h3>五虎遁口诀</h3>
          <div className="info-box" style={{fontSize:"1.05rem",textAlign:"center",fontFamily:"var(--font-cn)"}}>
            甲己之年丙作首，乙庚之岁戊为头。<br/>
            丙辛必定寻庚起，丁壬壬位顺行流。<br/>
            若问戊癸何方发，甲寅之上好追求。
          </div>

          <h3>月支表</h3>
          <p>月支由节气决定，与农历月份对应关系如下：</p>
          <table><thead><tr><th>月支</th><th>寅</th><th>卯</th><th>辰</th><th>巳</th><th>午</th><th>未</th><th>申</th><th>酉</th><th>戌</th><th>亥</th><th>子</th><th>丑</th></tr></thead><tbody>
            <tr><th>起始节</th><td>立春</td><td>惊蛰</td><td>清明</td><td>立夏</td><td>芒种</td><td>小暑</td><td>立秋</td><td>白露</td><td>寒露</td><td>立冬</td><td>大雪</td><td>小寒</td></tr>
            <tr><th>约日</th><td>2/4</td><td>3/6</td><td>4/5</td><td>5/6</td><td>6/6</td><td>7/7</td><td>8/7</td><td>9/8</td><td>10/8</td><td>11/7</td><td>12/7</td><td>1/6</td></tr>
          </tbody></table>

          <h3>五虎遁推算步骤</h3>
          <p><strong>例：</strong>2026 年丙午年（年干丙），求午月（芒种~小暑）月干。</p>
          <ol style={{marginLeft:"1.5rem",marginBottom:"1rem"}}>
            <li>年干丙：丙辛必定寻庚起 → 起始月干为 <strong>庚</strong>（寅月）</li>
            <li>寅月干 = 庚，卯月干 = 辛，辰月干 = 壬，巳月干 = 癸，<strong>午月干 = 甲</strong></li>
            <li>月支为午 → 月柱 = <strong>甲午</strong></li>
          </ol>

          <h3>五虎遁起月表</h3>
          <table><thead><tr><th>年干</th><th>寅月</th><th>卯月</th><th>辰月</th><th>巳月</th><th>午月</th><th>未月</th><th>申月</th><th>酉月</th><th>戌月</th><th>亥月</th><th>子月</th><th>丑月</th></tr></thead><tbody>
            {[
              ["甲己","丙寅","丁卯","戊辰","己巳","庚午","辛未","壬申","癸酉","甲戌","乙亥","丙子","丁丑"],
              ["乙庚","戊寅","己卯","庚辰","辛巳","壬午","癸未","甲申","乙酉","丙戌","丁亥","戊子","己丑"],
              ["丙辛","庚寅","辛卯","壬辰","癸巳","甲午","乙未","丙申","丁酉","戊戌","己亥","庚子","辛丑"],
              ["丁壬","壬寅","癸卯","甲辰","乙巳","丙午","丁未","戊申","己酉","庚戌","辛亥","壬子","癸丑"],
              ["戊癸","甲寅","乙卯","丙辰","丁巳","戊午","己未","庚申","辛酉","壬戌","癸亥","甲子","乙丑"]
            ].map((row, ri) => (
              <tr key={ri}>
                <th><strong>{row[0]}</strong></th>
                {row.slice(1).map((gz, ci) => <td key={ci} className={"wx-"+["木","木","火","火","土","土","金","金","水","水"][stems.indexOf(gz[0])]}>{gz}</td>)}
              </tr>
            ))}
          </tbody></table>

          <h2>三、日柱公式</h2>
          <p>以 1900 年 1 月 1 日（<strong>甲戌日</strong>）为基准日计算。</p>
          <div className="info-box">
            日柱六十甲子索引 = (10 + 目标日距1900-01-01天数) % 60<br/>
            日干 = 索引 % 10    日支 = 索引 % 12
          </div>
          <p><strong>例：</strong>2026 年 2 月 3 日</p>
          <ul style={{marginLeft:"1.5rem",marginBottom:"1rem"}}>
            <li>距 1900-01-01 约 46027 天</li>
            <li>索引 = (10 + 46027) % 60 = 46037 % 60 = 17</li>
            <li>日干 = 17 % 10 = 7 → 庚，日支 = 17 % 12 = 5 → 辰</li>
            <li>日柱 = <strong>庚辰</strong></li>
          </ul>

          <h2>四、五鼠遁 · 起时干</h2>
          <p>时支由出生时辰固定，时干从日干用五鼠遁推出。</p>

          <h3>五鼠遁口诀</h3>
          <div className="info-box" style={{fontSize:"1.05rem",textAlign:"center",fontFamily:"var(--font-cn)"}}>
            甲己还加甲，乙庚丙作初。<br/>
            丙辛从戊起，丁壬庚子居。<br/>
            戊癸何方发，壬子是真途。
          </div>

          <h3>五鼠遁起时表</h3>
          <table><thead><tr><th>日干\时支</th><th>子</th><th>丑</th><th>寅</th><th>卯</th><th>辰</th><th>巳</th><th>午</th><th>未</th><th>申</th><th>酉</th><th>戌</th><th>亥</th></tr></thead><tbody>
            {[
              ["甲己","甲子","乙丑","丙寅","丁卯","戊辰","己巳","庚午","辛未","壬申","癸酉","甲戌","乙亥"],
              ["乙庚","丙子","丁丑","戊寅","己卯","庚辰","辛巳","壬午","癸未","甲申","乙酉","丙戌","丁亥"],
              ["丙辛","戊子","己丑","庚寅","辛卯","壬辰","癸巳","甲午","乙未","丙申","丁酉","戊戌","己亥"],
              ["丁壬","庚子","辛丑","壬寅","癸卯","甲辰","乙巳","丙午","丁未","戊申","己酉","庚戌","辛亥"],
              ["戊癸","壬子","癸丑","甲寅","乙卯","丙辰","丁巳","戊午","己未","庚申","辛酉","壬戌","癸亥"]
            ].map((row, ri) => (
              <tr key={ri}>
                <th><strong>{row[0]}</strong></th>
                {row.slice(1).map((gz, ci) => <td key={ci} className={"wx-"+["木","木","火","火","土","土","金","金","水","水"][stems.indexOf(gz[0])]}>{gz}</td>)}
              </tr>
            ))}
          </tbody></table>

          <h2>五、大运起法</h2>
          <h3>顺逆规则</h3>
          <table><thead><tr><th></th><th>阳年（甲丙戊庚壬）</th><th>阴年（乙丁己辛癸）</th></tr></thead><tbody>
            <tr><th>男</th><td style={{color:"var(--red)",fontWeight:600}}>顺排</td><td>逆排</td></tr>
            <tr><th>女</th><td style={{color:"var(--red)",fontWeight:600}}>逆排</td><td style={{color:"var(--red)",fontWeight:600}}>顺排</td></tr>
          </tbody></table>

          <h3>起运岁数</h3>
          <p>从出生日到下一个（顺排）或上一个（逆排）节气，<strong>三天折合一岁</strong>。</p>

          <h3>大运干支</h3>
          <p>从月柱开始，顺排则顺推下一个干支，逆排则逆推上一个干支。每步十年。</p>

          <h2>六、节气时刻（2026 年参考）</h2>
          <table><thead><tr><th>节气</th><th>时间</th><th>对应的月支</th></tr></thead><tbody>
            {jie.filter(Boolean).map((j, i) => (
              <tr key={i}>
                <td><strong>{j.name}</strong></td>
                <td>{j.month}月{j.day}日 {String(j.hour).padStart(2,"0")}:{String(j.minute).padStart(2,"0")}</td>
                <td className={"wx-"+["水","土","木","木","土","火","火","土","金","金","土","水"][j.branchIdx]}>{branches[j.branchIdx]}月</td>
              </tr>
            ))}
          </tbody></table>

          <div className="info-box" style={{marginTop:20}}>
            <strong>📌 注：</strong>以上所有推算均以万年历数据为准，节气时刻精确到分。实际使用中，年柱立春分界和月柱节气分界需精确到时辰。
          </div>

        </div>
          </TocSidebar>
        </div>
      </section>
    </div>
  );
}

