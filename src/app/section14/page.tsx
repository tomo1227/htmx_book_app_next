export default function Page() {
  return (
    <div id="section14-contents" className="section">
      <h1>Section14</h1>

      <h2>hx-targetの例</h2>
      <p id="target1">foo</p>
      <p id="target2">hoge</p>
      <div hx-target="#target1">
        <button type="button" hx-get="/api/random" hx-trigger="click">
          ボタン1
        </button>
        <button
          type="button"
          hx-get="/api/random"
          hx-target="#target2"
          hx-trigger="click"
        >
          ボタン2
        </button>
      </div>
      <button type="button" hx-get="/api/random" hx-trigger="click">
        ボタン3
      </button>

      <h2>hx-confirmの例</h2>
      <div hx-confirm="本当にこのボタンでいいですか？">
        <p>好きなボタンを選んでください</p>
        <button type="button" hx-get="/api/random">
          ボタンA
        </button>
        <button type="button" hx-get="/api/random">
          ボタンB
        </button>
        <button type="button" hx-confirm="unset" hx-get="/api/random">
          ボタンC
        </button>
      </div>

      <h2>hx-disinherit</h2>
      <p id="target3">foo</p>
      <div hx-target="#target3" hx-disinherit="hx-target">
        <button type="button" hx-get="/api/random" hx-trigger="click">
          クリック
        </button>
      </div>

      <h2>hx-disinherit</h2>
      <p id="target4">foo</p>
      <div hx-target="#target4" hx-confirm="" hx-disinherit="*">
        <button type="button" hx-get="/api/random" hx-trigger="click">
          クリック
        </button>
      </div>
    </div>
  );
}
