import React, { useState } from "react";
import { getTicketPoolStatus } from "../services/api";
import styles from "../style/ConfigForm.module.css"; // Use the same CSS module

const TktDisplay = () => {
  const [status, setStatus] = useState("No data yet");
  const [error, setError] = useState(null);

  // Function to fetch the ticket pool status
  const fetchStatus = async () => {
    try {
      setError(null); // Clear any previous error
      const status = await getTicketPoolStatus();
      setStatus(status); // Update the state with the fetched status
    } catch (err) {
      console.error("Error fetching ticket pool status:", err);
      setError("Failed to fetch ticket pool status.");
    }
  };

  return (
    <div className={styles.ticketCard}>
      <h2>Ticket Pool Status</h2>
      <p>Tickets available: {error ? error : status}</p>
      <button onClick={fetchStatus}>Get Available Tickets</button>
    </div>
  );
};

export default TktDisplay;
