export default function Page() {
  return (
    <div id="section7-contents" className="section">
      <h1>Section7</h1>

      <h2>load</h2>
      <p hx-get="/api/random" hx-trigger="load delay:3s">
        foo
      </p>

      <h2>revealed</h2>
      <p className="height: 100vh;">画面をスクロールしてください</p>
      <p id="target1" className="height:100px">
        foo
      </p>
      <p
        hx-target="#target1"
        hx-get="/api/random"
        hx-trigger="revealed delay:1s"
      >
        hoge
      </p>

      <h2>intersect</h2>
      <p>スクロールしてください</p>
      <div
        id="target2"
        className="height: 300px; width:30%; overflow-y: scroll; border: 1px solid #ccc; background-color: yellow;"
      >
        <div className="height: 600px;">
          <div
            hx-trigger="intersect"
            hx-get="/api/random"
            className="margin-top: 300px; height: 150px; background-color: lightblue;"
          >
            こんにちは！
          </div>
        </div>
      </div>

      <h2>rootを指定したintersect</h2>
      <p>スクロールしてください</p>
      <div
        id="target3"
        className="height: 300px; width:30%; overflow-y: scroll; border: 1px solid #ccc; background-color: yellow;"
      >
        <div className="height: 300px;">
          <div className="margin-top: 300px;">
            <div
              id="target4"
              className="overflow-y: scroll; height: 100px; background-color: rgb(34, 255, 0)"
            >
              <div
                hx-trigger="intersect root:#target4"
                hx-get="/api/random"
                className="margin-top: 300px; height: 50px; background-color: lightblue;"
              >
                こんにちは！
              </div>
            </div>
          </div>
        </div>
      </div>

      <h2>threshold(1)を指定したintersect</h2>
      <p>スクロールしてください</p>
      <div className="height: 300px; width:30%; overflow-y: scroll; border: 1px solid #ccc; background-color: yellow;">
        <div className="height: 300px;">
          <div
            hx-trigger="intersect threshold:1"
            hx-get="/api/random"
            className="margin-top: 300px; height: 150px; background-color: lightblue;"
          >
            こんにちは！
          </div>
        </div>
      </div>

      <h2>threshold(0.5)を指定したintersect</h2>
      <p>スクロールしてください</p>
      <div className="height: 300px; width:30%; overflow-y: scroll; border: 1px solid #ccc; background-color: yellow;">
        <div className="height: 300px;">
          <div
            hx-trigger="intersect threshold:0.5"
            hx-get="/api/random"
            className="margin-top: 300px; height: 150px; background-color: lightblue;"
          >
            こんにちは！
          </div>
        </div>
      </div>
    </div>
  );
}
