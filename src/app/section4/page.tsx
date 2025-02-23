export default function Page() {
  return (
    <div id="section4-contents" className="section">
      <h1>Section6</h1>

      <h2>once</h2>
      <p id="target1">foo</p>
      <button
        type="button"
        hx-get="/api/random"
        hx-target="#target1"
        hx-trigger="click"
      >
        クリック
      </button>
      <p id="target2">hoge</p>
      <button
        type="button"
        hx-get="/api/random"
        hx-target="#target2"
        hx-trigger="click once"
      >
        クリック
      </button>

      <h2>changed</h2>
      <p id="target3">foo</p>
      <input hx-get="/api/random" hx-target="#target3" hx-trigger="keyup" />
      <p id="target4">hoge</p>
      <input
        hx-get="/api/random"
        hx-target="#target4"
        hx-trigger="keyup changed"
      />

      <h2>delay</h2>
      <p id="target5">foo</p>
      <input
        hx-get="/api/random"
        hx-target="#target5"
        hx-trigger="keyup changed"
      />
      <p id="target6">hoge</p>
      <input
        hx-get="/api/random"
        hx-target="#target6"
        hx-trigger="keyup changed delay:3s"
      />

      <h2>throttle</h2>
      <p id="target7">foo</p>
      <input
        hx-get="/api/random"
        hx-target="#target7"
        hx-trigger="keyup changed"
      />
      <p id="target8">hoge</p>
      <input
        hx-get="/api/random"
        hx-target="#target8"
        hx-trigger="keyup changed throttle:3s"
      />

      <h2>from</h2>
      <p id="target9">foo</p>
      <input
        id="input1"
        hx-get="/api/random"
        hx-target="#target9"
        hx-trigger="keyup from:#input4"
      />
      <input id="input2" />
      <input id="input3" />
      <input id="input4" />
      <input id="input5" />

      <h2>target</h2>
      <p id="target10">foo</p>
      <div id="container">
        <button type="button" className="btn">
          ボタン1
        </button>
      </div>
      <button type="button" className="btn">
        ボタン2
      </button>
      <div
        hx-trigger="click target:.btn"
        hx-get="/api/random"
        hx-target="#target10"
      >
        <div>
          <button type="button" className="btn">
            ボタン3
          </button>
        </div>
        <button type="button" className="btn">
          ボタン4
        </button>
      </div>

      <h2>consume</h2>
      <p id="target11">foo</p>
      <div hx-get="/api/random" hx-target="#target11">
        <button type="button" hx-trigger="click">
          クリック
        </button>
      </div>
      <p id="target12">hoge</p>
      <div hx-get="/api/random" hx-target="#target12">
        <button type="button" hx-trigger="click consume">
          クリック
        </button>
      </div>

      <h2>queue</h2>
      <p className="btn3" hx-trigger="queue:all">
        foo
      </p>
      <button
        type="button"
        hx-target=".btn3"
        hx-get="/api/random"
        hx-trigger="click delay:2s queue:all"
      >
        わーい
      </button>
    </div>
  );
}
