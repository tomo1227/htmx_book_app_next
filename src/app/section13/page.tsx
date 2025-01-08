export default function Page() {
  return (
    <div id="section13-contents" className="section">
      <h1>Section13</h1>

      <h2>ダイアログ</h2>
      <button type="button" hx-get="/api/random" hx-confirm="ハロー">
        クリック
      </button>

      <h2>hx-boost(有効時) リンクの例</h2>
      <div hx-boost="true">
        <a href="/section14">section14へ</a>
      </div>

      <h2>hx-boost(無効時) リンクの例</h2>
      <div hx-boost="false">
        <a href="/section14">section14へ</a>
      </div>

      <h2>hx-boost(有効時) formの例</h2>
      <form hx-boost="true" action="/send-form" method="post">
        <input name="name" type="text" />
        <button type="submit">送信</button>
      </form>

      <h2>hx-push-url(true)</h2>
      <button type="button" hx-get="/api/random" hx-push-url="true">
        クリック
      </button>

      <h2>hx-push-url(false)</h2>
      <button
        type="button"
        hx-get="/api/random"
        hx-push-url="/section13/random"
      >
        クリック
      </button>

      <h2>hx-push-url(カスタムURL)</h2>
      <button
        type="button"
        hx-get="/api/random"
        hx-push-url="/section13/random"
      >
        クリック
      </button>

      <h2>hx-on</h2>
      <button type="button" hx-on-click="alert('こんにちは!')">
        クリック
      </button>

      <h2>htmx:before-request</h2>
      <button
        type="button"
        hx-get="/api/random"
        hx-on-htmx-before-request="alert('こんにちは!')"
      >
        クリック
      </button>

      <h2>htmx-after-request</h2>
      <button
        type="button"
        hx-get="/api/random"
        hx-on-htmx-before-request="alert('こんにちは!')"
        hx-on-htmx-after-request="alert('こんばんは!')"
      >
        クリック
      </button>
    </div>
  );
}
