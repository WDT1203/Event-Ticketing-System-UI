import React, { useState } from "react";
import { startSimulation, stopSimulation } from "../services/api"; // Import both functions
import styles from "../style/ConfigForm.module.css"; // Import the CSS module

const ConfigForm = () => {
  const [totalTickets, setTotalTickets] = useState("");
  const [ticketsRelRate, setTicketsRelRate] = useState("");
  const [customerRetRate, setCustomerRetRate] = useState("");
  const [maxTicketCapacity, setMaxTicketCapacity] = useState("");
  const [status, setStatus] = useState("");

  // Handle form submission for starting the simulation
  const handleStart = async (e) => {
    e.preventDefault();

    // Create configuration object
    const config = {
      totalTickets: parseInt(totalTickets),
      ticketsRelRate: parseInt(ticketsRelRate),
      customerRetRate: parseInt(customerRetRate),
      maxTicketCapacity: parseInt(maxTicketCapacity),
    };

    try {
      const response = await startSimulation(config); // API call to start the simulation
      console.log(response); // Check the response here
      setStatus(response);
    } catch (error) {
      console.error("Error starting simulation:", error);
      setStatus("Error starting simulation.");
    }
  };

  // Handle stopping the simulation
  const handleStop = async () => {
    try {
      const response = await stopSimulation(); // API call to stop the simulation
      alert(response.message); // Notify the user
    } catch (error) {
      console.error("Failed to stop simulation:", error);
      alert("Error stopping the simulation");
    }
  };

  return (
    <div className={styles.container}>
      <h3>System Configuration</h3>
      <form onSubmit={handleStart}>
        <div className={styles["form-group"]}>
          <label>Total Tickets:</label>
          <input
            type="number"
            value={totalTickets}
            onChange={(e) => setTotalTickets(e.target.value)}
            required
          />
        </div>
        <div className={styles["form-group"]}>
          <label>Ticket Release Rate (seconds):</label>
          <input
            type="number"
            value={ticketsRelRate}
            onChange={(e) => setTicketsRelRate(e.target.value)}
            required
          />
        </div>
        <div className={styles["form-group"]}>
          <label>Customer Retrieval Rate (milliseconds):</label>
          <input
            type="number"
            value={customerRetRate}
            onChange={(e) => setCustomerRetRate(e.target.value)}
            required
          />
        </div>
        <div className={styles["form-group"]}>
          <label>Max Ticket Capacity:</label>
          <input
            type="number"
            value={maxTicketCapacity}
            onChange={(e) => setMaxTicketCapacity(e.target.value)}
            required
          />
        </div>
        <div className={styles["form-group"]}>
          <button type="submit">Start Simulation</button>
        </div>
      </form>
      <div className={styles["form-group"]}>
        <button onClick={handleStop}>Stop Simulation</button>
      </div>
      {status && <div className={styles["status-message"]}>{status}</div>}
    </div>
  );
};

export default ConfigForm;
