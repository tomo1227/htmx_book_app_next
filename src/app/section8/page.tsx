export default function Page() {
  return (
    <div id="section7-contents" className="section">
      <h1>Section8</h1>

      <h2>every</h2>
      <p id="target1">foo</p>
      <p hx-target="#target1" hx-get="/api/random" hx-trigger="every 1s">
        hoge
      </p>

      <h2>ロードポーリング</h2>
      <p
        hx-get="/api/random_polling"
        hx-trigger="load delay:1s"
        hx-target="this"
      >
        hoge
      </p>

      <h2>複数のトリガー</h2>
      <p id="target2">foo</p>
      <button
        type="button"
        hx-target="#target2"
        hx-get="/api/random"
        hx-trigger="load, click delay:0.5s"
      >
        クリック
      </button>
    </div>
  );
}
