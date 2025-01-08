export default function Page() {
  return (
    <div id="section6-contents" className="section">
      <h1>Section4 hx-target</h1>

      <div className="section-item-wrapper">
        <div className="section-item">
          <h2>hx-targetがない場合</h2>
          <p>I love htmx!</p>
          <button type="button" hx-get="/api/hello">
            クリック
          </button>
        </div>
      </div>

      <div className="section-item-wrapper">
        <div className="section-item">
          <h2>hx-targetを指定した場合</h2>
          <p id="htmx">I love htmx!</p>
          <button type="button" hx-get="/api/hello" hx-target="#htmx">
            クリック
          </button>
        </div>
      </div>

      <h1>拡張CSSセレクタ</h1>

      <div className="section-item-wrapper">
        <div className="section-item">
          <h2>this</h2>
          <p>A</p>
          <button type="button" hx-get="/api/hello" hx-target="this">
            クリック
          </button>
          <p>B</p>
        </div>
      </div>

      <div className="section-item-wrapper">
        <div className="section-item">
          <h2>closest CSSセレクタ</h2>
          <div>
            <p>A</p>
            <div>
              <p>B</p>
              <button type="button" hx-get="/api/hello" hx-target="closest div">
                クリック
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="section-item-wrapper">
        <div className="section-item">
          <h2>find CSSセレクタ</h2>
          <p>A</p>
          <button type="button" hx-get="/api/hello" hx-target="find p">
            <p>B</p>
            <p>C</p>
            クリック
          </button>
        </div>
      </div>

      <div className="section-item-wrapper">
        <div className="section-item">
          <h2>next CSSセレクタ</h2>
          <p>A</p>
          <button type="button" hx-get="/api/hello" hx-target="next p">
            クリック
          </button>
          <p>B</p>
          <p>C</p>
        </div>
      </div>

      <div className="section-item-wrapper">
        <div className="section-item">
          <h2>previous CSSセレクタ</h2>
          <p>A</p>
          <p>B</p>
          <button type="button" hx-get="/api/hello" hx-target="previous p">
            クリック
          </button>
          <p>C</p>
        </div>
      </div>
    </div>
  );
}
