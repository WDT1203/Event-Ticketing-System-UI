import React, { useState, useEffect } from "react";
import { getLogs } from "../services/api"; // Ensure this is the correct API function

const LogDisplay = () => {
  const [logs, setLogs] = useState([]); // Use an array to store the logs
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchLogs = async () => {
    try {
      setLoading(true);
      const data = await getLogs(); // Fetch the logs
      setLogs(data); // Set the logs directly (assuming data is an array)
    } catch (error) {
      setError("Error fetching logs");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLogs();
  }, []); // Fetch logs only once when the component mounts

  return (
    <div>
      <h2>Logs:</h2>
      <button onClick={fetchLogs} disabled={loading}>
        {loading ? "Refreshing..." : "Refresh Logs"}
      </button>
      {loading ? (
        <p>Loading logs...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div>
          {logs && logs.length > 0 ? (
            logs.map((log, index) => (
              <div key={index}>
                {/* Render the timestamp and message from the log object */}
                <p>
                  <strong>Timestamp:</strong> {log["@timestamp"]}
                </p>
                <p>
                  <strong>Message:</strong> {log.message}
                </p>
                <hr />
              </div>
            ))
          ) : (
            <p>No logs available.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default LogDisplay;
