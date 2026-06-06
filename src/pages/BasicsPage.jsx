const stemWx = ["木","木","火","火","土","土","金","金","水","水"];
const branchWx = ["水","土","木","木","土","火","火","土","金","金","土","水"];
const stems = ["甲","乙","丙","丁","戊","己","庚","辛","壬","癸"];
const branches = ["子","丑","寅","卯","辰","巳","午","未","申","酉","戌","亥"];

function StemWx({ c }) { const i = stems.indexOf(c); return i >= 0 ? <span className={"wx-" + stemWx[i]}>{c}</span> : c; }
function BranchWx({ c }) { const i = branches.indexOf(c); return i >= 0 ? <span className={"wx-" + branchWx[i]}>{c}</span> : c; }

export default function BasicsPage() {
  return (
    <div>
      <div className="page-header">
        <div className="container"><h1>基础理论</h1><p>阴阳五行 · 天干地支 · 干支组合</p></div>
      </div>
      <section className="content">
        <div className="container"><div className="content-body">

          <h2>一、阴阳五行</h2>
          <h3>五行相生</h3>
          <p>木生火、火生土、土生金、金生水、水生木。</p>
          <div className="info-box"><strong>口诀：</strong>木生火(钻木取火)，火生土(灰烬为土)，土生金(矿石炼金)，金生水(金属凝露)，水生木(水润草木)。</div>

          <h3>五行相克</h3>
          <p>木克土、土克水、水克火、火克金、金克木。</p>
          <div className="info-box"><strong>口诀：</strong>木克土(树根固土)，土克水(堤坝阻水)，水克火(水能灭火)，火克金(烈火熔金)，金克木(刀斧伐木)。</div>

          <h3>五行对照</h3>
          <table><thead><tr><th>五行</th><th>方向</th><th>季节</th><th>颜色</th><th>五脏</th><th>天干</th><th>地支</th></tr></thead><tbody>
            <tr><td className="wx-木">木</td><td>东</td><td>春</td><td>青</td><td>肝</td><td><StemWx c="甲" /><StemWx c="乙" /></td><td><BranchWx c="寅" /><BranchWx c="卯" /></td></tr>
            <tr><td className="wx-火">火</td><td>南</td><td>夏</td><td>赤</td><td>心</td><td><StemWx c="丙" /><StemWx c="丁" /></td><td><BranchWx c="巳" /><BranchWx c="午" /></td></tr>
            <tr><td className="wx-土">土</td><td>中</td><td>季末</td><td>黄</td><td>脾</td><td><StemWx c="戊" /><StemWx c="己" /></td><td><BranchWx c="辰" /><BranchWx c="戌" /><BranchWx c="丑" /><BranchWx c="未" /></td></tr>
            <tr><td className="wx-金">金</td><td>西</td><td>秋</td><td>白</td><td>肺</td><td><StemWx c="庚" /><StemWx c="辛" /></td><td><BranchWx c="申" /><BranchWx c="酉" /></td></tr>
            <tr><td className="wx-水">水</td><td>北</td><td>冬</td><td>黑</td><td>肾</td><td><StemWx c="壬" /><StemWx c="癸" /></td><td><BranchWx c="亥" /><BranchWx c="子" /></td></tr>
          </tbody></table>

          <h2 id="gz">二、天干地支</h2>
          <h3>十天干</h3>
          <table><thead><tr><th>天干</th>{stems.map((s, i) => <th key={i} className={"wx-" + stemWx[i]}>{s}</th>)}</tr></thead><tbody>
            <tr><th>阴阳</th><td>阳</td><td>阴</td><td>阳</td><td>阴</td><td>阳</td><td>阴</td><td>阳</td><td>阴</td><td>阳</td><td>阴</td></tr>
            <tr><th>五行</th>{stemWx.map((w, i) => <td key={i} className={"wx-" + w}>{w}</td>)}</tr>
          </tbody></table>

          <h3>十二地支</h3>
          <table><thead><tr><th>地支</th>{branches.map((b, i) => <th key={i} className={"wx-" + branchWx[i]}>{b}</th>)}</tr></thead><tbody>
            <tr><th>五行</th>{branchWx.map((w, i) => <td key={i} className={"wx-" + w}>{w}</td>)}</tr>
            <tr><th>藏干</th>
              <td><StemWx c="癸" /></td><td><StemWx c="己" /><StemWx c="癸" /><StemWx c="辛" /></td>
              <td><StemWx c="甲" /><StemWx c="丙" /><StemWx c="戊" /></td><td><StemWx c="乙" /></td>
              <td><StemWx c="戊" /><StemWx c="乙" /><StemWx c="癸" /></td><td><StemWx c="丙" /><StemWx c="庚" /><StemWx c="戊" /></td>
              <td><StemWx c="丁" /><StemWx c="己" /></td><td><StemWx c="己" /><StemWx c="丁" /><StemWx c="乙" /></td>
              <td><StemWx c="庚" /><StemWx c="壬" /><StemWx c="戊" /></td><td><StemWx c="辛" /></td>
              <td><StemWx c="戊" /><StemWx c="辛" /><StemWx c="丁" /></td><td><StemWx c="壬" /><StemWx c="甲" /></td>
            </tr>
            <tr><th>时辰</th><td>23-1</td><td>1-3</td><td>3-5</td><td>5-7</td><td>7-9</td><td>9-11</td><td>11-13</td><td>13-15</td><td>15-17</td><td>17-19</td><td>19-21</td><td>21-23</td></tr>
          </tbody></table>

          <h2 id="zh">三、干支组合</h2>
          <h3>天干五合</h3>
          <p>甲己合土、乙庚合金、丙辛合水、丁壬合木、戊癸合火。</p>
          <h3>地支六合</h3>
          <p>子丑合土、寅亥合木、卯戌合火、辰酉合金、巳申合水、午未合土。</p>
          <h3>地支三合</h3>
          <p>申子辰合水、亥卯未合木、寅午戌合火、巳酉丑合金。</p>
          <h3>六冲</h3>
          <p>子午冲、丑未冲、寅申冲、卯酉冲、辰戌冲、巳亥冲。</p>

        </div></div>
      </section>
    </div>
  );
}
