export default function HomePage() {
  return (
    <main className="shell">
      <section className="hero">
        <span className="badge">合规运营工具</span>
        <h1>抖音账号运营助手</h1>
        <p>集中查看评论提醒、管理关键词规则，并生成可人工审核的回复草稿。不自动关注、不批量私信、不绕过平台规则。</p>
        <a className="primary" href="/dashboard">进入工作台</a>
      </section>
      <section className="features">
        <article><h2>评论提醒</h2><p>按关键词筛选待处理评论并集中查看。</p></article>
        <article><h2>回复草稿</h2><p>生成建议文案，账号本人确认后再操作。</p></article>
        <article><h2>24 小时试用</h2><p>管理员可为账号开通短期体验权限。</p></article>
      </section>
    </main>
  );
}
