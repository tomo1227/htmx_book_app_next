export default function Page() {
  return (
    <div id="section12-contents" className="section">
      <h1>Section12</h1>

      <h2>hx-param</h2>

      <h2>*</h2>
      <p id="target1">foo</p>
      <form hx-post="/send-form" hx-params="*" hx-target="#target1">
        <input name="title" type="text" placeholder="タイトル" />
        <input name="name" type="text" placeholder="名前" />
        <input name="age" type="number" placeholder="年齢" />
        <button type="submit">送信</button>
      </form>

      <h2>none</h2>
      <p id="target2">foo</p>
      <form hx-post="/send-form" hx-params="none" hx-target="#target2">
        <input name="title" type="text" placeholder="タイトル" />
        <input name="name" type="text" placeholder="名前" />
        <input name="age" type="number" placeholder="年齢" />
        <button type="submit">送信</button>
      </form>

      <h2>param-list</h2>
      <p id="target3">foo</p>
      <form hx-post="/send-form" hx-params="title,age" hx-target="#target3">
        <input name="title" type="text" placeholder="タイトル" />
        <input name="name" type="text" placeholder="名前" />
        <input name="age" type="number" placeholder="年齢" />
        <button type="submit">送信</button>
      </form>

      <h2>not param-list</h2>
      <p id="target4">foo</p>
      <form hx-post="/send-form" hx-params="not title,age" hx-target="#target4">
        <input name="title" type="text" placeholder="タイトル" />
        <input name="name" type="text" placeholder="名前" />
        <input name="age" type="number" placeholder="年齢" />
        <button type="submit">送信</button>
      </form>

      <h2>hx-include</h2>
      <p id="target5">foo</p>
      <div>
        <input name="title" type="text" placeholder="タイトル" />
        <input name="name" type="text" placeholder="名前" />
        <input name="age" type="number" placeholder="年齢" />
        <button
          type="button"
          hx-post="/send-form"
          hx-include="preview [name='name']"
          hx-target="#target5"
        >
          送信
        </button>
      </div>

      <h2>hx-vals</h2>
      <p id="target6">foo</p>
      <button
        type="button"
        hx-post="/greeting"
        hx-vals='{"title": "Hello", "name": "Taro"}'
        hx-target="#target6"
      >
        送信
      </button>

      <p id="target7">foo</p>
      <div
        hx-target="#target7"
        hx-post="/last-key"
        hx-trigger="keyup"
        hx-vals="js:{lastkey: event.key}"
      >
        <input type="text" />
      </div>
    </div>
  );
}
