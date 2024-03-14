import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fontsource/dm-sans";
import Routing from "./providers/index";
function App() {
  return (
    <Router basename={window.location.pathname}>
      <Routes>
        <Route path="/*" element={<Routing />} />
      </Routes>
    </Router>
  );
}

export default App;
