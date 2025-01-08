import Image from "next/image";

export default function Page() {
  return (
    <div id="section9-contents" className="section">
      <h1>Section9</h1>

      <h2>hx-indicator</h2>
      <Image
        id="spinner"
        className="htmx-indicator"
        src="/static/spinner.svg"
        alt="spinner"
      />
      <div>
        <button type="button" hx-get="/heavy" hx-indicator="#spinner">
          クリック
        </button>
      </div>

      <Image
        id="spinner2"
        className="htmx-indicator position:fixed; top:50%; left:50%; z-index:1000; transform: translate(-50%, -50%);"
        src="/static/spinner.svg"
        alt="spinner2"
      />
      <div>
        <button type="button" hx-get="/heavy" hx-indicator="#spinner2">
          クリック２
        </button>
      </div>
    </div>
  );
}
