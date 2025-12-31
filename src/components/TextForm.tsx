import { useState, type ChangeEvent } from "react";

interface ITextFormProps {
  mode: string;
  heading: string;
  showAlert: (type: string, message: string) => void;
}

export default function TextForm({ mode, heading, showAlert }: ITextFormProps) {
  const [text, setText] = useState("");

  if (mode === "dark") {
    document.body.style.backgroundColor = "rgb(5 40 70)";
    document.body.style.color = "#fff";
  } else {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "#000";
  }

  const handleOnChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const doUpperCase = () => {
    if (text === text?.toUpperCase()) {
      showAlert("success", "Already in Uppercase.");
    } else {
      let newText = text?.toUpperCase();
      setText(newText);
      showAlert("success", "Converted to Uppercase.");
    }
  };

  const doLowerCase = () => {
    if (text === text?.toLowerCase()) {
      showAlert("success", "Already in Lowercase.");
    } else {
      let newText = text?.toLowerCase();
      setText(newText);
      showAlert("success", "Converted to Lowercase.");
    }
  };

  const removeSpaces = () => {
    let newText = text?.replace(/\s+/g, " ");
    let finalText = newText.replace(/\s+\./g, ".");
    setText(finalText);
    showAlert("success", "Removed extra spaces.");
  };

  const copyText = () => {
    navigator.clipboard.writeText(text);
    showAlert("success", "Copied to Clipboard.");
  };

  const clearText = () => {
    setText("");
    showAlert("success", "Cleared Text.");
  };

  const btnArr = [
    { text: "Uppercase", funName: doUpperCase },
    { text: "Lowercase", funName: doLowerCase },
    { text: "Remove Spaces", funName: removeSpaces },
    { text: "Copy Text", funName: copyText },
    { text: "Clear Text", funName: clearText },
  ];

  return (
    <>
      <div className="container mb-3">
        <h1 className="text-center mb-4">{heading}</h1>
        <textarea
          className="form-control mb-3"
          value={text}
          id="input"
          rows={8}
          placeholder="Enter your text"
          onChange={handleOnChange}
          style={
            mode === "dark"
              ? { backgroundColor: "rgb(30, 80, 120)", color: "white" }
              : { backgroundColor: "rgb(248 249 250)", color: "black" }
          }
        />

        <div className="row">
          {btnArr.map((item) => {
            return (
              <div
                key={item.text}
                className="col-xs-12 col-sm-4 col-md-3 col-lg my-2"
              >
                <button
                  type="button"
                  disabled={text?.length === 0}
                  className="btn btn-primary w-100 text-nowrap"
                  onClick={item.funName}
                >
                  {item.text}
                </button>
              </div>
            );
          })}
        </div>
      </div>

      <div className="container px-2">
        <h2>Text Summary</h2>
        <p>
          {
            text?.split(/\s+/).filter((elem) => {
              return elem.length !== 0;
            }).length
          }{" "}
          words and {text?.length} characters
        </p>

        <p>
          {0.008 *
            text?.split(/\s+/).filter((elem) => {
              return elem.length !== 0;
            }).length}{" "}
          Minutes read
        </p>
        <h2>Preview</h2>
        <p>{text?.length !== 0 ? text : "Nothing to Preview."}</p>
      </div>
    </>
  );
}
