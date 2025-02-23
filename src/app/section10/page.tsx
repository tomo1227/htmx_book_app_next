export default function Page() {
  return (
    <div id="section10-contents" className="section">
      <h1>Section10</h1>

      <h2>innerHTML</h2>
      <div>
        foo
        <p id="target">hoge</p>
      </div>
      <button
        type="button"
        hx-get="/api/random"
        hx-target="#target"
        hx-trigger="click"
        hx-swap="innerHTML"
      >
        クリック
      </button>

      <h2>outerHTML</h2>
      <div>
        foo
        <p id="target2">hoge</p>
      </div>
      <button
        type="button"
        hx-get="/api/random"
        hx-target="#target2"
        hx-trigger="click"
        hx-swap="outerHTML"
      >
        クリック
      </button>

      <h2>afterbegin</h2>
      <div>
        foo
        <p id="target3">hoge</p>
      </div>
      <button
        type="button"
        hx-get="/api/random"
        hx-target="#target3"
        hx-trigger="click"
        hx-swap="afterbegin"
      >
        クリック
      </button>

      <h2>beforebegin</h2>
      <div>
        foo
        <p id="target4">hoge</p>
      </div>
      <button
        type="button"
        hx-get="/api/random"
        hx-target="#target4"
        hx-trigger="click"
        hx-swap="beforebegin"
      >
        クリック
      </button>

      <h2>beforeend</h2>
      <div>
        foo
        <p id="target5">hoge</p>
      </div>
      <button
        type="button"
        hx-get="/api/random"
        hx-target="#target5"
        hx-trigger="click"
        hx-swap="beforeend"
      >
        クリック
      </button>

      <h2>afterend</h2>
      <div>
        foo
        <p id="target6">hoge</p>
      </div>
      <button
        type="button"
        hx-get="/api/random"
        hx-target="#target6"
        hx-trigger="click"
        hx-swap="afterend"
      >
        クリック
      </button>

      <h2>delete</h2>
      <div>
        foo
        <p id="target7">hoge</p>
      </div>
      <button
        type="button"
        hx-get="/api/random"
        hx-target="#target7"
        hx-trigger="click"
        hx-swap="delete"
      >
        クリック
      </button>

      <h2>none</h2>
      <div>
        foo
        <p id="target8">hoge</p>
      </div>
      <button
        type="button"
        hx-get="/api/random"
        hx-target="#target8"
        hx-trigger="click"
        hx-swap="none"
      >
        クリック
      </button>
    </div>
  );
}
