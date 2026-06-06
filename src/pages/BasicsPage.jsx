import TocSidebar from "../components/TocSidebar";
const stemWx = ["木","木","火","火","土","土","金","金","水","水"];
const branchWx = ["水","土","木","木","土","火","火","土","金","金","土","水"];
const stems = ["甲","乙","丙","丁","戊","己","庚","辛","壬","癸"];
const branches = ["子","丑","寅","卯","辰","巳","午","未","申","酉","戌","亥"];

const stemImagery = [
  { stem: "甲", wx: "木", yy: "阳", desc: "栋梁之木，参天大树", nature: "刚直、积极、进取、威武" },
  { stem: "乙", wx: "木", yy: "阴", desc: "花草之木，藤萝细枝", nature: "柔和、细腻、适应、忍让" },
  { stem: "丙", wx: "火", yy: "阳", desc: "太阳之火，熊熊烈焰", nature: "热烈、豪爽、慷慨、急躁" },
  { stem: "丁", wx: "火", yy: "阴", desc: "灯烛之火，星星之火", nature: "温和、细腻、敏锐、多思" },
  { stem: "戊", wx: "土", yy: "阳", desc: "高岗之土，城墙大地", nature: "敦厚、稳重、包容、保守" },
  { stem: "己", wx: "土", yy: "阴", desc: "田园之土，疏松沃土", nature: "谦逊、细腻、灵活、务实" },
  { stem: "庚", wx: "金", yy: "阳", desc: "斧钺之金，坚硬钢铁", nature: "刚毅、果断、凌厉、豪迈" },
  { stem: "辛", wx: "金", yy: "阴", desc: "珠玉之金，金银首饰", nature: "精致、敏锐、自尊、挑剔" },
  { stem: "壬", wx: "水", yy: "阳", desc: "江河之水，浩荡洪流", nature: "智慧、豪放、善变、包容" },
  { stem: "癸", wx: "水", yy: "阴", desc: "雨露之水，滋润细流", nature: "聪慧、内敛、敏感、灵动" }
];

const branchImagery = [
  { branch: "子", wx: "水", month: "11月", hour: "23-1", animal: "鼠", desc: "水池沟渠，夜半时刻", nature: "聪明、机敏、藏匿、隐秘" },
  { branch: "丑", wx: "土", month: "12月", hour: "1-3", animal: "牛", desc: "湿土寒泥，冻土含冰", nature: "勤劳、踏实、固执、忍耐" },
  { branch: "寅", wx: "木", month: "1月", hour: "3-5", animal: "虎", desc: "参天大树，山林之木", nature: "威严、勇敢、自信、刚强" },
  { branch: "卯", wx: "木", month: "2月", hour: "5-7", animal: "兔", desc: "花草灌木，茂盛繁花", nature: "文静、温和、敏感、脆弱" },
  { branch: "辰", wx: "土", month: "3月", hour: "7-9", animal: "龙", desc: "湿土水库，万物生长", nature: "包容、多变、自豪、威严" },
  { branch: "巳", wx: "火", month: "4月", hour: "9-11", animal: "蛇", desc: "炉中之火，炎热之火", nature: "机敏、善变、热情、急躁" },
  { branch: "午", wx: "火", month: "5月", hour: "11-13", animal: "马", desc: "正午太阳，烈焰冲天", nature: "奔放、热情、豪迈、急躁" },
  { branch: "未", wx: "土", month: "6月", hour: "13-15", animal: "羊", desc: "干土燥土，夏末余热", nature: "温和、谦逊、柔顺、固执" },
  { branch: "申", wx: "金", month: "7月", hour: "15-17", animal: "猴", desc: "矿石金属，秋初肃杀", nature: "聪慧、机灵、好动、多变" },
  { branch: "酉", wx: "金", month: "8月", hour: "17-19", animal: "鸡", desc: "珠宝玉石，秋收时节", nature: "精致、细腻、刚直、果断" },
  { branch: "戌", wx: "土", month: "9月", hour: "19-21", animal: "狗", desc: "燥土火库，秋末收藏", nature: "忠厚、诚实、固执、刚强" },
  { branch: "亥", wx: "水", month: "10月", hour: "21-23", animal: "猪", desc: "江河湖海，冬初收藏", nature: "智慧、包容、随和、内敛" }
];

const jieQi = [
  { jie: "立春", month: 2, day: 4, branch: "寅月" },
  { jie: "惊蛰", month: 3, day: 6, branch: "卯月" },
  { jie: "清明", month: 4, day: 5, branch: "辰月" },
  { jie: "立夏", month: 5, day: 6, branch: "巳月" },
  { jie: "芒种", month: 6, day: 6, branch: "午月" },
  { jie: "小暑", month: 7, day: 7, branch: "未月" },
  { jie: "立秋", month: 8, day: 8, branch: "申月" },
  { jie: "白露", month: 9, day: 8, branch: "酉月" },
  { jie: "寒露", month: 10, day: 9, branch: "戌月" },
  { jie: "立冬", month: 11, day: 8, branch: "亥月" },
  { jie: "大雪", month: 12, day: 7, branch: "子月" },
  { jie: "小寒", month: 1, day: 6, branch: "丑月" }
];

function StemWx({ c }) { const i = stems.indexOf(c); return i >= 0 ? <span className={"wx-" + stemWx[i]}>{c}</span> : c; }
function BranchWx({ c }) { const i = branches.indexOf(c); return i >= 0 ? <span className={"wx-" + branchWx[i]}>{c}</span> : c; }

export default function BasicsPage() {
  return (
    <div>
      <div className="page-header">
        <div className="container"><h1>基础入门</h1><p>四柱八字 · 阴阳五行 · 天干地支 · 类象节气</p></div>
      </div>
      <section className="content">
        <div className="container">
          <TocSidebar>
            <div className="content-body">

          <h2>一、四柱八字</h2>
          <p>四柱八字，即出生的具体时间（年、月、日、时），通过干支纪年法排出来的八个字，也称四柱——<strong>年柱、月柱、日柱、时柱</strong>。</p>
          <p>每柱由一个天干和一个地支组成，共八个字，故称"八字"。</p>
          <div className="info-box">
            <strong>例：</strong>2026年2月3日中午11点 → <StemWx c="乙" /><BranchWx c="巳" />  <StemWx c="己" /><BranchWx c="丑" />  <StemWx c="戊" /><BranchWx c="申" />  <StemWx c="戊" /><BranchWx c="午" />
            <br/>年柱乙巳、月柱己丑、日柱戊申、时柱戊午
          </div>

          <h2>二、阴阳五行</h2>
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
          <div className="callout-box"><strong>📌 四季末：</strong>每个季度最后 18 天（共 72 天）五行属土，称"四季末"。</div>
          <div className="callout-box"><strong>📌 方位歌：</strong>东方甲乙木，南方丙丁火，西方庚辛金，北方壬癸水，中央戊己土。</div>

          <h2 id="gz">三、天干地支</h2>
          <h3>十天干</h3>
          <table><thead><tr><th>天干</th>{stems.map((s, i) => <th key={i} className={"wx-" + stemWx[i]}>{s}</th>)}</tr></thead><tbody>
            <tr><th>阴阳</th><td>阳</td><td>阴</td><td>阳</td><td>阴</td><td>阳</td><td>阴</td><td>阳</td><td>阴</td><td>阳</td><td>阴</td></tr>
            <tr><th>五行</th>{stemWx.map((w, i) => <td key={i} className={"wx-" + w}>{w}</td>)}</tr>
          </tbody></table>

                    <h3>十天干类象</h3>
          <table><thead><tr><th>天干</th><th>五行</th><th>阴阳</th><th>类象</th><th>特性</th></tr></thead><tbody>
            {stemImagery.map((s, i) => (
              <tr key={i}>
                <td className={"wx-" + s.wx}><strong>{s.stem}</strong></td>
                <td className={"wx-" + s.wx}>{s.wx}</td>
                <td>{s.yy}</td>
                <td>{s.desc}</td>
                <td>{s.nature}</td>
              </tr>
            ))}
          </tbody></table>

          <h3>十二地支</h3>
          <table><thead><tr><th>地支</th>{branches.map((b, i) => <th key={i} className={"wx-" + branchWx[i]}>{b}</th>)}</tr></thead><tbody>
            <tr><th>五行</th>{branchWx.map((w, i) => <td key={i} className={"wx-" + w}>{w}</td>)}</tr>
            <tr><th>时辰</th><td>23-1</td><td>1-3</td><td>3-5</td><td>5-7</td><td>7-9</td><td>9-11</td><td>11-13</td><td>13-15</td><td>15-17</td><td>17-19</td><td>19-21</td><td>21-23</td></tr>
            <tr><th>生肖</th><td>鼠</td><td>牛</td><td>虎</td><td>兔</td><td>龙</td><td>蛇</td><td>马</td><td>羊</td><td>猴</td><td>鸡</td><td>狗</td><td>猪</td></tr>
          </tbody></table>

          <h3>十二地支类象</h3>
          <table><thead><tr><th>地支</th><th>五行</th><th>生肖</th><th>月份</th><th>时辰</th><th>类象</th><th>特性</th></tr></thead><tbody>
            {branchImagery.map((b, i) => (
              <tr key={i}>
                <td className={"wx-" + b.wx}><strong>{b.branch}</strong></td>
                <td className={"wx-" + b.wx}>{b.wx}</td>
                <td>{b.animal}</td>
                <td>{b.month}</td>
                <td>{b.hour}</td>
                <td>{b.desc}</td>
                <td>{b.nature}</td>
              </tr>
            ))}
          </tbody></table>

          <h4>早晚子时</h4>
          <div className="callout-box">
            <strong>子时 23:00~01:00</strong> 分为两段：<br/>
            <strong>晚子时（夜子时）</strong>23:00~23:59：按当天的干支算，但时柱用次日的日干起五鼠遁<br/>
            <strong>早子时（凌晨子时）</strong>00:00~00:59：按次日的干支算
          </div>

          <h2 id="jq">四、二十四节气</h2>
          <p>八字命理以节气划分月份，而非农历初一。月支由<strong>"节"</strong>决定：</p>
          <table><thead><tr><th>节气（节）</th><th>约日</th><th>对应月支</th></tr></thead><tbody>
            {jieQi.map((j, i) => (
              <tr key={i}>
                <td><strong>{j.jie}</strong></td>
                <td>{j.month}月{j.day}日</td>
                <td className={"wx-" + branchWx[branches.indexOf(j.branch[0])]}>{j.branch}</td>
              </tr>
            ))}
          </tbody></table>
          <div className="callout-box"><strong>📌 节气歌：</strong>春雨惊春清谷天，夏满芒夏暑相连，秋处露秋寒霜降，冬雪雪冬小大寒。</div>

        </div>
                    </TocSidebar>
        </div>
      </section>
    </div>
  );
}




