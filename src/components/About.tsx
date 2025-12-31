export default function About({ mode }: { mode: string }) {
  if (mode === "dark") {
    document.body.style.backgroundColor = "rgb(5 40 70)";
  } else {
    document.body.style.backgroundColor = "white";
  }

  let myStyle = {
    backgroundColor: mode === "dark" ? "rgb(30 80 120)" : "rgb(215 235 255)",
    color: mode === "dark" ? "#fff" : "black",
  };

  let myStyle2 = {
    backgroundColor: mode === "dark" ? "rgb(50 130 200)" : "rgb(240 250 255)",
    color: mode === "dark" ? "#fff" : "black",
  };

  return (
    <>
      <div>
        <h1
          className="text-center mb-3"
          style={{ color: mode === "dark" ? "#fff" : "black" }}
        >
          About Us
        </h1>

        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
                style={myStyle}
              >
                Analyze Your Text
              </button>
            </h2>

            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
              style={myStyle2}
            >
              <div className="accordion-body">
                TextUtils gives you a way to analyze your text quickly and
                efficiently. Be it word count or character count.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
                style={myStyle}
              >
                Free to Use
              </button>
            </h2>

            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
              style={myStyle2}
            >
              <div className="accordion-body">
                Text Utility is free character counter tool that provides
                instant character count &amp; word count statistics for given
                text. TextUtils reports the number of words and characters. Thus
                it is suitable for writing text with word/character limit.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
                style={myStyle}
              >
                Browser Compatible
              </button>
            </h2>

            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
              style={myStyle2}
            >
              <div className="accordion-body">
                This word counter software works in any web browser such as
                Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to
                count characters in facebook, blog, books, excel document, pdf
                document, essays etc.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
