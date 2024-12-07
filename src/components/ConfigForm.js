import React, { useState } from "react";
import { startSimulation } from "../services/api"; // Assuming this function makes the API call

const ConfigForm = () => {
  const [totalTickets, setTotalTickets] = useState("");
  const [ticketsRelRate, setTicketsRelRate] = useState("");
  const [customerRetRate, setCustomerRetRate] = useState("");
  const [maxTicketCapacity, setMaxTicketCapacity] = useState("");
  const [status, setStatus] = useState("");

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create configuration object
    const config = {
      totalTickets: parseInt(totalTickets),
      ticketsRelRate: parseInt(ticketsRelRate),
      customerRetRate: parseInt(customerRetRate),
      maxTicketCapacity: parseInt(maxTicketCapacity),
    };

    try {
      const response = await startSimulation(config); // API call
      console.log(response); // Check the response here
      setStatus(response);
    } catch (error) {
      console.error("Error starting simulation:", error);
      setStatus("Error starting simulation.");
    }
  };

  return (
    <div>
      <h3>System Configuration</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Total Tickets:</label>
          <input
            type="number"
            value={totalTickets}
            onChange={(e) => setTotalTickets(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Ticket Release Rate (seconds):</label>
          <input
            type="number"
            value={ticketsRelRate}
            onChange={(e) => setTicketsRelRate(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Customer Retrieval Rate (milliseconds):</label>
          <input
            type="number"
            value={customerRetRate}
            onChange={(e) => setCustomerRetRate(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Max Ticket Capacity:</label>
          <input
            type="number"
            value={maxTicketCapacity}
            onChange={(e) => setMaxTicketCapacity(e.target.value)}
            required
          />
        </div>
        <div>
          <button type="submit">Start Simulation</button>
        </div>
      </form>
      {status && <div>{status}</div>} {/* Display status message */}
    </div>
  );
};

export default ConfigForm;
