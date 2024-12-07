import React from "react";
import { stopSimulation } from "../services/api";

const ControlPanel = () => {
  const handleStop = async () => {
    try {
      const response = await stopSimulation();
      alert(response.message); // Notify the user
    } catch (error) {
      console.error("Failed to stop simulation:", error);
      alert("Error stopping the simulation");
    }
  };

  return (
    <div>
      <h3>Control Panel</h3>
      <button onClick={handleStop}>Stop Simulation</button>
    </div>
  );
};

export default ControlPanel;
