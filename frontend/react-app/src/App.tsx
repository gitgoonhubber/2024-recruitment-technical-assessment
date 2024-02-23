import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Info from "./components/Info";

function App() {
  return (
    <div className="page-container">
      <Sidebar />
      <Info />
    </div>
  );
}

export default App;
