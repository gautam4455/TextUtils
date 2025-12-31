import { useState } from "react";
// For multi pages
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

// import About from "./components/About";

function App() {
  const [mode, setMode] = useState("dark");
  const [alert, setAlert] = useState<{ type: string; message: string } | null>(
    null
  );

  const showAlert = (type: string, message: string) => {
    setAlert({ type, message });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      showAlert("success", "Light Mode has Enabled.");
    }
    if (mode === "light") {
      setMode("dark");
      showAlert("success", "Dark Mode has Enabled.");
    }
  };

  return (
    <>
      {/* For Github - removed routing (git does not support it) */}
      <div className="App">
        <Navbar mode={mode} title="TextUtils" toggleMode={toggleMode} />

        <div style={{ height: "100px" }}>
          <Alert alert={alert} />
        </div>

        <div className="container">
          <TextForm
            mode={mode}
            heading="Try TextUtils - Word Counter, Character Counter, Remove Extra Spaces"
            showAlert={showAlert}
          />
        </div>
      </div>

      {/* For Servers - where multiple routes supports */}
      {/* <div className="App">
        <Router>
          <Navbar mode={mode} title="TextUtils" toggleMode={toggleMode} />

          <div style={{ height: "100px" }}>
            <Alert alert={alert} />
          </div>

          <div className="container">
            <Routes>
              <Route
                index
                path="/"
                element={
                  <TextForm
                    mode={mode}
                    heading="Try TextUtils - Word Counter, Character Counter, Remove Extra Spaces"
                    showAlert={showAlert}
                  />
                }
              />
              <Route path="/about" element={<About mode={mode} />} />
            </Routes>
          </div>
        </Router>
      </div> */}
    </>
  );
}

export default App;
