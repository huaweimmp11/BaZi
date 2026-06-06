import TocSidebar from "../components/TocSidebar";
export default function ClassicsPage() {
  const books = [
    { n: "《渊海子平》", e: "宋·徐子平", d: "子平法奠基，四柱论命体系开创" },
    { n: "《三命通会》", e: "明·万民英", d: "命理百科全书，十二卷巨制" },
    { n: "《滴天髓》", e: "明·刘基(传)", d: "理法精深，任铁樵注本最流行" },
    { n: "《穷通宝鉴》", e: "明·佚名", d: "调候用神专著，实战价值极高" },
    { n: "《子平真诠》", e: "清·沈孝瞻", d: "格局论命集大成，逻辑清晰" },
    { n: "《神峰通考》", e: "明·张楠", d: "病药说，去病为用" },
    { n: "《命理约言》", e: "清·陈素庵", d: "论命简约，去芜存菁" },
    { n: "《千里命稿》", e: "民国·韦千里", d: "近现代代表作，适合入门" }
  ];

  return (
    <div>
      <div className="page-header">
        <div className="container"><h1>经典参考</h1><p>八字命理核心典籍 · 源流与概要</p></div>
      </div>
      <section className="content">
        <div className="container">
          <TocSidebar>
            <div className="content-body">
          <h2>经典书谱</h2>
          <table><thead><tr><th>古籍</th><th>年代</th><th>重点</th></tr></thead><tbody>
            {books.map(b => <tr key={b.n}><td><strong>{b.n}</strong></td><td>{b.e}</td><td>{b.d}</td></tr>)}
          </tbody></table>

          <h2>推荐学习顺序</h2>
          <div className="info-box">
            <strong>入门：</strong>《千里命稿》→《子平真诠》→《穷通宝鉴》→《滴天髓》<br />
            初学者先建立直观认识，再理解格局框架，然后掌握调候，最后提升理论深度。
          </div>
        </div>
          </TocSidebar>
        </div>
      </section>
    </div>
  );
}
