import React from "react";
import ConfigForm from "./components/ConfigForm";
import TktDisplay from "./components/TktDisplay"; // Ticket pool status component
import LogDisplay from "./components/LogDisplay"; // Log display component
import "./App.css"; // Ensure you import the CSS for the layout

function App() {
  return (
    <div className="App">
      <div className="header">
        <h1>Ticketing Management System</h1>
      </div>
      <div className="page-wrapper">
        <div className="configuration-section">
          <ConfigForm />
        </div>
        <div className="logs-section">
          <LogDisplay />
        </div>
        <div className="ticket-display-section">
          <TktDisplay />
        </div>
      </div>
    </div>
  );
}

export default App;
