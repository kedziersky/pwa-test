import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  useEffect(() => {
    if (window.matchMedia("(display-mode: standalone)").matches) {
      document.addEventListener("visibilitychange", function () {
        if (document.visibilityState === "visible") {
          alert("APP resumed");
          window.location.reload();
        }
      });
    }
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <p>TELOOasdasdO</p>
      </header>
    </div>
  );
}

export default App;
