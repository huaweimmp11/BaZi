import TocSidebar from "../components/TocSidebar";

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
<h4>四柱八字概念</h4>
<h4>四柱八字</h4>即出生的具体时间：年、月、日、时，通过干支纪年法，排出来的八个字，也称四柱，即年柱，月柱，日柱，时柱
<h4>天干地支</h4>四柱当中的每一柱都是由天干和地支组成，上面是天干，下面是地支<ul><li>天干共十个，也叫十天干 甲乙丙丁戊己庚辛壬癸</li><li>地支共十二个，也叫十二地支 子丑寅卯辰巳午未申酉戌亥</li></ul>十天干和十二地支同样区分阴和阳：阳性天干：甲丙戊庚壬阴性天干：乙丁己辛癸
<h4>五行</h4>世间万事万物都可以用五种形态或者五种气来代表，古人称为五行四季末：一年四季每季 90 天，每个季度的最后 18 天加一起等于 72 天，这 72 天即为 四季末<table><tr><td>五行</td><td>木</td><td>火</td><td>土</td><td>金</td><td>水</td></tr><tr><td>方向</td><td>东</td><td>南</td><td>中</td><td>西</td><td>北</td></tr><tr><td>五脏</td><td>肝</td><td>心</td><td>脾</td><td>肺</td><td>肾</td></tr><tr><td>颜色</td><td>青绿</td><td>红紫</td><td>黄褐</td><td>金白</td><td>黑</td></tr><tr><td>季节</td><td>春</td><td>夏</td><td>四季末</td><td>秋</td><td>冬</td></tr><tr><td>五常</td><td>仁</td><td>礼</td><td>信</td><td>义</td><td>智</td></tr><tr><td>性格</td><td>积极向上</td><td>大胆创新</td><td>忠厚踏实</td><td>主义坚定</td><td>智慧圆滑</td></tr></table>顺位相生，隔位相克
<h4>十天干类象</h4>奇数为阳，偶数为阴东方甲乙木，南方丙丁火，西方庚辛金，北方壬癸水，中央戊己土<table><tr><td>天干</td><td>甲</td><td>乙</td><td>丙</td><td>丁</td><td>戊</td><td>己</td><td>庚</td><td>辛</td><td>壬</td><td>癸</td></tr><tr><td>阴阳</td><td>阳</td><td>阴</td><td>阳</td><td>阴</td><td>阳</td><td>阴</td><td>阳</td><td>阴</td><td>阳</td><td>阴</td></tr><tr><td>五行</td><td>木</td><td>木</td><td>火</td><td>火</td><td>土</td><td>土</td><td>金</td><td>金</td><td>水</td><td>水</td></tr><tr><td>代表</td><td>大树</td><td>花草</td><td>太阳火</td><td>烛光火</td><td>城墙土</td><td>田园土</td><td>矿石金</td><td>珠宝金</td><td>江河水</td><td>雨露水</td></tr><tr><td>身体</td><td>胆</td><td>肝</td><td>小肠</td><td>心</td><td>胃</td><td>脾</td><td>大肠</td><td>肺</td><td>膀胱</td><td>肾</td></tr></table>
<h4>十二地支类象</h4>从 寅 开始，按照五行相生的顺序“木火金水”，每隔一个属性中间加一个 土这里的月份和阳历阴历都没有关系，指的是 二十四节气<h4>早晚子时</h4><table><tr><td>地支</td><td>子</td><td>丑</td><td>寅</td><td>卯</td><td>辰</td><td>巳</td><td>午</td><td>未</td><td>申</td><td>酉</td><td>戌</td><td>亥</td></tr><tr><td>阴阳</td><td>阳</td><td>阴</td><td>阳</td><td>阴</td><td>阳</td><td>阴</td><td>阳</td><td>阴</td><td>阳</td><td>阴</td><td>阳</td><td>阴</td></tr><tr><td>五行</td><td>水</td><td>土</td><td>木</td><td>木</td><td>土</td><td>火</td><td>火</td><td>土</td><td>金</td><td>金</td><td>土</td><td>水</td></tr><tr><td>月份</td><td>十一冬月</td><td>十二腊月</td><td>一</td><td>二</td><td>三</td><td>四</td><td>五</td><td>六</td><td>七</td><td>八</td><td>九</td><td>十</td></tr><tr><td>生肖</td><td>鼠</td><td>牛</td><td>虎</td><td>兔</td><td>龙</td><td>蛇</td><td>马</td><td>羊</td><td>猴</td><td>鸡</td><td>狗</td><td>猪</td></tr><tr><td>时辰</td><td>23~1</td><td>1~3</td><td>3~5</td><td>5~7</td><td>7~9</td><td>9~11</td><td>11~13</td><td>13~15</td><td>15~17</td><td>17~19</td><td>19~21</td><td>21~23</td></tr></table>
<h4>二十四节气</h4>春季：立春、雨水、惊蛰、春分、清明、谷雨夏季：立夏、小满、芒种、夏至、小暑、大暑秋季：立秋、处暑、白露、秋分、寒霜、霜降冬季：立冬、小雪、大雪、冬至、小寒、大寒<table><tr><td>传统廿四节气歌</td></tr><tr><td>春雨惊春清谷天</td><td>夏满芒夏暑相连</td></tr><tr><td>秋处露秋寒霜降</td><td>冬雪雪冬小大寒</td></tr><tr><td>每月两节不变更</td><td>最多相差一两天</td></tr><tr><td>上半年来六廿一</td><td>下半年是八廿三</td></tr></table>上半年的节气集中在每月的 6日、21日 前后下半年的节气集中在每月的 8日、23日 前后一年四季节，春夏秋冬各三个月，每个月有两个节气，共有二十四节气注意：立春是一年的开始，立春前属于上一年，立春后不管有没有到春节都已经是属于新的一年<table><tr><td>渊海子平 论节侯歌</td></tr><tr><td>正月立春雨水节</td><td>二月惊蛰及春分</td></tr><tr><td>三月清明并谷雨</td><td>四月立夏小满方</td></tr><tr><td>五月芒种并夏至</td><td>六月小暑大暑当</td></tr><tr><td>七月立秋还处暑</td><td>八月白露秋分忙</td></tr><tr><td>九月寒露又霜降</td><td>十月立冬小雪张</td></tr><tr><td>子月大雪冬至节</td><td>丑月小寒大寒昌</td></tr></table>
            </div>
          </TocSidebar>
        </div>
      </section>
    </div>
  );
}
