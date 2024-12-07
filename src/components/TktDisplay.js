import React, { useState, useEffect } from "react";
import { getTicketPoolStatus } from "../services/api"; // Make sure this import path is correct

const TktDisplay = () => {
  const [status, setStatus] = useState("");

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const statusData = await getTicketPoolStatus();
        setStatus(statusData);
      } catch (error) {
        console.error("Error fetching ticket pool status:", error);
      }
    };

    fetchStatus();
  }, []);

  return (
    <div>
      <h2>Ticket Pool Status</h2>
      <p>{status ? `Tickets available: ${status}` : "Loading..."}</p>
    </div>
  );
};

export default TktDisplay;
