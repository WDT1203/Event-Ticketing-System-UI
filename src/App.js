import React from "react";
import ConfigForm from "./components/ConfigForm";
import TktDisplay from "./components/TktDisplay";
import ControlPanel from "./components/ControlPanel";
import LogDisplay from "./components/LogDisplay";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <header>
        <h1>Ticketing System</h1>
      </header>
      <main>
        <ConfigForm />
        <TktDisplay />
        <ControlPanel />
        <LogDisplay />
      </main>
    </div>
  );
};

export default App;
