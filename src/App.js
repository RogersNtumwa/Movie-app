import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Home } from "./pages";
import { Navbar } from "./components";

function App() {
  return (
    <div className="App">
      <Router>
        <Home />
        <Navbar />
      </Router>
    </div>
  );
}

export default App;
