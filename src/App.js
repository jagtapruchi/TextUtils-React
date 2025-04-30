import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert.js";
import About from "./components/About.js"; // Unused
import React, { useState } from "react";

// React Router imports
import { HashRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => setAlert(null), 2000);
  };

  const removeColor = () => {
    document.body.classList.remove("bg-success");
    document.body.classList.remove("bg-dark");
    document.body.classList.remove("bg-warning");
    document.body.classList.remove("bg-danger");
  };

  const [mode, setMode] = useState("light");

  const toggleMode = (cls) => {
    removeColor();
    document.body.classList.add("bg-" + cls);
    setMode(cls);
    showAlert(
      `${cls.charAt(0).toUpperCase() + cls.slice(1)} mode has been enabled`, "success"
      // Backticks (`) define a template literal, allowing embedded expressions and multi-line strings.
      // The ${...} syntax is used inside template literals to embed JavaScript expressions.
    );
  };

  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          aboutText="About"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <TextForm
                  heading="TextUtils - Word counter, Character counter, Case converter, Email extractor, Word capitalizer"
                  mode={mode}
                  showAlert={showAlert}
                />
              }
            />
            <Route exact path="/about" element={<About mode={mode} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
