import TocSidebar from "../components/TocSidebar";
export default function PatternsPage() {
  return (
    <div>
      <div className="page-header">
        <div className="container"><h1>格局 · 大运 · 流年</h1><p>辨格局取用神 · 推大运断流年</p></div>
      </div>
      <section className="content">
        <div className="container">
          <TocSidebar>
            <div className="content-body">
          <h2>一、日主旺衰</h2>
          <p>三维度判断：<strong>得令</strong>(月令旺相)、<strong>得地</strong>(地支有根)、<strong>得势</strong>(生扶众多)。</p>
          <div className="info-box">木旺于春(寅卯月)、火旺于夏(巳午月)、金旺于秋(申酉月)、水旺于冬(亥子月)、土旺于四季末(辰戌丑未月)。</div>

          <h2>二、正格八格</h2>
          <p>以月令藏干取格：正官格、七杀格、正印格、偏印格、正财格、偏财格、食神格、伤官格。另有建禄格和阳刃格。</p>

          <table><thead><tr><th>格局</th><th>特性</th></tr></thead><tbody>
            <tr><td>正官格</td><td>遵纪守法、有领导力、仕途</td></tr>
            <tr><td>七杀格</td><td>魄力大、压力大、武将之才</td></tr>
            <tr><td>正印格</td><td>仁慈好学、文贵、长辈缘</td></tr>
            <tr><td>偏印格</td><td>独特才智、玄学天赋、孤僻</td></tr>
            <tr><td>正财格</td><td>勤俭持家、稳定收入、踏实</td></tr>
            <tr><td>偏财格</td><td>慷慨大方、经商之才、机遇</td></tr>
            <tr><td>食神格</td><td>温和福气、艺术才华、美食</td></tr>
            <tr><td>伤官格</td><td>聪明绝顶、口才犀利、叛逆</td></tr>
          </tbody></table>

          <h2>三、用神体系</h2>
          <ul>
            <li><strong>扶抑</strong>：旺则抑，弱则扶</li>
            <li><strong>调候</strong>：寒用火暖，热用水冷</li>
            <li><strong>通关</strong>：两强相争，取其通关</li>
            <li><strong>病药</strong>：命局之病所，即为用神</li>
          </ul>

          <h2>四、大运</h2>
          <p>阳男阴女顺排，阴男阳女逆排。三天折合一岁，起运由出生到最近节的间隔决定。</p>

          <h2>五、流年应期</h2>
          <ul>
            <li><strong>岁运并临</strong>：大运+流年干支同，吉凶加倍</li>
            <li><strong>天克地冲</strong>：变动之年</li>
            <li><strong>合会</strong>：引动对应十神之事</li>
          </ul>
        </div>
          </TocSidebar>
        </div>
      </section>
    </div>
  );
}

