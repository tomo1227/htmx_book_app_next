export default function Page() {
  return (
    <div id="section3-contents" className="section">
      <h1>Section3</h1>

      <div className="section-item-wrapper">
        <div className="section-item">
          <h2>hx-get</h2>
          <button type="button" hx-get="/api/hello">
            クリック
          </button>
        </div>

        <div className="section-item">
          <h2>hx-post</h2>
          <button type="button" hx-post="/api/hello">
            クリック
          </button>
        </div>

        <div className="section-item">
          <h2>hx-put</h2>
          <button type="button" hx-put="/api/hello">
            クリック
          </button>
        </div>

        <div className="section-item">
          <h2>hx-patch</h2>
          <button type="button" hx-patch="/api/hello">
            クリック
          </button>
        </div>

        <div className="section-item">
          <h2>hx-delete</h2>
          <button type="button" hx-delete="/api/hello">
            クリック
          </button>
        </div>
      </div>
    </div>
  );
}
